var debugF = 0 <= location.search.indexOf("debug");

function debug(e) {
  debugF && console.log(e)
}

function openPopup(e, n, i, o, t, a, d, r, s, w, f) {
  popup = window.open(e, n, "width=" + i + ",height=" + o + ",resizable=" + t + ",scrollbars=" + a + ",menubar=" + d + ",toolbar=" + r + ",location=" + s + ",directories=" + w + ",status=" + f), popup.focus()
}

function getParameterByName(e) {
  var n = window.location.search;
  e = e.replace(/[\[\]]/g, "\\$&");
  var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
  return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
}

function processRules(e, n) {
  var i = ["equals", "contains", "greaterthan", "lessthan"],
    o = ["contains", "equals"];
  debug("Got envData"), debug(n), debug("Got Rules"), debug(e);
  for (var t = 0; t < e.rules.length; t++) {
    var a = e.rules[t];
    debug("Checking Rule"), debug(a);
    var d = !1;
    if ("true" === a.default) return a;
    for (var r = !0, s = 0; s < a.conditions.length; s++) {
      var w = a.conditions[s];
      "querystring" === w.type && 0 <= o.indexOf(w.operator) ? d = location.search.toLowerCase() : "mobile" === w.type && "equals" === w.operator ? d = n.em : 0 <= i.indexOf(w.operator) && ("architecture" === w.type ? d = n.ea : "platform" === w.type ? d = n.eo : "browser" === w.type && (d = n.eb)), r = r && d && compare(d, w.value, w.operator)
    }
    if (r) return a
  }
  return {
    action: "",
    value: ""
  }
}

function compare(userVal, ruleVal, operand) {
  debug("Checking if " + userVal + " " + operand + " " + ruleVal);
  if("contains" === operand) {
    return  0 <= userVal.indexOf(ruleVal);
  } else if("equals" === operand) {
    return userVal === ruleVal;
  } else if("greaterthan" === operand) {
	if(ruleVal.match(/os x/)) {
		var userVNum = userVal.slice(4),
			ruleVNum = ruleVal.slice(4);
		var userVArr = userVNum.split('.'),
			ruleVArr = ruleVNum.split('.');
		while(userVArr.length < ruleVArr.length) userVArr.push("0");
		while(ruleVArr.length < userVArr.length) ruleVArr.push("0");
		for(var i=0; i<userVArr.length; i++) {
			if(userVArr[i]===ruleVArr[i]) {
				if(ruleVArr.length == i+1) {
					return false;
				} else {
					continue;
				}
			} else if(parseInt(userVArr[i]) < parseInt(ruleVArr[i])) {
				return false;
			} else {
				return true;
			}
		}
	} else {
		return  ruleVal < userVal;
	}
  } else if("lessthan" === operand) {
    if(ruleVal.match(/os x/)) {
		var userVNum = userVal.slice(4),
			ruleVNum = ruleVal.slice(4);
		var userVArr = userVNum.split('.'),
			ruleVArr = ruleVNum.split('.');
		while(userVArr.length < ruleVArr.length) userVArr.push("0");
		while(ruleVArr.length < userVArr.length) ruleVArr.push("0");
		for(var i=0; i<userVArr.length; i++) {
			if(userVArr[i]===ruleVArr[i]) {
				if(ruleVArr.length == i+1) {
					return false;
				} else {
					continue;
				}
			} else if(parseInt(userVArr[i]) > parseInt(ruleVArr[i])) {
				return false;
			} else {
				return true;
			}
		}
	} else {
		return userVal < ruleVal;
	}
  } else {
    return false;
  }
}

function getBName(e) {
  var n = "default";
  return 0 <= e.indexOf("firefox") && e.indexOf(!1) ? n = "firefox" : 0 <= e.indexOf("opr") || 0 <= e.indexOf("opera") ? n = "opera" : 0 <= e.indexOf("edg") ? n = "edge" : 0 <= e.indexOf("chrome") ? n = "chrome" : 0 <= e.indexOf("safari") ? n = "safari" : 0 <= e.indexOf("msie") || 0 <= e.indexOf("trident/7.0;") ? n = "ie" : 0 <= e.indexOf("bingbot") ? n = "bingbot" : 0 <= e.indexOf("googlebot") ? n = "google" : 0 <= e.indexOf("mozilla") ? n = "netscape" : 0 <= e.indexOf("bot") && (n = "genericcrawler"), n
}

function getBVersion(e, n) {
  var i = "0",
    o = "";
  try {
    if (e && n) {
      if ("ie" === n) {
        if (0 <= e.indexOf("trident/7.0;") && 0 <= e.indexOf("rv:11.0")) return "11";
        o = new RegExp("MSIE\\s*([\\d.-]+)", "i")
      } else o = "edge" === n ? new RegExp(/edge?\/([\d.-]+)/, "i") : ("opera" === n ? n = "OPR" : "safari" === n ? n = "Version" : "netscape" === n ? n = "mozilla" : "google" === n ? n = "googlebot" : "default" !== n && "genericcrawler" !== n || (n = ""), new RegExp(n + "\\/([\\d.-]+)", "i"));
      i = e.match(o)[1]
    }
    return i
  } catch (e) {
    return ""
  }
}

