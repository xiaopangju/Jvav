/**
 * @preserve Copyright 1995, 2018, Oracle and/or its affiliates. All rights reserved.
 *
 * For information on libraries used by the Oracle Infinity Tag, please see
 * the following link: https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCHA/Help/explore.htm
 */
!function(){function _ORA(_window,_document){var version={ki:1,Ii:0,_i:6},oraSelf=this,g_loaderAborted=!1,s_pollTimeoutCount=200,s_pollInterval=5,s_loaderConversionTimeoutDefault=2e3,s_pageProtocol=document.location.protocol,s_selector="sizzle",s_customSelector=null,g_Ready=!1,g_OnLoad=!1,accountRootUrl="//c.oracleinfinity.io/acs/account/wh3g12c3gg/js",tagId="java",LOADER="LOADER",eventEngine,products={},prodToContextMap={};this.getTagId=function(){return tagId},this.sn=function(){return"sizzle"!==s_selector?null!==s_customSelector?s_customSelector:(ORA.Debug.error("getSelector:  No Selector found","003"),!1):"undefined"!=typeof Sizzle&&ORA.O(Sizzle)?Sizzle:"undefined"!=typeof ORA.Sizzle&&ORA.Sizzle},this.za=function(e,n){s_selector=e,s_customSelector=n},this.O=function(e){return null!=e};var ready=function(){g_Ready||(g_Ready=!0,ORA.fireEvent(new ORA.Event(ORA.Event.Ha,ORA.Event.In),!0))},onload=function(){g_OnLoad||(g_OnLoad=!0,ORA.fireEvent(new ORA.Event(ORA.Event.$a,ORA.Event.In),!0))},searchForCookieName=function(e){for(var n=document.cookie.split(";"),o=0;o<n.length;o++){var t=[];for(t[0]=n[o].substring(0,n[o].indexOf("=")),t[1]=n[o].substring(n[o].indexOf("=")+1);" "===t[0].charAt(0);)t[0]=t[0].substring(1,t[0].length);if(t[0]===e)return t[1]}return null},searchMetatagsForName=function(e){for(var n=document.getElementsByTagName("meta"),o=0;o<n.length;o++)if(n[o].name===e)return n[o].content;return null};this.execute=function(e){var n={};n.params=e,n.arguments=Array.prototype.slice.call(arguments,1),fireEventName(ORA.Event.oi,e),fireEventName(ORA.Event.Ji,e)},this.loaderConversionTimeoutDefault=function(){return s_loaderConversionTimeoutDefault},this.setLoaderConversionTimeoutDefault=function(e){s_loaderConversionTimeoutDefault=e},this.reset=function(){for(var e in products)products.hasOwnProperty(e)&&products[e].reset();fireEventName(ORA.Event.ri,null)},this.Ka=function(e,n,o){var i=s_pollTimeoutCount,a=function(e,n,o,t,r){setTimeout(function(){i--,e()?(oraSelf.Debug.trace("pollForCondition success result="+e(),LOADER),oraSelf.Debug.superfine("pollForCondition success condition="+e.toString(),LOADER),n&&(n(),oraSelf.Debug.trace("pollForCondition running callback",LOADER),oraSelf.Debug.superfine("pollForCondition callback="+n.toString(),LOADER))):0<i?(oraSelf.Debug.trace("LOADER:  pollForCondition timeoutCount="+i),a(e,n,o,i)):(oraSelf.Debug.error("pollForCondition Fail on "+e.toString(),"009"),o&&(o(),oraSelf.Debug.superfine("pollForCondition callbackFailure="+o.toString(),LOADER)))},r)};a(e,n,o,i,s_pollInterval)},this.s=function(e,n,o){var t={};if(ORA.O(e))for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);for(var i in n)ORA.O(n[i])&&n.hasOwnProperty(i)&&(ORA.O(o)&&ORA.O(o[i])?t[i]=o[i]:t[i]=n[i]);return t},this.downloadLib=function(t,r,i,e,a,s){oraSelf.Debug.info("LOADER:  Start download: "+s_pageProtocol+s+" & attach to "+t+", async="+a),setTimeout(function(){var e=_document.getElementsByTagName(t)[0],n=_document.createElement("script");n.type="text/javascript",n.src=s_pageProtocol+s,n.setAttribute("async",a),n.setAttribute("defer",a),n.Va=!1;var o=function(){!1===this.Va?(r(),this.Va=!0,oraSelf.Debug.info("Completed download: "+s_pageProtocol+s+", callback running oraHasRun="+this.Va,LOADER),oraSelf.Debug.superfine("downloadLib: successCallback="+r.toString(),LOADER)):oraSelf.Debug.trace("downloadLib: not running successCallback, since oraHasRun="+this.Va,LOADER)};r&&(n.onload=o,n.onreadystatechange=o),n.onerror=function(){oraSelf.Debug.error("FAILED download: "+s_pageProtocol+s+" & attach to "+t+", async="+a,"010"),i&&(i(),oraSelf.Debug.superfine("failCallback: "+i.toString(),LOADER))},void 0!==e?e.appendChild(n):oraSelf.Debug.info("LOADER:  Dom element: "+t+" is not found so not Downloading")},e)},this.Ja=function(e,n,o,t,r){if(void 0!==r){var i={},a=function(e){return function(){i[e]="complete",oraSelf.Debug.trace("LOADER:  downloadLibs is complete src:"+e+" = "+r[e])}};for(var s in r)r.hasOwnProperty(s)&&(i[s]="waiting",oraSelf.Debug.trace("LOADER:  downloadLibs is waiting on src:"+s+" = "+r[s]),oraSelf.downloadLib(e,a(s),null,o,t,r[s]));oraSelf.Ka(function(){for(var e in i)if(i.hasOwnProperty(e)&&"complete"!==i[e])return!1;return!0},function(){oraSelf.Debug.debug("LOADER:  downloadLibs completed on all downloads"),n()})}else oraSelf.Debug.info("LOADER:  downloadLibs srcs is empty")},this.Xa=function(e){var n=e;oraSelf.O(e)&&oraSelf.O(e.location)&&oraSelf.O(e.location.search)||(n=document);var o=function(e){var n=e.split("&"),o={};if(null!==n&&0===n.length&&(n=e.split(";")),null===n)return o;var t=0;n&&(t=n.length-1);for(var r=0;r<=t;r++){var i=n[r].split("=");i[0]=unescape(i[0]),i[1]=unescape(i[1]),i[0]=i[0].replace(/\+/g," "),i[1]=i[1].replace(/\+/g," "),i[1]=i[1].replace(/<.*\?>/g,""),o[i[0]]=i[1]}return o};if(n.location.search)return o(n.location.search.substring(1,n.location.search.length));if(n.location.href){var t=n.location.href.split("?");return 2===t.length?o(t[1]):null}return null},this.abortModuleHelper=function(e,n){ORA.fireEvent(new ORA.Event(e+"_"+ORA.Event.Za,ORA.Event.In)),ORA.setExecuteState(e,ORA.Event.Za),ORA.Debug.error("Aborting product: "+e,"011"),ORA.Debug.error("LOADER Error","011",n)},this.Event=function(e,n,o,t){var r=e;r&&(r=r.toLowerCase()),this.name=r,this.handler=null,this.state=ORA.Event.cu,n&&(this.state=n),this.target=o,this.params={},t&&(this.params=t)},this.su=function(){var r={},f={},R=function(e,n,o,t){g_loaderAborted&&!t&&oraSelf.Debug.error("fireEvent: Loader global abort, Aborted due to prior error","012",null,LOADER),n.handler=e,n.params.eventID=(new Date).getTime();var r="not set";o&&(r=o);var i,a,s="fireEvent: [name: "+n.name+"], state:"+n.state+"async["+r+"]";return oraSelf.Debug.trace(s,LOADER),oraSelf.Debug.superfine("function:"+n.handler.toString()+"]",LOADER),o?setTimeout((i=e,a=n,function(){i(a)}),0):n.handler(n),1},c=function(e,n,o,t,r){for(var i=o,a=0;a<f[e][r].length;a++)if(oraSelf.O(f[e][r][a])&&f[e][r][a].toString()===t.toString()&&!0!==n){i=!0;break}if(!i){f[e][r].push(t);var s="addEventHandler success handler"+f[e][r].length;s+=" for "+e+"\nhandler="+t.toString(),oraSelf.Debug.superfine(s,LOADER)}return i};r.Zt=function(e,n,o,t){var r,i=e,a=0,s=!1;return i&&(n||o)?(i=i.toLowerCase(),f[r=i]||(f[r]={}),f[r].success||(f[r].success=[]),f[r].fault||(f[r].fault=[]),n&&(s=c(i,t,s=!1,n,"success")),s||(a=1),o&&(s=c(i,t,s=!1,o,"fault")),s||(a+=1),function(e,n,o){if(f[e].queue&&0!==f[e].queue.length)for(var t=f[e].queue.length-1;0<=t;t--){var r=f[e].queue[t];n&&"success"===r.event.state?R(n,r.event,r.async,r.override):o&&"fault"===r.event.state&&R(o,r.event,r.async,r.override),f[e].queue.splice(t,1)}}(i,n,o),a):(oraSelf.Debug.debug("events: Can not add event handler, missing name or listeners. ",LOADER),-1)};var i=function(e,n,o){for(var t=0;t<f[e][o].length;t++)if(oraSelf.O(f[e][o][t])&&f[e][o][t].toString()===n.toString())return f[e][o].splice(t,1),1;return 0};return r.du=function(e,n,o){var t=e;if(!t)return oraSelf.Debug.trace("LOADER removeEventHandler:  events: Can not remove event handler, missing event name."),-1;if(t=t.toLowerCase(),!f[t])return 0;if(!n&&!o)return delete f[t],0;var r=0;return n&&(r+=i(t,n,"success")),o&&(r+=i(t,o,"fault")),r},r.fireEvent=function(e,n,o,t){if(g_loaderAborted&&!o)return oraSelf.Debug.error("fireEvent: Loader global abort, Aborted due to prior error","012",null,LOADER),e.name?oraSelf.Debug.error("fireEvent(event="+e.name+"): g_loaderAborted due to prior error","012",null,LOADER):oraSelf.Debug.error("fireEvent: Aborted due to prior error, check error message for details.","012"),-1;var r=e.name,i=e.state,a=function(e,n,o,t,r,i){var a=!!f[n],s=!(!a||!f[n][o]),c=!(!s||0===f[n][o].length),u=!(!a||!f[n].queue);if(c||!e)return a?s?1:(oraSelf.Debug.trace("fireEvent: [name:"+n+", state:"+o+"] no event handler was found",LOADER),-1):(oraSelf.Debug.trace("fireEvent: [name: "+n+"], no registered event was found",LOADER),-1);oraSelf.Debug.trace("fireEvent: [name: "+n+"], no registered event was found, enqueueing",LOADER),a||(f[n]={}),u||(f[n].queue=[]);var d={event:t,async:r,override:i};return f[n].queue.push(d),0}(t,r,i,e,n,o);if(a<=0)return a;for(var s=f[r][i],c=0,u=0;u<s.length;u++)if(s[u])try{R(s[u],e,n,o),c++}catch(l){var d="Unhandled Event Exception, [name: "+r+", state: "+i+", function: ";d+=e.handler.toString()+"]",oraSelf.Debug.error(d,"013",l)}return c},r.fu=function(){return f},r.length=function(){var e=0;for(var n in f)f.hasOwnProperty(n)&&e++;return e},r.addFireOnce=function(e,n,o){var t=function(){n(),r.du(e,t,o)};r.Zt(e,t,o)},r.pu=function(){f={}},r},eventEngine=new this.su,this.Zt=eventEngine.Zt,this.du=eventEngine.du,this.fireEvent=eventEngine.fireEvent,this.addFireOnce=eventEngine.addFireOnce,this.pu=eventEngine.pu,this.Event.Ru="preinit",this.Event.Ou="init",this.Event.hu="preload",this.Event.vu="load",this.Event.gu="postload",this.Event.mu="loader_abort",this.Event.Za="loader_module_abort",this.Event.Su="debugger_clear_cookies",this.Event.wu="debugger_dump_params",this.Event._u="debug_error_out",this.Event.Ha="dom_ready",this.Event.$a="dom_onload",this.Event.Eu="timer_expire",this.Event.Lu="timer_clear",this.Event.In="success",this.Event.Du="fault",this.Event.cu="unknown",this.Event.yu="pageview",this.Event.xu="conversion",this.Event.Tu="debugger_check_mode",this.Cu=function(){var i=-1;this.Mu=!1;var a=[],s=this,c=function(e,n,o){var t=n;if(o&&(t=o+":  "+t),this.Mu||a.push([e,t]),this.Mu)a=[];else if(!(i<e)&&"undefined"!=typeof console&&console){var r=!0;switch(e){case 0:console.error&&(console.error(t),r=!1);break;case 1:console.warn&&(console.warn(t),r=!1);break;case 2:console.info&&(console.info(t),r=!1);break;case 3:case 4:case 5:console.log&&(console.log(t),r=!1)}!0===r&&console.log&&console.log(t)}};s.superfine=function(e,n){c(5,e,n)},s.trace=function(e,n){c(4,e,n)},s.debug=function(e,n){c(3,e,n)},s.info=function(e,n){c(2,e,n)},s.error=function(e,n,o,t){var r=n;r?r+=": ":r="";var i="";o&&("string"==typeof o?i="\n"+o:o.toString?(i=o.toString(),o.stack&&(i+=", [stack]: "+o.stack)):i=o.message?o.name?o.fileName?"\n"+o.message+" ["+o.name+"]\n ("+o.fileName+":"+o.lineNumber+")\n"+o.stack:"\n"+o.message+" ["+o.name+"]":o.fileName?"\n"+o.message+"\n ("+o.fileName+":"+o.lineNumber+")\n"+o.stack:"\n"+o.message:o.name?o.fileName?"\n ["+o.name+"]\n ("+o.fileName+":"+o.lineNumber+")\n"+o.stack:"\n ["+o.name+"]":o.fileName?"\n\n ("+o.fileName+":"+o.lineNumber+")\n"+o.stack:"\n"),c(0,r+e+i,t),ORA.fireEvent(new ORA.Event(ORA.Event._u,ORA.Event.In,o))},s.dir=function(e,n,o){n&&c(2,n,o),console&&"function"==typeof console.dir?console.dir(e):s.ku(e)},s.ku=function(e,n){var o=e||{},t=n||"";for(var r in o)o.hasOwnProperty(r)&&"function"!=typeof o[r]&&s.debug("\t"+r+" : "+o[r],t)},s.setDebugLevel=function(e){i=e},s.getDebugLevel=function(){return i},s.dumpParams=function(){var e=s.getConfigParams();for(var n in e)e.hasOwnProperty(n)&&"object"==typeof e[n]&&s.dir(e[n],"Config parameters",n);return e},s.getConfigParams=function(){var e={};return e.Pu={version:version,Mi:[version.ki,version.Ii,version._i].join(".")},e},s.checkMode=function(e){ORA.fireEvent(new ORA.Event(ORA.Event.Tu,ORA.Event.In,{resetFlag:e}))},s.getHistory=function(){return a}};var Dependency=function(e,n){this._name=e,this._state=n,this._met=!1},registerContext=function(e,n){prodToContextMap[e]=n},Product=function(e,n,o){var t=this,r={},i=[];this.prodId=e,this.plugin=new n,this.executeState=Product.Fu,this.timer=null,this.startTime=null,this.qu=null,this.configName="default",void 0!==o&&(this.configName=o),this.Nu=function(e){r[e._name]=e},this.reset=function(){t.executeState=Product.Fu,r={},i=[]},this.Iu=function(){r={}},this.zu=function(e){for(var n in r)if(r.hasOwnProperty(n)&&r[n]._name===e)return r[n];return null},this.Hu=function(){return 0===i.length&&(i=ORA.Hu(t.prodId)),i},this.Uu=function(){i=ORA.Hu(t.prodId)},this.ju=function(){return this.executeState},this.Gu=function(){for(var e in r)if(r.hasOwnProperty(e)&&""!==e&&!0!==r[e]._met){if(products[e].ju()!==r[e]._state)return!1;r[e]._met=!0}return!0},this.Qu=function(e,n){var o=t.zu(e);null!==o&&o._state===n&&(o._met=!0)},this.$u=function(e){this.timer?oraSelf.Debug.info("LOADER:  "+this.prodId+" timer already started, using current timer."):(oraSelf.Debug.debug("LOADER:  starting timer for "+t.prodId),this.timer=setTimeout(function(){oraSelf.Debug.error("LOADER:  "+t.prodId+"module timer expired calling Abort","015"),oraSelf.fireEvent(new ORA.Event(t.prodId+"_"+ORA.Event.Eu,ORA.Event.In)),oraSelf.fireEvent(new ORA.Event(t.prodId+"_"+ORA.Event.Za,ORA.Event.In))},e),this.startTime=new Date,oraSelf.Debug.info("LOADER:  "+this.prodId+" timer started ["+this.startTime+"]."))},this.Ku=function(){this.qu=new Date,this.timer&&(clearTimeout(this.timer),this.timer=null),oraSelf.Debug.info("LOADER:  "+this.prodId+" timer cleared ["+this.qu+"]")},this.Vu=function(){var e=t.ju()===Product.Wu,n=t.Gu(),o=t.plugin[ORA.Event.gu]!==undefined;return n&&e&&o?(oraSelf.Debug.debug("setExecuteState:  "+t.prodId+" has met all dependencies && ready, running postload"),t.plugin[ORA.Event.gu](),!0):n&&e?(ORA.Debug.superfine(t.prodId+", has no postLoad section"),!0):(ORA.Debug.superfine(t.prodId+", did not meet postload exec conditionals"),!1)}};Product.Fu="waiting",Product.DOWNLOADING="downloading",Product.Wu="ready",Product.Bu="running",Product.Ju="aborted";var regPluginDependencies=function(e){if(ORA.O(e.prototype.oraConfigObj)&&ORA.O(e.prototype.oraConfigObj.s_dependencies))for(var n=e.prototype.oraConfigObj.s_dependencies.split(","),o=0;o<n.length;o++){var t=n[o].split(":");products[e.ProductName].Nu(new Dependency(t[0],t[1]))}for(var r in products)products.hasOwnProperty(r)&&products[r].Uu()};this.registerPlugin=function(e,n){if(products[e.ProductName]=new Product(e.ProductName,e,n),products[e.ProductName].executeState=Product.Fu,ORA.O(e.prototype.abort)&&ORA.Zt(e.ProductName+"_"+ORA.Event.Za,e.prototype.abort),regPluginDependencies(e),e.prototype&&e.prototype.oraConfigObj&&e.prototype.oraConfigObj.s_useTrackingPipeline&&!0===e.prototype.oraConfigObj.s_useTrackingPipeline){products[e.ProductName].useTrackingPipeline=!0;var o=e.prototype.oraConfigObj;if(ORA.O(o.s_pageTimeout)&&ORA.O(o.s_TrackingPipelineTimeout)){var t=Math.max(o.s_pageTimeout,o.s_TrackingPipelineTimeout);products[e.ProductName].s_TrackingPipelineTimeout=t}else ORA.O(o.s_pageTimeout)?products[e.ProductName].s_TrackingPipelineTimeout=o.s_pageTimeout:ORA.O(o.s_TrackingPipelineTimeout)&&(products[e.ProductName].s_TrackingPipelineTimeout=o.s_TrackingPipelineTimeout)}},this.kt=function(){products={},prodToContextMap={}},this.Gu=function(e){return products[e].Gu()},this.Hu=function(e){var n=[];for(var o in products)products.hasOwnProperty(o)&&null!==products[o].zu(e)&&n.push(o);return n},this.Xu=function(e,n){if(!e||!products[e])return null;if(!n)return products[e].Iu(),null;var o=n.split(",");if(!o||0===o.length)return null;products[e].Iu();for(var t=0;t<o.length;t++){var r=o[t].split(":");if(2!==r.length)return null;products[e].Nu(new Dependency(r[0],r[1]))}return null};var processDependents=function(e){var n=products[e];if(n.Vu()){n.executeState="running";var o=n.Hu(e);for(var t in o)if(o.hasOwnProperty(t)){var r=o[t];processDependents(r)}}};this.setExecuteState=function(e,n){if(n!==ORA.Event.Za){if(oraSelf.ju(e)!==ORA.Event.Za){products[e].executeState=n,oraSelf.Debug.trace("setExecuteState:  "+e+" to "+n);var o=products[e].Hu();for(var t in o)o.hasOwnProperty(t)&&products.hasOwnProperty(o[t])&&products[o[t]].Qu(e,n);processDependents(e)}}else products[e].executeState=Product.Ju},this.ju=function(e){return ORA.O(products[e])?products[e].executeState===Product.Ju?ORA.Event.Za:products[e].executeState:null},this.Yu=function(e){for(var n in products)if(products.hasOwnProperty(n)&&null!==products[n].zu(e))return oraSelf.Debug.trace("isDependency:  "+e+" is dependency of "+n),!0;return oraSelf.Debug.trace("isDependency:  "+e+" is not a dependency of any product"),!1},this.vt=function(){var e=[];for(var n in products)if(products.hasOwnProperty(n)&&products[n].useTrackingPipeline){var o={};o.name=n,products[n].s_TrackingPipelineTimeout&&(o.timeout=products[n].s_TrackingPipelineTimeout),e.push(o)}return e},this.Zu=function(e,n){return accountRootUrl+"/"+tagId+"/"+e+"-"+n+".js"},this.at=function(e){for(var n in products)if(products.hasOwnProperty(n)&&e===products[n].prodId)return products[n];return null},this.St=function(){return g_Ready},this.fc=function(){return g_OnLoad},this.L=function(elm,event,func){try{return elm.addEventListener?elm.addEventListener(event,func,!1):elm.attachEvent?elm.attachEvent("on"+event,func):eval("elm."+event+"=func;"),0}catch(e){return-1}},this.qr=function(e,n,o){try{return e.removeEventListener?e.removeEventListener(n,o,!1):e.detachEvent&&e.detachEvent("on"+n,o),0}catch(t){return-1}},this.zr=function(e,n){var o=n.substr(0,2);if(e.addEventListener){if("on"===o)return n.substring(2)}else if(e.attachEvent&&"on"!==o)return"on"+n;return n};var _attachEventListener=function(){if("complete"!==document.readyState&&"undefined"!=typeof document.readyState||ready(),document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),ready()},!1),/WebKit|Opera/i.test(navigator.userAgent))var e=setInterval(function(){/loaded|complete/.test(document.readyState)&&(clearInterval(e),ready())},10)},_attachEvent=function(){"complete"!==document.readyState&&"loading"!==document.readyState||ready(),document.attachEvent("onreadystatechange",function(){"complete"!==document.readyState&&"loading"!==document.readyState||(document.detachEvent("onreadystatechange",arguments.callee),ready())})},setDomEventListeners=function(){try{document.addEventListener&&_attachEventListener(),document.attachEvent&&_attachEvent(),window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1),ready()},!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",arguments.callee,!1),ready()}),g_OnLoad?onload():window.addEventListener?window.addEventListener("load",function(){window.removeEventListener("load",arguments.callee,!1),onload()},!1):window.attachEvent&&window.attachEvent("onload",function(){window.detachEvent("onload",arguments.callee,!1),onload()})}catch(e){ready(),onload()}};oraSelf.Debug=new oraSelf.Cu;var qs=this.Xa(_window),qsHelper=function(e,n){oraSelf.O(qs[e])&&oraSelf.O(n)&&n(qs[e])};oraSelf.O(qs)&&(qsHelper("_ora.accountRoot",function(e){accountRootUrl=e}),qsHelper("_ora.debug",function(e){oraSelf.Debug.setDebugLevel(e.length)}));var parseStrToMap=function(e){var n={},o=e.split(";");for(var t in o)if(o.hasOwnProperty(t)){var r=o[t].split(":");n[r[0]]=r[1]}return n},thisOrThat=function(e,n){return e||n||null},getContextMap=function(){for(var e,n=thisOrThat(searchForCookieName("_ora.context"),searchForCookieName("_ora.config")),o=thisOrThat(searchMetatagsForName("_ora.context"),searchMetatagsForName("_ora.config")),t=qs&&thisOrThat(qs["_ora.context"],qs["_ora.config"]),r=document.getElementsByTagName("SCRIPT"),i=/_ora\.context=([^&]*)|_ora\.config=([^&]*)/g,a=0;a<r.length&&!e;a++)r[a].src&&/odc\.\js\?/.test(r[a].src)&&(e=i.exec(r[a].src));return null!==t?parseStrToMap(t):null!=n?parseStrToMap(n):null!=o?parseStrToMap(o):e&&2<e.length?e[2]!==undefined?parseStrToMap(e[2]):e[1]!==undefined?parseStrToMap(e[1]):parseStrToMap(e[0]):undefined},contextTriggerMap=getContextMap();if(void 0!==contextTriggerMap)for(var prodNam in oraSelf.Debug.info("LOADER:  Found one or more context(s)"),contextTriggerMap)contextTriggerMap.hasOwnProperty(prodNam)&&oraSelf.Debug.trace('LOADER:  triggers have set contextTriggerMap "'+prodNam+'":"'+contextTriggerMap[prodNam]+'"');var isContextTriggered=function(e){return void 0!==contextTriggerMap&&"undefined"!=typeof products[e].configName&&"undefined"!=typeof contextTriggerMap[e]&&contextTriggerMap[e]===products[e].configName?(oraSelf.Debug.trace('LOADER:  context "'+products[e].configName+'" triggered for '+e),!0):(void 0===contextTriggerMap||"undefined"==typeof contextTriggerMap[e])&&(oraSelf.Debug.trace("LOADER:  published context triggered for "+e),!0)},_preinit=function(){var e,n="unknown";try{for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.O(products[e].plugin)&&ORA.O(products[e].plugin[ORA.Event.Ru]))&&isContextTriggered(n)&&ORA.ju(n)!==ORA.Event.Za){var o='LOADER:  product "'+n+'" with context name "';o+=products[n].configName+'" _preinit phase start',oraSelf.Debug.trace(o),products[n].plugin[ORA.Event.Ru](),o='LOADER:  product "'+n+'" with context name "',o+=products[n].configName+'" _preinit phase complete',oraSelf.Debug.trace(o)}}catch(t){ORA.abortModuleHelper(n,t)}},_init=function(){var e,n="unknown";try{for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.O(products[e].plugin)&&ORA.O(products[e].plugin[ORA.Event.Ou]))&&isContextTriggered(n)&&ORA.ju(n)!==ORA.Event.Za){var o='LOADER:  product "'+n+'" with context name "';o+=products[n].configName+'" _init phase start',oraSelf.Debug.trace(o),products[n].plugin[ORA.Event.Ou](),o='LOADER:  product "'+n+'" with context name "',o+=products[n].configName+'" _init phase complete',oraSelf.Debug.trace(o)}}catch(t){ORA.abortModuleHelper(n,t)}},_preload=function(){var e,n="unknown";try{for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.O(products[e].plugin)&&ORA.O(products[e].plugin[ORA.Event.hu])&&ORA.O(products[e].plugin.oraConfigObj)&&!0===products[e].plugin.oraConfigObj.doLoad)&&isContextTriggered(n)&&ORA.ju(n)!==ORA.Event.Za){var o='LOADER:  product "'+n+'" with context name "';o+=products[n].configName+'" _preload phase start',oraSelf.Debug.trace(o),products[n].plugin[ORA.Event.hu](),o='LOADER:  product "'+n+'" with context name "',o+=products[n].configName+'" _preload phase complete',oraSelf.Debug.trace(o)}}catch(t){ORA.abortModuleHelper(n,t)}},_load=function(){var e,n="unknown";try{var o=function(e){return function(){ORA.Debug.debug(e+" downloaded successfully")}};for(n in products)if(products.hasOwnProperty(n)&&(e=n,ORA.O(products[e].plugin)&&ORA.O(products[e].plugin[ORA.Event.vu])&&ORA.O(products[e].plugin.oraConfigObj)&&!0===products[e].plugin.oraConfigObj.doLoad)&&isContextTriggered(n)&&ORA.ju(n)!==ORA.Event.Za){ORA.setExecuteState(n,Product.DOWNLOADING);var t='LOADER:  product "'+n+'" with context name "';t+=products[n].configName+'" _load phase start',oraSelf.Debug.trace(t),products[n].plugin[ORA.Event.vu](o(n)),t='LOADER:  product "'+n+'" with context name "',t+=products[n].configName+'" _load phase complete',oraSelf.Debug.trace(t)}}catch(r){ORA.abortModuleHelper(n,r)}},_errorGeneral=function(e){oraSelf.Debug.error("Loader Error: "+e,"016")},_loaderAbort=function(){var e="unknown";g_loaderAborted=!0,oraSelf.Debug.error("Loader global abort event","017");try{for(e in products)products.hasOwnProperty(e)&&ORA.O(products[e].plugin)&&!0===products[e].plugin.oraConfigObj.doLoad&&(ORA.fireEvent(new ORA.Event(e+"_"+ORA.Event.Za,ORA.Event.In),!1,!0),ORA.setExecuteState(e,ORA.Event.Za),ORA.pc(e),ORA.Debug.error("Aborting product: "+e,"018"))}catch(n){ORA.abortModuleHelper(e,n)}};oraSelf.Debug.info("LOADER:  Version "+[version.ki,version.Ii,version._i].join(".")),this.Zt(this.Event.Ru,_preinit,function(){_errorGeneral("preinit fail")}),this.Zt(this.Event.Ou,_init,function(){_errorGeneral("init fail")}),this.Zt(this.Event.hu,_preload,function(){_errorGeneral("preload fail")}),this.Zt(this.Event.vu,_load,function(){_errorGeneral("load fail")}),this.Zt(this.Event.mu,_loaderAbort,function(){_errorGeneral("abort fail")});var contextLibs=[];this.start=function(){var e=function(){oraSelf.fireEvent(new ORA.Event(ORA.Event.Ru,ORA.Event.In)),oraSelf.fireEvent(new ORA.Event(ORA.Event.Ou,ORA.Event.In)),oraSelf.fireEvent(new ORA.Event(ORA.Event.hu,ORA.Event.In)),oraSelf.fireEvent(new ORA.Event(ORA.Event.vu,ORA.Event.In)),oraSelf.Debug.debug("LOADER:  Synchronous functionality has finished firing")};try{setDomEventListeners(),ORA.O(contextTriggerMap)?(oraSelf.Debug.debug("LOADER:  contextTriggerMap contains contexts"),function(){for(var e in contextTriggerMap)if(contextTriggerMap.hasOwnProperty(e)){var n=oraSelf.Zu(e,contextTriggerMap[e]);registerContext(e,contextTriggerMap[e]),void 0!==n&&(oraSelf.Debug.debug("LOADER:  adding "+n+" to download"),contextLibs.push(n))}}(),oraSelf.Ja("head",e,0,!0,contextLibs)):e()}catch(n){oraSelf.fireEvent(new ORA.Event(ORA.Event.mu,ORA.Event.In))}},this.productReady=function(e,n,o){var t=products[e],r=o||"_product_ready";if(!t||t.executeState!==Product.Wu&&t.executeState!==Product.Bu)t?(ORA.Zt(e+r,n),ORA.Debug.debug("attached lister for "+e+" "+r)):(ORA.Debug.debug("product was not found attaching to "+e+" "+r),ORA.Zt(e+r,n));else try{n()}catch(i){ORA.Debug.debug("User supplied product ready callback failed "+i.message)}},this.productReady.push=function(e){ORA.productReady.apply(this,e),ORA.Debug.debug("productReady pushing function for "+e[0],"LOADER")},oraSelf.Debug.debug("ORA object created",LOADER),oraSelf.Debug.info('To dump config params use: "ORA.Debug.dumpParams()"'),oraSelf.Debug.info('To check the mode use: "ORA.Debug.checkMode(false)" - Use true if you wish to reset the mode.')}var executeQueue=function(e){var n=[];try{for(;0<e.length;)n=e.shift(),ORA.Debug.debug("productReady queue found when loading for "+n[0],"LOADER"),ORA.productReady.apply(this,n)}catch(o){ORA.Debug.debug("Error processing ORA.productReady queue "+o.message,"LOADER")}};if("undefined"==typeof ORA||"undefined"!=typeof ORA&&!ORA.ready){var queue=[];"undefined"!=typeof ORA&&ORA.productReady&&(queue=ORA.productReady),ORA=new _ORA(window,window.document,window.navigator,window.location),executeQueue(queue),ORA.ready=!0}else console.error("ORA global namespace already in use, Infinity not loaded/setup")}(),function(){var n;"undefined"!=typeof ORA&&!0===ORA.ready&&(ORA.registerPlugin=ORA.registerPlugin,ORA.abortModuleHelper=ORA.abortModuleHelper,ORA.setLoaderConversionTimeoutDefault=ORA.setLoaderConversionTimeoutDefault,ORA.loaderConversionTimeoutDefault=ORA.loaderConversionTimeoutDefault,ORA.downloadLib=ORA.downloadLib,ORA.reset=ORA.reset,ORA.Rc=function(){//Define Products
    //---------------------------
    //
    //  analytics Module Code 0.0.3
    //
    //---------------------------
    ORA.analyticsModule = function(){};

    //Object to contain custom configs
    ORA.analyticsModule.prototype.oraConfigObj = {
  "s_disableSeed":false,
  "alwaysLoad":true,
  "ora-plugins":{
    "cg":{
      "enable":true,
      "cgDefs":[
        "wt.cg_l1",
        "wt.cg_l2",
        "wt.cg_l3",
        "wt.cg_l4",
        "wt.cg_l5",
        "wt.cg_l6",
        "wt.cg_l7",
        "wt.cg_l8",
        "wt.cg_l9",
        "wt.cg_l10"
      ],
      "blockCollect":true
    },
    "html5Video":{
      "enable":true,
      "poll":false,
      "pctInc":25,
      "beraconType":"auto",
      "seek":true,
      "pollRate":250,
      "nameCallback":null,
      "beaconCurve":{
        "300":30,
        "60":10,
        "600":60,
        "130":30,
        "420":45,
        "1800":150
      },
      "pause":true,
      "load":false,
      "cued":false,
      "loadMeta":false,
      "screenMode":false,
      "beacon":true,
      "postMessage":false,
      "fixed":false,
      "quartile":true,
      "buffering":false,
      "bins":15,
      "beaconRate":60,
      "metaTags":true,
      "volume":false
    },
    "evtTrack":{
      "enable":true,
      "eventList":{
        "myClick":{
          "eventTrigger":"mousedown",
          "selector":"BUTTON.btnTest",
          "eventCallback":"var el = e[\"element\"] || e[\"srcElement\"] || {},payload = {};payload[\"WT.ti\"] = \"Button:\" + el.textContent || el.innerText;payload[\"WT.dl\"] = \"99\";return {\"data\": payload};"
        }
      },
      "trackSocial":true,
      "standardEvents":{
        "anchor":true,
        "onsite":true,
        "offsite":true,
        "rightclick":true,
        "download":true,
        "javascript":false,
        "scrollTracking":true
      },
      "downloadtypes":"xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip,pptx",
      "socialTypes":{
        "Reddit":[
          "Reddit.com"
        ],
        "Pinterest":[
          "Pinterest.com"
        ],
        "YouTube":[
          "youtube.com"
        ],
        "Meetup":[
          "Meetup.com"
        ],
        "Google+":[
          "plus.google.com"
        ],
        "VK":[
          "VK.com"
        ],
        "Twitter":[
          "Twitter.com"
        ],
        "Odnoklassniki":[
          "Odnoklassniki.ru"
        ],
        "Weibo":[
          "Weibo.com"
        ],
        "Facebook":[
          "www.facebook.com"
        ],
        "Ask.fm":[
          "Ask.fm"
        ],
        "Tumblr":[
          "Tumblr.com"
        ],
        "LinkedIn":[
          "LinkedIn.com"
        ],
        "Instagram":[
          "instagram.com"
        ],
        "Flickr":[
          "Flickr.com"
        ],
        "Qzone":[
          "Qzone.qq.com"
        ]
      }
    },
    "yt":{
      "enable":true,
      "legacy":false,
      "pctInc":25,
      "seek":true,
      "pause":true,
      "load":false,
      "cued":false,
      "loadMeta":false,
      "beacon":true,
      "mode":"auto",
      "quartile":true,
      "buffering":false,
      "loadAPI":false,
      "bins":15,
      "beaconRate":60,
      "volume":false
    },
    "fragment":{
      "virtualPageView":false,
      "prefix":"anchor",
      "blockCollect":true,
      "virtialDl":26,
      "paramHandeling":"addPrefix",
      "addAnchorName":"name",
      "applyClickEventOnly":false
    },
    "bc":{
      "enable":true,
      "poll":false,
      "pctInc":25,
      "beraconType":"auto",
      "seek":true,
      "pollRate":250,
      "nameCallback":null,
      "beaconCurve":{
        "300":30,
        "60":10,
        "600":60,
        "130":30,
        "420":45,
        "1800":150
      },
      "pause":true,
      "load":false,
      "cued":false,
      "preProcess":null,
      "loadMeta":false,
      "screenMode":false,
      "beacon":true,
      "maxBinds":10,
      "postMessage":false,
      "fixed":false,
      "playerId":"div[id^='vjs_video']:not([id$='_api']):not([id*='_component'])",
      "quartile":true,
      "buffering":false,
      "bins":15,
      "beaconRate":60,
      "metaTags":true,
      "volume":false
    },
    "heatmap":{
      "enable":true,
      "maxymiserEnable":true,
      "blockCollect":true
    },
    "cookieCutter":{
      "readCookies":[
        {
          "cookie":{
            "TEST":"ora.cook_a"
          },
          "options":{
            "persist":true
          }
        },
        {
          "cookie":{
            "ORA_FPC":{
              "id":"ora.c_id",
              "ss":"ora.c_ss",
              "lv":"ora.c_lv"
            }
          },
          "options":{
            "parseOn":":",
            "parseLv":"="
          }
        },
        {
          "cookie":{
            "ELOQUA":{
              "GUID":"ora.eloqua"
            }
          }
        },
        {
          "cookie":{
            "utag_main":{
              "_ss":"ora.u_ss",
              "_st":"ora.u_st",
              "v_id":"ora.u_vid",
              "_sn":"ora.u_sn",
              "ses_id":"ora.u_ses_id"
            }
          },
          "options":{
            "parseOn":"$",
            "parseLv":":",
            "persist":false
          }
        }
      ],
      "enable":true
    },
    "pp":{
      "enable":true,
      "cookieDays":365,
      "priority":100,
      "defPrefix":"DCSext",
      "params":[
        "wt.gcm_uid",
        "wt.p_cookie_att",
        "wt.gcm_uid",
        "wt.p_status",
        "vtid"
      ],
      "useMostRecent":true,
      "cookieName":"WTPERSIST"
    },
    "plt":{
      "enable":true,
      "waitTime":150,
      "sampleRate":50,
      "assetFilter":".*js",
      "maxT":2,
      "enablePerf":false,
      "perfLimit":50
    }
  },
  "timezone":0,
  "enabled":true,
  "DNTBehavior":"honorDNT",
  "skip_qp_no_equals":true,
  "s_dependencies":"common:running",
  "hosted-plugins":{
    "InfinityPlugin":{
      "enable":true,
      "src":"https://www.oracle.com/asset/web/analytics/infinity_common.js",
      "blockCollect":false
    }
  },
  "defaultCollectionServer":"dc.oracleinfinity.io",
  "s_useTrackingPipeline":true,
  "libUrl":"//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/java/analytics-production/analytics.js",
  "accountGuid":"wh3g12c3gg",
  "tagId":"java",
  "secureCookie":false,
  "destinations":[
    {
      "accountGuid":"wh3g12c3gg"
    }
  ],
  "s_TrackingPipelineTimeout":4000
};

    if (!(typeof ORA.analyticsModule.prototype.oraConfigObj.enabled && ORA.analyticsModule.prototype.oraConfigObj.enabled === false)){


    ORA.analyticsModule.prototype.preinit = function() {
    };

    // run rules
    ORA.analyticsModule.prototype.init = function() {
        try {
                         if(true) {
                           //Rule - simple
                                    this.oraConfigObj.key="value";
                
                                if (this.oraConfigObj.doLoad === undefined) {
                 this.oraConfigObj.doLoad=true;
                }
           }
                    // handle case where it matches none of the rules
            this.oraConfigObj.doLoad = this.oraConfigObj.doLoad || this.oraConfigObj.alwaysLoad;

                    } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
   };


    // run any preload scripts
    ORA.analyticsModule.prototype.preload = function() {
        try {
            // get the max conversion timeout from the products for click functionality
            var currTimeout = 0;
            if (ORA.analyticsModule.prototype.oraConfigObj["s_conversionTimeout"]) {
                currTimeout = ORA.analyticsModule.prototype.oraConfigObj["s_conversionTimeout"];
            }
            ORA.setLoaderConversionTimeoutDefault(Math.max(currTimeout, ORA.loaderConversionTimeoutDefault()));
            ORA.Debug.debug("PRELOAD:  Executing preload script");
            

        } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
    };


    // load the analytics tag
    ORA.analyticsModule.prototype.load = function(callback){
        try {
            ORA.Debug.debug("LOAD:  Executing load phase");
            var productName="analytics";
            var attachId="head";
            //Load script
            
    var fail = function(){
        ORA.fireEvent(new ORA.Event(productName+"_"+ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS));
    };
    ORA.downloadLib(attachId, callback, fail, 0, true, this.oraConfigObj.libUrl);

        } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
    };


    ORA.analyticsModule.prototype.postload = function(){
        ORA.Debug.debug("POSTLOAD:  Executing postload analytics complete");
        try {
            ORA.Debug.info("LOADER:  ORA.analyticsModule.prototype: postload");
            //PostLoad script
            
        ORA.analytics.setup(ORA.analyticsModule.prototype.oraConfigObj);
    
        } catch(e) {
            ORA.abortModuleHelper("analytics", e);
        }
    };


    // abort gracefully on timer expire
    ORA.analyticsModule.prototype.abort = function(){
        try{
            ORA.Debug.debug("ABORT:  Executing analyticsModule abort");
            //Abort script
            

        } catch(e){
            ORA.abortModuleHelper("analytics", e);
        }
    };
    } else {
            ORA.Debug.debug('analytics  module disabled - exiting module setup');

        }


    //  setup the product Name
    ORA.analyticsModule.ProductName = "analytics";

    // register plugin
    ORA.registerPlugin(ORA.analyticsModule, "production");
},ORA.os=function(){},ORA.os.prototype.oraConfigObj={rs:"//c.oracleinfinity.io/acs/common/js/lib/sizzle.min.js",doLoad:!0,s_dependencies:""},ORA.os.prototype.load=function(e){try{ORA.Xu("sizzle",this.oraConfigObj.s_dependencies),"undefined"!=typeof Sizzle&&ORA.O(Sizzle)||!ORA.Yu("sizzle")?ORA.setExecuteState("sizzle","ready"):ORA.downloadLib("head",e,function(){ORA.abortModuleHelper("sizzle","failed to download sizzle")},0,!0,this.oraConfigObj.rs)}catch(n){ORA.Debug.debug("Sizzle load error "+n.message)}},ORA.os.prototype.postload=function(){},ORA.os.ProductName="sizzle",ORA.registerPlugin(ORA.os,"default"),n=!0,ORA.as=function(){},ORA.as.prototype.oraConfigObj={rs:"//c.oracleinfinity.io/acs/common/js/lib/json2.js",doLoad:!0,s_dependencies:""},ORA.as.ss=function(e){n=e},ORA.as.cs=function(){return n},ORA.as.prototype.load=function(e){try{ORA.Xu("json",this.oraConfigObj.s_dependencies),"undefined"==typeof JSON&&ORA.Yu("json")?(ORA.Debug.debug("JSON not detected"),ORA.as.ss(!1),ORA.downloadLib("head",e,function(){ORA.abortModuleHelper("json","failed to download json"),ORA.abortModuleHelper("analytics","failed to download json")},0,!0,this.oraConfigObj.rs)):(ORA.as.ss(!0),ORA.setExecuteState("json","ready"))}catch(n){ORA.abortModuleHelper("analytics",n)}},ORA.as.prototype.postload=function(){},ORA.as.ProductName="json",ORA.registerPlugin(ORA.as,"default"),function(){ORA.Event.iu="bluekai_data_ready";var o="bluekai_uid_plugin",r={},t=function(){};"undefined"==typeof Array.isArray&&(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)});var i=function(e,n){var o=n||"";for(var t in e)e.hasOwnProperty(t)&&(Array.isArray(e[t])?r["ora."+o+"_"+t]=e[t].join(";"):"object"==typeof e[t]?i(e[t],o+"_"+t):r["ora."+o+"_"+t]=e[t]);return null},a=function(e){var n=[];for(var o in e)e.hasOwnProperty(o)&&(n.push(String(o)),n.push(encodeURIComponent(e[o])));return n.join(",")},e=function(e){if(e&&e.data&&"bluekai"===e.data.source){var n=e.data;i(n,"odc"),"undefined"!=typeof ORA.setCookie?ORA.setCookie(o,a(r),"; path=/"):document.cookie=o+"="+a(r)+"; path=/"}t()},n=function(){window.addEventListener?window.addEventListener("message",e,!1):ORA.Debug.debug("bluekai reguires addEventListener support","LOADER-bluekai")};t=function(){ORA.Debug.debug("Removing postMessage lister for bluekai data","ANA-"+o),window.removeEventListener?window.removeEventListener("message",e):window.us?window.us("onmessage",e):ORA.Debug.debug("Browser does not support Removing messageListeners - exiting","ANA-"+o),ORA.fireEvent(new ORA.Event(ORA.Event.iu,ORA.Event.In))},ORA&&ORA.fireEvent&&ORA.Debug&&setTimeout(n,1),window.ORA.bkLoader=n}(),ORA.ds=function(){},ORA.Event.Si="common_load_complete",ORA.Event.Vi="common_ora_pluginmgr_ready",ORA.Event.Xi="common_hosted_pluginmgr_ready",ORA.Event.st="common_tracking_flush",ORA.Event.jn="common_com_exec_req",ORA.ds.prototype.oraConfigObj={rs:"//c.oracleinfinity.io/acs/common/js/1.3.35/common.js",doLoad:!0,s_dependencies:"json:running"},ORA.ds.prototype.load=function(e){try{(!ORA.O(ORA.t)||ORA.O(ORA.t)&&!ORA.O(ORA.t.dn))&&ORA.Yu("common")&&ORA.downloadLib("head",e,function(){ORA.fireEvent(new ORA.Event("common"+ORA.Event.Za,ORA.Event.In))},0,!0,this.oraConfigObj.rs)}catch(n){ORA.abortModuleHelper("common",n)}},ORA.ds.prototype.postload=function(){ORA.t.setup()},ORA.ds.ProductName="common",ORA.registerPlugin(ORA.ds,"default"),function(){ORA.Event.AA="analytics_load_complete",ORA.Event.Lt="analytics_ora_plugins_loaded",ORA.Event.Ht="analytics_hosted_plugins_loaded",ORA.Event.Ui="analytics_ora_plugins_init",ORA.Event.Ki="analytics_hosted_plugins_init",ORA.Event._e="analytics_dcs_setup",ORA.Event.Ci="analytics_product_ready",ORA.Event.ie="analytics_setup_complete",ORA.Event.Ge="analytics_before_page_analysis",ORA.Event.ze="analytics_after_page_analysis",ORA.Event.Ce="analytics_before_getid",ORA.Event.ye="analytics_after_getid",ORA.Event.We="analytics_pv_mutate",ORA.Event.ls="analytics_data_send",ORA.Event.ni="loader_click",ORA.Event.oi="loader_pre_execute",ORA.Event.Ji="loader_execute",ORA.Event.ri="loader_reset",ORA.Event.ii="loader_collect",ORA.Event.ei="loader_view",ORA.getContextName=function(){return ORA.at("analytics")&&ORA.at("analytics").configName||""},ORA.fs=function(){return ORA.at("analytics")&&ORA.at("analytics").configName||""};var n=function(e,n){ORA.fireEvent(new ORA.Event(e,ORA.Event.In,null,n),null,null,!0)};ORA.collect=function(e){return n(ORA.Event.ii,e),!0},ORA.view=function(e){return n(ORA.Event.ei,e),!0},ORA.click=ORA.sendEvent=function(e){return n(ORA.Event.ni,e),!0},ORA.regPlugin=function(e,n,o){var t=function(){ORA.Debug.debug("regPlugin - call of deferred register of "+e,"LOADER"),ORA.analytics.plugins[e]===undefined?(ORA.Debug.debug("Registering init for "+e),ORA.t.$t.Ft(e,n,o)):ORA.analytics.plugins[e]&&ORA.analytics.plugins[e].src?(ORA.analytics.plugins[e].loaded=!0,ORA.t.Yt.Ft(e,n,o,"hosted-plugins")):ORA.t.$t.Ft(e,n,o)};ORA.t&&ORA.t.$t&&ORA.t.$t.St&&!0===ORA.t.$t.St()?(ORA.Debug.debug("ORA.common.pluginMgr exists so register is possible"),t()):(ORA.Debug.debug("regPlugin - deferred register of "+e,"LOADER"),ORA.analytics.plugins[e]&&ORA.analytics.plugins[e].src?ORA.Zt(ORA.Event.Xi,t,null,!0):ORA.Zt(ORA.Event.Vi,t,null,!0))}}(),ORA.Rs=function(){},ORA.Rs.prototype.oraConfigObj={doLoad:!0,s_dependencies:"",config:{cookie_name:"responsys_cookie_default",fallback_cookie_domain_level:0,fallback_timeout:"2000",urlSuffix:"/pub/cc",responsysURL:"",additionalParms:"_pb_=R&_tt_=Q"}},ORA.Rs.prototype.As=function(e,n){for(var o in e.config)e.config.hasOwnProperty(o)&&""!==e.config[o]&&(n.config[o]=e.config[o])},ORA.Rs.prototype.Os=function(e){e.config.responsysURL||(ORA.debug("missing required setting for responsysURL, disabling module","responsys"),e.enabled=!1)},ORA.Rs.prototype.postload=function(){try{if(this.ps()){var e=this.hs()+this.vs(location.search,this.oraConfigObj.config.additionalParms);e+="&"+this.oraConfigObj.config.additionalParms+location.hash;var n=this.oraConfigObj.config.fallback_timeout;return this.gs(e,function(){ORA.Debug.debug("responsysModule load pixel success",ORA.Rs.ProductName)},function(){ORA.Debug.debug("responsysModule load pixel failed - fallback to standard cookie",ORA.Rs.ProductName),ORA.Rs.prototype._s()},n),!0}ORA.setExecuteState("responsysModule","ready")}catch(o){return ORA.Debug.debug("responsysModule load error "+o.message),!1}},ORA.Rs.prototype.load=function(){try{var e=ORA.analyticsModule&&ORA.analyticsModule.prototype&&ORA.analyticsModule.prototype.oraConfigObj,n={};if(e&&ORA.analyticsModule.prototype.oraConfigObj.responsys){var o=ORA.Rs.prototype.oraConfigObj;(n=ORA.analyticsModule.prototype.oraConfigObj.responsys).doLoad&&(o.doLoad=n.doLoad),n.s_dependencies&&(o.s_dependencies=n.s_dependencies),ORA.Rs.prototype.As(n,o),ORA.Rs.prototype.Os(n)}if(n.enabled===undefined||!n.enabled)return void ORA.debug("responsys module not enabled","responsys");ORA.Xu("responsysModule","analytics:downloading"),ORA.setExecuteState("responsysModule","ready")}catch(t){ORA.Debug.debug("responsysModule load error "+t.message)}},ORA.Rs.prototype.ps=function(e){var n=ORA.Xa(e);return!!(n&&n._ri_&&n._ei_)},ORA.Rs.prototype.gs=function(e,n,o,t){var r=new Image,i=!1,a=t;r.onload=function(){i||(i=!0,n(),ORA.Debug.debug("Responsys pixel loaded",ORA.Rs.ProductName))},r.onerror=function(){i||(i=!0,o(),ORA.Debug.debug("Responsys pixel load failed",ORA.Rs.ProductName))},window.setTimeout(function(){i&&1!==a||(i=!0,ORA.Debug.debug("Responsys pixel load failed",ORA.Rs.ProductName),o())},a),r.src=e},ORA.Rs.prototype._s=function(e){var n=ORA.Xa(e),o=this.oraConfigObj.config,t=o.cookie_name,r="_ri_"+n._ri_+"&_ei_"+n._ei_,i=location.hostname.split("."),a=o.fallback_cookie_domain_level,s=new Date,c="";for(s.setTime(s.getTime()+63113851500);a;)i.shift(),a--;i.join(".")!==location.host&&(c=";domain="+i.join("."));var u="; path=/ ; expires= "+s.toGMTString()+c;ORA.Debug.debug("Setting fallback cookie","responsysModule"),ORA.setCookie(t,r,u)},ORA.Rs.prototype.removeParameter=function(e,n){var o=e,t=o.split("?");if(2<=t.length){for(var r=encodeURIComponent(n)+"=",i=t[1].split(/[&;]/g),a=i.length;0<a;)-1!==i[--a].lastIndexOf(r,0)&&i.splice(a,1);return 0<i.length?t[0]+i.join("&"):t[0]}return o},ORA.Rs.prototype.vs=function(e,n){for(var o=e,t=n.split("&"),r=0;r<t.length;r++){var i=t[r].split("=");o=this.removeParameter(o,i[0])}return"?"+o},ORA.Rs.prototype.hs=function(){var e=this.oraConfigObj.config,n=e.responsysURL;return e.ms&&""!==e.ms&&(n=e.ms),n+e.urlSuffix},ORA.Rs.ProductName="responsysModule",ORA.registerPlugin(ORA.Rs,"default"),ORA.Rc(),ORA.start())}();