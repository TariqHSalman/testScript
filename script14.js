(function (root) {
  function setCookie(cookieName, value, expiaryDays) {
    var d = new Date();
    d.setTime(d.getTime() + expiaryDays * 24 * 60 * 60 * 1000);
    var expires = 'expires='.concat(d.toUTCString(), ';');
    var domain = 'www.mashvisor.com';
    document.cookie = ''
      .concat(cookieName, '=')
      .concat(value, ';')
      .concat(expires)
      .concat(domain, 'path=');
  }
  function getCookie(cookieName) {
    var name = ''.concat(cookieName, '=');
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var returnValue = null;
    ca.find(function (c) {
      var value = c;
      while (value.charAt(0) === ' ') {
        value = value.substring(1);
      }
      if (value.indexOf(name) === 0) {
        returnValue = value.substring(name.length, value.length);
        return true;
      }
      return false;
    });
    return returnValue;
  }
  function getIsEuropean() {
    var timeZones = [
      'asia/nicosia',
      'asia/famagusta',
      'atlantic/faroe',
      'america/danmarkshavn',
      'america/danmarkshavn',
      'america/godthab',
      'america/thule',
      'atlantic/reykjavik',
      'atlantic/azores',
      'atlantic/madeira',
      'africa/ceuta',
      'atlantic/canary',
      'utc',
    ];
    var region = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.toLocaleLowerCase();
    return !(region.includes('europe') || timeZones.includes(region));
  }
  function getIsGDPRBlocked() {
    return getIsEuropean() && getCookie('cookie-consent') !== 'true';
  }
  function onAccept() {
    setCookie('cookie-consent', 'true', 180);
    removeBanner();
    location.reload();
  }
  function onReject() {
    setCookie('cookie-consent', 'false', 7);
    removeBanner();
  }
  function removeBanner() {
    var banner = document.getElementById('GDPR_banner');
    document.body.removeChild(banner);
  }
  var isConsent = getCookie('cookie-consent') === 'true';
  var consent = isConsent ? 'granted' : 'denied';
  var GAKEY = 'GTMKEY';
  window.dataLayer = window.dataLayer || [];
  function addConsent() {
    window.dataLayer.unshift(arguments);
  }
  if (!gtag) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    if (GAKEY) {
      gtag('js', new Date());
      gtag('config', GAKEY, {
        send_page_view: false,
      });
    }
  }
  addConsent('consent', 'default', {
    ad_storage: consent,
    analytics_storage: consent,
    region: [
      'GR',
      'NL',
      'BE',
      'FR',
      'HU',
      'IT',
      'RO',
      'CH',
      'AT',
      'IM',
      'DK',
      'SE',
      'SJ',
      'PL',
      'DE',
      'FO',
      'GI',
      'LU',
      'IE',
      'IS',
      'AL',
      'MT',
      'CY',
      'AX',
      'BG',
      'LT',
      'LV',
      'EE',
      'MD',
      'BY',
      'AD',
      'MC',
      'SM',
      'VA',
      'UA',
      'RS',
      'ME',
      'XK',
      'HR',
      'SI',
      'BA',
      'MK',
      'CZ',
      'SK',
      'LI',
      'GB',
      'RU',
      'ES',
      'PT',
      'FI',
      'NO',
      'PS',
    ],
  });
  if (getCookie('cookie-consent') === null && getIsEuropean()) {
    function domReady(callback) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
      } else {
        callback();
      }
    }
    function loadBanner() {
      var container = document.createElement('div');
      container.id = 'GDPR_banner';
      var buttons = document.createElement('div');
      var text = document.createElement('div');
      var acceptButton = document.createElement('button');
      var rejectButton = document.createElement('button');
      var style = document.createElement('style');
      text.innerHTML =
        "Mashvisor uses cookies to provide necessary site functionality and improve your experience. By browsing our website, you consent to our use of cookies. To learn more please refer to our <a class='GDPR_link' href='/cookie-policy'>cookie policy</a> ";
      acceptButton.innerHTML = 'Accept';
      rejectButton.innerHTML = 'Reject';
      acceptButton.addEventListener('click', onAccept);
      rejectButton.addEventListener('click', onReject);
      buttons.appendChild(acceptButton);
      buttons.appendChild(rejectButton);
      container.appendChild(text);
      container.appendChild(buttons);
      container.classList.add('GDPR_banner_container');
      text.classList.add('GDPR_text');
      buttons.classList.add('GDPR_buttons');
      acceptButton.classList.add('GDPR_accept');
      rejectButton.classList.add('GDPR_reject');
      style.innerHTML =
        '.GDPR_banner_container{width:100%;min-height:50px;position:fixed;bottom:0;left:0;display:flex!important;justify-content:space-between;align-items:baseline;background-color:#414562!important;color:#fff!important;flex-wrap:wrap;z-index:999;font-family:Lato,proximanovaRegular,sans-serif!important;line-height:1.428571429!important;font-size:16px}.GDPR_link{color:#009ee2}.GDPR_text{margin:15px;margin-top:auto!important;margin-bottom:auto!important;flex:1 0 300px;display:inline-block}.GDPR_buttons{margin-top:auto!important;margin-bottom:auto!important;padding-right:80px;display:inline-block}.GDPR_accept{background-color:#009ee2;padding:5px 10px;margin:15px;border:none;cursor:pointer;border-radius:3px;font-size:16px!important;color:#fff!important;float:left;z-index:3147483003}.GDPR_accept:hover{background-color:#1a74aa}.GDPR_reject{background:none;text-decoration:underline;padding:5px 10px;margin:15px;border:none;cursor:pointer;font-size:16px!important;color:#fff}.GDPR_reject:hover{color:#fff;background-color:#ff5861cc;border-radius:3px}@media screen and (max-width: 1300px){.GDPR_accept,.GDPR_reject{font-size:14px!important}.GDPR_contentStyle{padding-top:5px;padding-bottom:5px}.GDPR_text{text-align:center;font-size:14px;padding-top:10px;padding-bottom:10px}}@media screen and (max-width: 590px){.GDPR_text{padding-right:45px;padding-left:45px;padding-top:5px}.GDPR_buttons{margin-right:auto;margin-left:auto;padding-left:80px}}@media screen and (max-width: 560px){.GDPR_text{padding-right:50px;padding-left:50px}}@media screen and (max-width: 460px){.GDPR_text{padding:5px 0;flex:auto}.GDPR_buttons{padding:0;padding-bottom:15px!important}}';
      document.head.appendChild(style);
      document.body.appendChild(container);
    }
    domReady(loadBanner);
  } else if (GAKEY) {
    (function (i, s, o, g, r, a, m) {
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      'script',
      'https://www.googletagmanager.com/gtag/js?id=' + GAKEY,
    );
  }
  var mvGDPR = {
    isBlocked: getIsGDPRBlocked(),
    isEuropean: getIsEuropean(),
  };
  root.mvGDPR = mvGDPR;
})(this);