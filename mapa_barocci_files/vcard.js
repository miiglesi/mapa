!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=876)}({876:function(t,e,n){var r=iAdvize.forwardOperatorDataCallback||function(){},i=n(877)(r),o=n(878)(i);n(879)(i,o).eventListeners()},877:function(t,e,n){"use strict";var r=iAdvize.$;t.exports=function(t){var e=[];function n(n){var i=e;i.push({id:n}),function(t){var e=iAdvize.chaturl+"rpc/vcard.php";return r.ajax({type:"GET",contentType:"text/json; charset=utf-8",crossDomain:!0,url:e,data:{id:t,website_id:iAdvize.website_id},dataType:"jsonp"})}(n).done(function(e){var n,o,a=e.data.attributes;a.id=e.data.id,a.stats=(n=e.included,r.map(n,function(t){"operator_stats"===t.type&&(o={contactNumber:t.attributes.contactNumber,globalSatisfaction:Math.round(100*t.attributes.globalSatisfaction)})}),o),a.skills=function(t){var e=[];return r.map(t,function(t){"skill"===t.type&&e.push(t.attributes.name)}),e}(e.included),a.hasStatus=a.status?"":"emptyStatus",a.createdAt=function(t){var e,n=t,r=new Date(n.substr(0,4),n.substr(5,2)-1,n.substr(8,2),n.substr(11,2),n.substr(14,2),n.substr(17,2));if(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()){var i=navigator.language;e=r.toLocaleDateString(i)}else{var o=r.getMonth(),a=r.getDate(),u=r.getFullYear();e=a+"/"+o+"/"+u}return e}(a.createdAt),t(a),function(t,e){r.map(t,function(n,r){e.id===n.id&&(t[r]=e)})}(i,a)})}return{isOperatorInCollection:function(t){var i=e;if(i.length){var o=!1;r.map(i,function(e){t===e.id&&(o=!0)}),o||n(t)}else n(t)},getOperatorById:function(t){t=t;var n,i=e;return r.map(i,function(e){e&&t===e.id&&(n=e)}),n}}}},878:function(t,e,n){"use strict";var r=iAdvize.$;t.exports=function(t){iAdvize.T("EXPERTS_SINCE"),iAdvize.T("INTERESTS");return{elementHandler:function(){r(".idz_ope, .idz_opename").mouseenter(function(e){!function(e,n){e.stopPropagation();var i=r(n).parents(".idz_msg_operator"),o=i.data("operatorid");if(o){var a=t.getOperatorById(o);if(void 0!==a&&void 0!==a.roles&&"expert"===a.roles[0]){var u=iAdvize.Templates.buildVcard(a);(function(t){r("#idz_chatglobal").append(t)})(u=function(t,e){var n="";r.map(t,function(t,e){n+=e<2?"<span>"+t+"</span>":"<span>...</span>"});var i=r(e);return i.find("#idz_vcardInterestList").append(n),i}(a.skills,u)),function(t){r("#idz_vcard").css({top:t.top,left:t.left}).show()}(function(t){var e=r(t).offset(),n=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,i=window.scrollX||window.pageXOffset||document.documentElement.scrollTop,o=r("#idz_vcard"),a=o.height()/2.5,u=o.width()+37;return{top:e.top-n-a,left:e.left-i-u}}(i))}}}(e,this)}).mouseleave(function(t){!function(t){t.stopPropagation();var e=r("#idz_vcard")[0];e&&e.parentNode.removeChild(e)}(t)})},appendStylesheet:function(){var t=iAdvize.static_url+"css/widget/vcard.css";iAdvize.util.load_css(t)}}}},879:function(t,e,n){"use strict";var r=iAdvize.require("eventManager");iAdvize.$;t.exports=function(t,e){var n=t;return{eventListeners:function(){r.on("events.operatorMessageSent",function(t){var e=parseInt(t.id,10);n.isOperatorInCollection(e)}),r.on("events.operatorMessageAppended",function(){e.elementHandler()})}}}}});