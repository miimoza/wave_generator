/* (c) 2016 Selligent - timestamp 2021-06-24T03:02:57Z */
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Main=void 0;var i=n(1),o=n(5),r=function(){var t=new o.ConsoleLogger;new i.Custom(t).initialize()};e.Main=r,new r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Custom=void 0;var i=n(2),o=n(3),r=n(4),a=function(){function t(t){var e=this;this.initialize=function(){e.previewMode=!1,e.initializeSiteScript(),e.initializeInspector(),e.initializeIntelligentContent()},this.initializeInspector=function(){if(0===window.name.indexOf("INSPECTOR_"+r.Constants.universeId)){e.previewMode=!0;var t=r.Constants.targetUrl+"/api/inspector/script";o.ScriptHelpers.appendScript(t)}},this.initializeIntelligentContent=function(){try{r.Constants.launchRecommendationScript()}catch(t){e.logger.warn("loading recommendation script failed")}},this.initializeSiteScript=function(){o.ScriptHelpers.appendScript(r.Constants.baseScriptUrl,e.siteScriptInitiallizedCallback)},this.siteScriptInitiallizedCallback=function(){window.BT_Init=function(){window.BT.initialize({availablePlacements:r.Constants.placements,autoTags:r.Constants.autoTags,metaTags:r.Constants.metaTags,trackUrl:r.Constants.trackUrl,recommendationItemUrl:r.Constants.recommendationItemUrl,universeId:r.Constants.universeId,dntCheckRequired:r.Constants.dntCheckRequired,trackExitIntentTimeout:r.Constants.trackExitIntentTimeout,trackInactivityTimeout:r.Constants.trackInactivityTimeout,recommendationScript:r.Constants.recommendationScript});try{window.wa?window.wa.afterInit&&window.wa.afterInit():e.logger.warn("wa not defined")}catch(t){e.logger.warn("wa afterInit failed")}}},i.ArgumentValidation.validateNotNull(t,"logger"),this.logger=t}return Object.defineProperty(t.prototype,"previewMode",{get:function(){return window.wa.btPreviewMode},set:function(t){window.wa.btPreviewMode=t},enumerable:!1,configurable:!0}),t}();e.Custom=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ArgumentValidation=void 0;var i=function(){function t(){}return t.validateNotNull=function(t,e){if(!t)throw new RangeError("Argument "+e+" cannot bu null")},t}();e.ArgumentValidation=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ScriptHelpers=void 0;var i=function(){function t(){}return t.appendScript=function(t,e){var n=this;if(window.document.getElementsByTagName("body").length>0){var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,document.getElementsByTagName("head")[0].appendChild(i),e&&(i.addEventListener?i.addEventListener("load",e,!1):i.attachEvent&&i.attachEvent("load",e))}else var o=setTimeout((function(){clearTimeout(o),n.appendScript(t,e)}),250)},t}();e.ScriptHelpers=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Constants=void 0;var i=function(){function t(){}return t.launchRecommendationScript=function(){!function(){var a=window._thq||[];a.push(["setId","37d0a0fc9e814f2f94636fb53cd8e575"]);a.push(["setThUrl","https://offer.slgnt.eu"]);a.push(["trackEvents"]);a.push(["detectChanges"]);window._thq=a;a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?"https://":"http://")+"offer.slgnt.eu/386fe956b6db491a9d2fb46ea57d3efc/da4b7a2aa25c48.js?v=e65dcf1ee6918bfa405a6a2507792e1b";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();},t.targetUrl="https://site.slgnt.eu",t.universeId='edf4fb44-326e-456b-9275-181ebc743cfe',t.placements=[{"Action":"Insert","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Image","Css":"","DefaultContent":"&lt;H3&gt;Entrez votre texte ici...&lt;/H3&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":5838,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Before","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[@id=\"pub-cover\"]/div[9]/div/h3","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Insert","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Image","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":5839,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"After","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//header[@id=\"header\"]/div[2]","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Insert","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;H3&gt;Entrez votre texte ici...&lt;/H3&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":5845,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"After","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[@id=\"pub-cover\"]/div[8]/div/h3","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Insert","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Popin","Css":"","DefaultContent":"&lt;ADVANCED&gt;Entrez votre texte ici...&lt;/ADVANCED&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"200","Id":5846,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"End","Style":"","Url":"","Width":"200","Xpath":"//html/body","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":{"CloseButton":{"Position":"Outside","Size":14,"Color":"#fff","BorderColor":"#fff","BackgroundColor":"#838383"},"Border":{"Width":1,"Radius":0,"Color":"#c5c5c5"},"Overlay":{"Enabled":false,"Color":"#00000080"},"Responsive":{"Enabled":false}}},{"Action":"Insert","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Script","Css":"","DefaultContent":"&lt;ADVANCED&gt;Entrez votre texte ici...&lt;/ADVANCED&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6004,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"End","Style":"","Url":"","Width":"","Xpath":"//html/body","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6188,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'bottom-bar-full__description')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Content goes here...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6209,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-bar-description')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6213,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-fullbar-offre')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6214,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-fullbar-offer-description')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6215,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-bar-cta + js-data-url')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6216,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://lexpansion.lexpress.fr/actualite-economique/retraites-ces-erreurs-dans-le-calcul-des-pensions-soulevees-par-la-cour-des-comptes_2151222.html","Width":"","Xpath":"//div[contains(@class, 'js-inread-title')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6217,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://lexpansion.lexpress.fr/actualite-economique/retraites-ces-erreurs-dans-le-calcul-des-pensions-soulevees-par-la-cour-des-comptes_2151222.html","Width":"","Xpath":"//div[contains(@class, 'js-inread-description')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6218,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://lexpansion.lexpress.fr/actualite-economique/retraites-ces-erreurs-dans-le-calcul-des-pensions-soulevees-par-la-cour-des-comptes_2151222.html","Width":"","Xpath":"//div[contains(@class, 'js-inread-link')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Image","Css":"sgt-inread__logo","DefaultContent":"&lt;IMG&gt;Entrez votre texte ici...&lt;/IMG&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"55","Id":6219,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Over","Style":"","Url":"https://lexpansion.lexpress.fr/actualite-economique/retraites-ces-erreurs-dans-le-calcul-des-pensions-soulevees-par-la-cour-des-comptes_2151222.html","Width":"55","Xpath":"//div[@id=\"placeholder--inread\"]/div/a/img","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Css","Css":"","DefaultContent":"&lt;A&gt;Entrez votre texte ici...&lt;/A&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6221,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://lexpansion.lexpress.fr/actualite-economique/retraites-ces-erreurs-dans-le-calcul-des-pensions-soulevees-par-la-cour-des-comptes_2151222.html","Width":"","Xpath":"//div[@id=\"placeholder--inread\"]/div/a","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;A&gt;Entrez votre texte ici...&lt;/A&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6235,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Over","Style":"","Url":"https://lexpansion.lexpress.fr/actualite-economique/solutions-30-l-affaire-qui-agite-la-bourse-de-paris_2151718.html","Width":"","Xpath":"//div[@id=\"placeholder--inread\"]/div/a","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;A&gt;Entrez votre texte ici...&lt;/A&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6236,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://lexpansion.lexpress.fr/actualite-economique/climat-chez-total-la-revolution-de-velours-attendra_2151723.html","Width":"","Xpath":"//div[@id=\"placeholder--inread\"]/div","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6239,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-fullbar-title')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;A&gt;Entrez votre texte ici...&lt;/A&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6240,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-bar-cta')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6241,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-bar-offre')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6244,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-autopromo-title')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6245,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-autopromo-description')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6246,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-autopromo-link ')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;A&gt;Entrez votre texte ici...&lt;/A&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6247,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[@id=\"une-placeholder--autopromo\"]/div","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Image","Css":"sgt-autopromo__logo","DefaultContent":"&lt;IMG&gt;Entrez votre texte ici...&lt;/IMG&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"70","Id":6248,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Over","Style":"","Url":"https://www.lexpress.fr/","Width":"70","Xpath":"//div[@id=\"une-placeholder--autopromo\"]/div/a/img","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;A&gt;Entrez votre texte ici...&lt;/A&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6255,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Over","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"/html/body/div[4]/a","AllowDisableIFrame":false,"ZIndex":-1,"PlacementStyle":null},{"Action":"Edit","Advanced":false,"ApplyOnAllXpathMatches":false,"ContentType":"Html","Css":"","DefaultContent":"&lt;DIV&gt;Entrez votre texte ici...&lt;/DIV&gt;","DialogPosition":"M","DomainFilter":"None","Domains":"","Effect":"","EnableCappingOncePerInterval":false,"Height":"","Id":6272,"Invasive":false,"MaxInvasiveCount":1,"MaxInvasiveInterval":"Visit","Position":"Inside","Style":"","Url":"https://www.lexpress.fr/","Width":"","Xpath":"//div[contains(@class, 'js-bottom-fullbar-cta')]","AllowDisableIFrame":true,"ZIndex":-1,"PlacementStyle":null}],t.autoTags=[],t.metaTags=[],t.trackUrl="https://site-azp.slgnt.eu/frontend/api/track",t.recommendationItemUrl="//site-azp.slgnt.eu/frontend/api/item",t.dntCheckRequired=true,t.trackExitIntentTimeout=-1,t.trackInactivityTimeout=-1,t.baseScriptUrl="//targetemsecure.blob.core.windows.net/edf4fb44-326e-456b-9275-181ebc743cfe/edf4fb44326e456b9275181ebc743cfe_2_1618949910.js",t.recommendationScript="!function(){var a=window._thq||[];a.push([\"setId\",\"37d0a0fc9e814f2f94636fb53cd8e575\"]);a.push([\"setThUrl\",\"https://offer.slgnt.eu\"]);a.push([\"trackEvents\"]);a.push([\"detectChanges\"]);window._thq=a;a=document.createElement(\"script\");a.type=\"text/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https://\":\"http://\")+\"offer.slgnt.eu/386fe956b6db491a9d2fb46ea57d3efc/da4b7a2aa25c48.js?v=e65dcf1ee6918bfa405a6a2507792e1b\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}();",t}();e.Constants=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConsoleLogger=void 0;var i=function(){function t(){}return t.prototype.info=function(t){console.info(t)},t.prototype.warn=function(t){console.warn(t)},t.prototype.error=function(t){console.error(t)},t.prototype.debug=function(t){!0===this.debugEnabled&&console.log(t)},t}();e.ConsoleLogger=i}]);