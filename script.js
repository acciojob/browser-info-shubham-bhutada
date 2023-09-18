//your JS code here. If required.
const info = document.getElementById("browser-info");
let appName = navigator.appName;
let appVersion = navigator.appVersion;
let userAgent = navigator.userAgent;
info.innerText = `You are using ${appName} ${appName} ${userAgent}`