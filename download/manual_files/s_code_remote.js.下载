/*!
######################################################

# S_CODE_REMOTE.JS

# Version: 1.00

# BUILD DATE: Tue Jul 17 2018 12:05:01 GMT-0400 (Eastern Daylight Time)

# COPYRIGHT ORACLE CORP 2018 [UNLESS STATED OTHERWISE]

######################################################
*/
try{oracle.truste.api.getConsentDecision().consentDecision;oracle.truste.api.getConsentDecision().source}catch(err){var oracle=oracle||{};oracle.truste={};oracle.truste.api={};(function(){var trusteStorageItemName="truste.eu.cookie.notice_preferences";this.getCookieName=function(){return"notice_preferences"};this.getStorageItemName=function(){return trusteStorageItemName}}).apply(oracle.truste);(function(){var trusteCommon=oracle.truste;function getCookie(cookieKey){for(var name=cookieKey+"=",cookieArray=document.cookie.split(";"),i=0;i<cookieArray.length;i++){for(var c=cookieArray[i];" "==c.charAt(0);)c=c.substring(1);if(0==c.indexOf(name))return c.substring(name.length,c.length)}return null}function getLocalStorageItem(storageKey){return"undefined"!=typeof Storage?localStorage.getItem(storageKey):null}function getTRUSTeLocalStorageValue(storageKey){var value=getLocalStorageItem(storageKey);if(null!=value){return JSON.parse(value).value}return null}this.getConsentCode=function(){var value=getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName())||getCookie(trusteCommon.getCookieName());return null==value?-1:parseInt(value)+1};this.getConsentDecision=function(){var value=this.getConsentCode();if(-1==value){var text='{"consentDecision": 0, "source": "implied"}';return JSON.parse(text)}var text='{"consentDecision": '+parseInt(value)+', "source": "asserted"}';return JSON.parse(text)}}).apply(oracle.truste.api)}var TRUSTeLevel=s_setConsentLevel(0);function s_setConsentLevel(cLevel){try{cLevel=truste.cma.callApi("getConsentDecision","oracle.com").consentDecision}catch(err){cLevel=s_getCookieData("notice_preferences").split(":")[0];cLevel=""==cLevel?0:++cLevel}return cLevel}function s_getCookieData(label){for(var labelLen=label.length,cLen=document.cookie.length,i=0,cEnd;i<cLen;){var j=i+labelLen;if(document.cookie.substring(i,j)==label){cEnd=document.cookie.indexOf(";",j);-1==cEnd&&(cEnd=document.cookie.length);j++;return decodeURIComponent(document.cookie.substring(j,cEnd).replace("+","%20"))}i++}return""}

/*! Script to check Do Not Track settings in the browser */
var enable_tracking=!0;-1==TRUSTeLevel||0==TRUSTeLevel?1!=navigator.doNotTrack&&1!=window.doNotTrack&&1!=navigator.msDoNotTrack||(enable_tracking=!1):1==TRUSTeLevel&&(enable_tracking=!1);if(enable_tracking){

/*! S_CODE_REMOTE.JS - v1.00 */
var s_account="devsunjava",sun_dynamicAccountSelection=!0,sun_dynamicAccountList="sunjava=java.com;devsunjava=.",s_siteid="javac:";if("undefined"!=typeof deployJava){var jreVersions=deployJava.getJREs();if(0==jreVersions.length)var s_prop24="None";else s_prop24=jreVersions[parseInt(jreVersions.length-1)]}var fullURL=SCSRenderAPI.getThemeUrlPrefix() + "/assets/js/metrics_group1.js"; var scr = document.createElement("script"); scr.language="JavaScript", scr.src = fullURL; document.body.appendChild(scr)}
