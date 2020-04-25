/* Jvav Console.log by TheZihanGu.
    GitHub: https://github.com/TheZihanGu.
    Use: All page on Jvav.top
*/
console.log ("Jvav 网页 by TZG-Official")
var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', "https://jvav.tzg.workers.dev", true);
httpRequest.send();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        console.log("版本：%c" + httpRequest.responseText,"color:red");
    }
}
console.log ("Powered by Netlify & Cloudflare.");
console.log("%cGitHub: https://github.com/TZG-official/Jvav","color:red");