function getOSName(e) {
  var n = "unknown",
    i = "";
  if (0 <= e.indexOf("mac os x") && e.indexOf("iphone") < 0) {
    try {
      i = (i = e.match(/mac os x (version\s)?([\d_.]+)/)[2])./*replace(/\./g, "")*/replace(/_/g, ".")
    } catch (e) {
      i = ""
    }
    n = "os x" + i
  } else 0 <= e.indexOf("ubuntu") ? n = "ubuntulinux" : 0 <= e.indexOf("linux") ? n = "linux" : 0 <= e.indexOf("windows 95") || 0 <= e.indexOf("win95") || 0 <= e.indexOf("windows_95") ? n = "windows 95" : 0 <= e.indexOf("windows 98") || 0 <= e.indexOf("win98") ? n = "windows 98" : 0 <= e.indexOf("windows 2000") || 0 <= e.indexOf("windows nt 5.0") ? n = "windows 2000" : 0 <= e.indexOf("windows me") ? n = "windows me" : 0 <= e.indexOf("windows xp") || 0 <= e.indexOf("windows nt 5.1") || 0 <= e.indexOf("windows nt 5.2") ? n = "windows xp" : 0 <= e.indexOf("windows nt 6.0") ? n = "windows vista" : 0 <= e.indexOf("windows nt 6.1") ? n = "windows 7" : 0 <= e.indexOf("windows nt 6.2") ? n = "windows 8" : 0 <= e.indexOf("windows nt 6.3") ? n = "windows 8.1" : 0 <= e.indexOf("windows nt 10.0") ? n = "windows 10" : 0 <= e.indexOf("windows nt") ? n = "windows nt" : 0 <= e.indexOf("sunos") && (n = "solaris");
  return n
}

function getArch(e) {
  var n = "";
  return 0 <= e.indexOf("win64") || 0 <= e.indexOf("x64") ? n = "64bit" : 0 <= e.indexOf("wow64") && (n = "wow64"), n
}
var cookieSep = "-",
  cookieName = "ORA_FLEX_CACHE_KEY";

function getEnvDetails() {
  var e = navigator.userAgent.toLowerCase(),
    n = 0 <= e.indexOf("mobi") || 0 <= e.indexOf("iphone"),
    i = "",
    o = {},
    t = "true" === getParameterByName("link");
  if (n) o = {
    cookie: "mobile",
    em: "mobile"
  };
  else {
    var a = t && getParameterByName("BR") ? getParameterByName("BR") : getBName(e),
      d = t && getParameterByName("BRv") ? getParameterByName("BRv") : getBVersion(e, a),
      r = t && getParameterByName("OS") ? getParameterByName("OS") : getOSName(e),
      s = t && getParameterByName("AR") ? getParameterByName("AR") : getArch(e);
    r && 0 <= r.indexOf("windows") && !s && (s = "32bit"), i = "desktop" + cookieSep + a + "_" + d.slice(0, 0 < d.indexOf(".") ? d.indexOf(".") : d.length) + cookieSep + r.replace(" ", ""), s && (i += cookieSep + s), o = {
      cookie: i,
      em: "desktop",
      eb: a + " " + d.slice(0, 0 < d.indexOf(".") ? d.indexOf(".") : void 0),
      eo: r,
      ea: s
    }, window.envData = o
  }
  window.envData = o, t || setEDCookie(o)
}

function getCookie(e) {
  for (var n = decodeURIComponent(document.cookie).split(";"), i = void 0, o = 0; o < n.length; o++) {
    for (var t = n[o];
      " " == t.charAt(0);) t = t.substring(1);
    if (0 == t.indexOf(e)) {
      i = t.substring(e.length + 1, t.length);
      break
    }
  }
  return i
}

function setEDCookie(e) {
  var n = new Date;
  n.setTime(n.getTime() + 31536e6);
  var i = "expires=" + n.toUTCString();
  window.envData = e, document.cookie = cookieName + "=" + e.cookie + ";" + i + ";path=/"
}

function setLang(e) {
  var n = window.location.toString().replace(SCSRenderAPI.getSitePathPrefix() + "/" + (SCSRenderAPI.getPageLanguageCode() ? SCSRenderAPI.getPageLanguageCode() + "/" : ""), SCSRenderAPI.getSitePathPrefix() + "/" + e + "/");
  window.location.assign(n)
}

function getLang() {
  var e = getCookie(cookieName),
    n = "root";
  return e && "en" === (n = e.substring(e.lastIndexOf(cookieSep) + 1)) && (n = "root"), n
}

function getOS(e, n) {
  var i = "Windows 10";
  return e && (0 <= e.indexOf("solaris") ? 0 <= e.indexOf("sparc") ? i = "Solaris SPARC" : 0 <= e.indexOf("x86") && (i = "Solaris x86") : 0 <= e.indexOf("linux") ? i = 0 <= e.indexOf("redhat") ? "Red Hat Linux" : 0 <= e.indexOf("ubuntu") ? "Ubuntu Linux" : 0 <= e.indexOf("suse") ? "SUSE Linux" : "Oracle Linux" : 0 <= e.indexOf("macosx") || 0 <= e.indexOf("osx") ? i = "Mac OS X" : 0 <= e.indexOf("windows") && (i = 0 <= e.indexOf("windows95") ? "Windows 95" : 0 <= e.indexOf("windows98") ? "Windows 98" : 0 <= e.indexOf("windowsme") ? "Windows ME" : 0 <= e.indexOf("windows2000") ? "Windows 2000" : 0 <= e.indexOf("windowsxp") ? "Windows XP" : "wow64" === n || "64-bit" === n ? "64-bit Windows" : 0 <= e.indexOf("windows8") ? "Windows 8" : 0 <= e.indexOf("windows7") ? "Windows 7" : 0 <= e.indexOf("windowsvista") ? "Windows Vista" : 0 <= e.indexOf("2003") ? "Windows 2003" : "Windows 10")), i
}
$(function() {
  var e = getCookie(cookieName);
  if (e) {
    var n = e.split(cookieSep),
      i = {
        cookie: e,
        em: n[0],
        eb: n[1],
        eo: n[2],
        ea: n[3] ? n[3] : ""
      };
    window.envData = i
  } else getEnvDetails()
});
