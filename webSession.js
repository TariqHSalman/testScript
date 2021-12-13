"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var currentDate = getDate();
var expiresAt = new Date(currentDate.getTime() + 4 * 60 * 60 * 1000);
var sessionData = getSessionData('WebSessionData');
var campaign = getCampaign();

function getSessionData(name) {
  if (hasLocalStorage()) {
    var item = window.localStorage.getItem(name);
    return item ? JSON.parse(item) : {
      current: {},
      origin: {}
    };
  }

  return {
    current: {},
    origin: {}
  };
}

function setSessionData(name, data) {
  if (hasLocalStorage()) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }
}

function hasLocalStorage() {
  var _window;

  if (window && typeof ((_window = window) === null || _window === void 0 ? void 0 : _window.isLocalStorageSupported) === 'undefined') {
    var testKey = 'test';
    var storage = window.localStorage;

    try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      window.isLocalStorageSupported = true;
    } catch {
      window.isLocalStorageSupported = false;
    }
  }

  return window.isLocalStorageSupported;
} // return date and time GMT-5:00 (detroit time zone )


function getDate() {
  var targetTime = new Date();
  targetTime.setTime(targetTime.getTime());
  var timeZoneFromDB = -5.0;
  var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
  var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
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
  var current = sessionData.current,
      origin = sessionData.origin;
  var nextSession = {
    origin: origin,
    current: { ...current,
      expiresAt: expiresAt.toString()
    }
  };

  if (isNewSession()) {
    nextSession.current = {
      href: window.location.href,
      campaign: campaign,
      expiresAt: expiresAt.toString(),
      referrer: document.referrer
    };
  }

  setSessionData('WebSessionData', nextSession);
}

function isExpired() {
  var current = sessionData.current;
  var oldExpiresAt = new Date(current.expiresAt);
  var oldExpiresAtCreationTime = new Date(oldExpiresAt.getTime() - 4 * 60 * 60 * 1000);
  return oldExpiresAtCreationTime.getDay() !== currentDate.getDay() || oldExpiresAt.getTime() < currentDate.getTime();
}

function isNewSession() {
  return !hasSession() || hasNewCampaign() || isExpired();
}

function hasNewCampaign() {
  var current = sessionData.current;
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

  var current = sessionData.current;
  var oldCampaign = current ? current.campaign : {};

  if (!window.location.search) {
    return oldCampaign;
  }

  var nextCampaign = parseQuery(window.location.search).reduce(function (accumulator, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key.startsWith('utm_')) {
      accumulator[key.slice(4)] = value;
    }

    if (key.startsWith('gclid')) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});

  if (Object.keys(nextCampaign).length) {
    return nextCampaign;
  }

  return oldCampaign;
}

function parseQuery(query) {
  return query.slice(1).split('&').map(function (d) {
    var _d$split = d.split('='),
        _d$split2 = _slicedToArray(_d$split, 2),
        key = _d$split2[0],
        value = _d$split2[1];

    return [key, value];
  });
}
