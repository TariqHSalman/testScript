function setCookie(n, e, t) {
  const o = new Date();
  o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3);
  const a = `expires=${o.toUTCString()};`;
  document.cookie = `${n}=${e};${a}www.mashvisor.compath=/`;
}
function getIsEuropean() {
  const n = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.toLocaleLowerCase();
  return (
    n.includes("europe") ||
    [
      "asia/nicosia",
      "asia/famagusta",
      "atlantic/faroe",
      "america/danmarkshavn",
      "america/danmarkshavn",
      "america/godthab",
      "america/thule",
      "atlantic/reykjavik",
      "atlantic/azores",
      "atlantic/madeira",
      "africa/ceuta",
      "atlantic/canary",
      "utc",
    ].includes(n)
  );
}
function getIsGDPRBlocked() {
  return getIsEuropean() && "true" !== getCookie("cookie-consent");
}
function getCookie(n) {
  const e = `${n}=`,
    t = decodeURIComponent(document.cookie).split(";");
  let o = null;
  return (
    t.find((n) => {
      let t = n;
      for (; " " === t.charAt(0); ) t = t.substring(1);
      return 0 === t.indexOf(e) && ((o = t.substring(e.length, t.length)), !0);
    }),
    o
  );
}
function onAccept() {
  setCookie("cookie-consent", "true", 180), removeBanner(), location.reload();
}
function onReject() {
  setCookie("cookie-consent", "false", 7), removeBanner();
}
function removeBanner() {
  const n = document.getElementById("GDPR_banner");
  document.body.removeChild(n);
}
const isConsent = "true" === getCookie("cookie-consent"),
  updateConsent = document.createElement("script");
if (
  ((updateConsent.innerHTML =
    "\n      gtag('consent', 'update', {\n      'ad_storage':  'granted',\n      'analytics_storage':  'granted',\n      });\n  "),
  isConsent && document.head.appendChild(updateConsent),
  (window.isGDPRBlocked = getIsGDPRBlocked()),
  (window.isEuropean = window.getIsEuropean()),
  null === getCookie("cookie-consent") && !getIsEuropean())
) {
  const n = document.createElement("div");
  n.id = "GDPR_banner";
  const e = document.createElement("div"),
    t = document.createElement("div"),
    o = document.createElement("button"),
    a = document.createElement("button"),
    i = document.createElement("style");
  (t.innerHTML =
    "mashvisor uses cookies to provide necessary site functionality and improve your experience. By browsing our website, you consent to our use of cookies."),
    (o.innerHTML = "Accept"),
    (a.innerHTML = "Reject"),
    o.addEventListener("click", onAccept),
    a.addEventListener("click", onReject),
    e.appendChild(o),
    e.appendChild(a),
    n.appendChild(t),
    n.appendChild(e),
    n.classList.add("GDPR_banner_container"),
    t.classList.add("GDPR_text"),
    e.classList.add("GDPR_buttons"),
    o.classList.add("GDPR_accept"),
    a.classList.add("GDPR_reject"),
    (i.innerHTML =
      ".GDPR_banner_container {\n      width: 100%;\n      min-height: 50px;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      display: flex !important;\n      justify-content: space-between;\n      align-items: baseline;\n      background-color: rgb(65, 69, 98) !important;\n      color: white !important;\n      flex-wrap: wrap;\n      z-index: 999;\n      font-family: Lato, proximanovaRegular, sans-serif !important;\n      line-height: 1.428571429 !important;\n      font-size: 16px;\n    }\n    .GDPR_text {\n      margin: 15px;\n      margin-top: auto !important;\n      margin-bottom: auto !important;\n      flex: 1 0 300px;\n      display: inline-block;\n    }\n    .GDPR_buttons {\n      margin-top: auto !important;\n      margin-bottom: auto !important;\n      padding-right: 80px;\n      display: inline-block;\n    }\n  \n    .GDPR_accept {\n      background-color: #009ee2;\n      padding: 5px 10px;\n      margin: 15px;\n      border: none;\n      cursor: pointer;\n      border-radius: 3px;\n      font-size: 16px !important;\n      color: #fff !important;\n      float: left;\n      z-index: 3147483003;\n    }\n    .GDPR_accept:hover {\n      background-color: #1a74aa;\n    }\n    .GDPR_reject {\n      background: none;\n      text-decoration: underline;\n      padding: 5px 10px;\n      margin: 15px;\n      border: none;\n      cursor: pointer;\n      font-size: 16px !important;\n      color: #fff;\n    }\n    .GDPR_reject:hover {\n      color: #fff;\n      background-color: rgba(255, 88, 97, 0.8);\n      border-radius: 3px;\n    }\n    @media screen and (max-width: 1300px) {\n      .GDPR_accept,\n      .GDPR_reject {\n        font-size: 14px !important;\n      }\n      .GDPR_contentStyle {\n        padding-top: 5px;\n        padding-bottom: 5px;\n      }\n      .GDPR_text {\n        text-align: center;\n        font-size: 14px;\n      }\n    }\n  \n    @media screen and (max-width: 590px) {\n      .GDPR_text {\n        padding-right: 45px;\n        padding-left: 45px;\n        padding-top: 5px;\n      }\n      .GDPR_buttons {\n        margin-right: auto;\n        margin-left: auto;\n      }\n    }\n    @media screen and (max-width: 560px) {\n      .GDPR_text {\n        padding-right: 35px;\n        padding-left: 35px;\n      }\n    }\n    @media screen and (max-width: 460px) {\n      .GDPR_text {\n        padding: 0;\n        padding-bottom: 5px;\n      }\n      .GDPR_buttons {\n        padding: 0;\n        padding-bottom: 10px !important;\n      }\n    }\n  "),
    document.head.appendChild(i),
    document.body.appendChild(n);
}
