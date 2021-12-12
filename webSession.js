
const currentDate = getDate();
const expiresAt = new Date(currentDate.getTime() + 4 * 60 * 60 * 1000);
const sessionData = getSessionData('WebSessionData');
const campaign = getCampaign();

function getSessionData(name) {
  if (hasLocalStorage()) {
    const item = window.localStorage.getItem(name);

    return item
      ? JSON.parse(item)
      : {
        current: {},
        origin: {},
      };
  }
  return {
    current: {},
    origin: {},
  };
}
function setSessionData(name, data) {
  if (hasLocalStorage()) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }
}

function hasLocalStorage() {
  if (window && typeof window?.isLocalStorageSupported === 'undefined') {
    const testKey = 'test';
    const storage = window.localStorage;

    try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      window.isLocalStorageSupported = true;
    } catch {
      window.isLocalStorageSupported = false;
    }
  }

  return window.isLocalStorageSupported;
}
// return date and time GMT-5:00 (detroit time zone )
function getDate() {
  const targetTime = new Date();
  targetTime.setTime(targetTime.getTime());
  const timeZoneFromDB = -5.0;
  const tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
  const offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
  return offsetTime;
}

function webSession() {
  if (!hasLocalStorage()) {
    console.error('localStorage is not supported');
  }
  if (isNewSession()) {
    update();
    return true;
  } else {
    update();
    return false;

  }
}

function update() {
  /* istanbul ignore else */
  const { current, origin } = sessionData;
  const nextSession = {
    origin,
    current: {
      ...current,
      expiresAt: expiresAt.toString(),
    },
  };
  if (isNewSession()) {
    nextSession.current = {
      href: window.location.href,
      campaign,
      expiresAt: expiresAt.toString(),
      referrer: document.referrer,
    };
  }
  setSessionData('WebSessionData', nextSession);
}

function isExpired() {
  const { current } = sessionData;
  const oldExpiresAt = new Date(current.expiresAt);
  const oldExpiresAtCreationTime = new Date(
    oldExpiresAt.getTime() - 4 * 60 * 60 * 1000,
  );

  return (
    oldExpiresAtCreationTime.getDay() !== currentDate.getDay() ||
    oldExpiresAt.getTime() < currentDate.getTime()
  );
}

function isNewSession() {
  return !hasSession() || hasNewCampaign() || isExpired();
}

function hasNewCampaign() {
  const { current } = sessionData;

  return !shallowCompare(current.campaign, campaign);
}

function hasSession() {
  return !!getSessionData('WebSessionData');
}

function shallowCompare(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function getCampaign() {
  if (!sessionData) {
    return {};
  }

  const { current } = sessionData;
  const oldCampaign = current ? current.campaign : {};

  if (!window.location.search) {
    return oldCampaign;
  }

  const nextCampaign = parseQuery(window.location.search).reduce(
    (accumulator, [key, value]) => {
      if (key.startsWith('utm_')) {
        accumulator[key.slice(4)] = value;
      }

      if (key.startsWith('gclid')) {
        accumulator[key] = value;
      }

      return accumulator;
    },
    {},
  );

  if (Object.keys(nextCampaign).length) {
    return nextCampaign;
  }

  return oldCampaign;
}

function parseQuery(query) {
  return query
    .slice(1)
    .split('&')
    .map(d => {
      const [key, value] = d.split('=');
      return [key, value];
    });
}
