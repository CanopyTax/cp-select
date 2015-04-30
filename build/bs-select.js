/*!
 * bs-select
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.2.3
 */
!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return e[o].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=(n(1),n(2));o.module("bs-select",[]),n(3)},function(e,t,n){e.exports=$},function(e,t,n){e.exports=angular},function(e,t,n){"use strict";var o=n(2),s=n(4),i=n(5);n(6),o.module("bs-select").directive("bsSelect",["$timeout",function(e){return{restrict:"E",transclude:!0,scope:{collection:"="},require:"ng-Model",template:i,link:function(e,t,n,o){function i(t){u+=String.fromCharCode(t);var n=r(u);n>-1&&(e.selectedIndex=n,e.showDialog?a(e.collection[e.selectedIndex]):e.updateModel(e.collection[e.selectedIndex])),d=setTimeout(function(){u=""},1e3)}function l(t){if(!t)return-1;var n=s.has(t,"value");return s.findIndex(e.collection,function(e){return n?t.key===e.key:t===e})}function r(t){return t=t.toLowerCase(),s.findIndex(e.collection,function(e){return 0===c(e).toLowerCase().indexOf(t)})}function c(e){return e.value||e}function a(n){var o=l(n),s=e.collection.length-o;o>5&&6>s?(e.dialogStyle={top:-222-36*(5-s)+"px"},setTimeout(function(){t.find(".bs-select__menu").scrollTop(36*o-180)})):o>5?(e.dialogStyle={top:"-198px"},setTimeout(function(){t.find(".bs-select__menu").scrollTop(36*o-180)})):e.dialogStyle={top:2+(36*o*-1-20)+"px"}}var d,u="";e.showDialog=!1,e.selectedIndex=null,o.$render=function(){var e=o.$viewValue?c(o.$viewValue):"";t.find(".bs-select__selected").text(e)},e.updateModel=function(n){o.$setViewValue(n),o.$render(),e.closeDialog(),setTimeout(function(){t.find("input").focus()})},e.focusSelect=function(){t.find(".bs-select").addClass("+focus")},n.$observe("disabled",function(){e.disabled=s.has(n,"disabled")}),e.keyDown=function(t){var n=t.which,r=o.$viewValue;9!==n&&t.preventDefault(),13===n?e.updateModel(e.collection[e.selectedIndex]):38===n?(e.showDialog=!0,e.selectedIndex=s.isNull(e.selectedIndex)?l(r):e.selectedIndex-1,a(e.collection[e.selectedIndex])):40===n?(e.showDialog=!0,e.selectedIndex=s.isNull(e.selectedIndex)?l(r):e.selectedIndex+1,a(e.collection[e.selectedIndex])):27===n?e.closeDialog():i(t.which)},e.toggleDialog=function(){var n=o.$viewValue;e.showDialog?(e.showDialog=!1,t.find("input").focus()):(e.selectedIndex=null,n&&a(n),e.showDialog=!0,t.find("input").focus())},e.onBlur=function(n){t.find(".bs-select").removeClass("+focus"),e.closeDialog()},e.closeDialog=function(t){e.showDialog=!1}}}}])},function(e,t,n){e.exports=_},function(e,t,n){e.exports='<input class=bs-select__hidden-input ng-disabled=disabled ng-focus=focusSelect() ng-blur=onBlur($event) ng-keydown=keyDown($event)><div class=bs-select ng-click="!disabled && toggleDialog()" ng-class="{\'+disabled\': disabled}"><div class=bs-select__selected></div><div class=bs-select__icon></div></div><ul ng-style=dialogStyle class="bs-select__menu bss-dropdown-menu" role=menu ng-if=showDialog><li ng-mousedown=updateModel(item) ng-repeat="item in ::collection" ng-class="{\'+selected\': (selectedIndex === $index)}"><a>{{item.value ? (item.value) : (item)}}</a></li></ul>'},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.id,o,""]]);n(8)(o,{})},function(e,t,n){t=e.exports=n(9)(),t.push([e.id,"bs-select{position:relative;height:32px;font-size:12px}.bs-select{border-radius:2px;box-shadow:0 1px 4px 0 rgba(0,0,0,.26);display:inline-block;padding:8px 14px;min-width:140px;color:#AFAFAF;background-color:#fff;cursor:pointer;width:100%;height:32px}.bss-has-error .bs-select{box-shadow:0 1px 4px 0 #FE996C}.bs-select.\\+disabled{cursor:not-allowed;background-color:#F9F9F9;opacity:1;border:1px dashed #CFCFCF}.bs-select.\\+focus{box-shadow:0 0 0 2px rgba(76,175,80,.3)}.bs-select__selected{width:calc(100% - 15px);display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.bs-select__icon{display:inline-block;border-color:#AFAFAF transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;float:right;position:relative;top:6px}bs-select .bs-select__menu{display:block;max-height:400px;overflow:auto;width:100%;position:absolute;font-size:12px}bs-select .bs-select__menu li{height:36px!important}bs-select .bs-select__menu li.\\+selected>a{color:#333;text-decoration:none;background-color:#f7f7f7}.bs-select__hidden-input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}",""])},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],s=d[o.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](o.parts[i]);for(;i<o.parts.length;i++)s.parts.push(l(o.parts[i],t))}else{for(var r=[],i=0;i<o.parts.length;i++)r.push(l(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:r}}}}function s(e){for(var t=[],n={},o=0;o<e.length;o++){var s=e[o],i=s[0],l=s[1],r=s[2],c=s[3],a={css:l,media:r,sourceMap:c};n[i]?n[i].parts.push(a):t.push(n[i]={id:i,parts:[a]})}return t}function i(){var e=document.createElement("style"),t=p();return e.type="text/css",t.appendChild(e),e}function l(e,t){var n,o,s;if(t.singleton){var l=g++;n=h||(h=i()),o=c.bind(null,n,l,!1),s=c.bind(null,n,l,!0)}else n=i(),o=a.bind(null,n),s=function(){n.parentNode.removeChild(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else s()}}function r(e,t,n){var o=["/** >>"+t+" **/","/** "+t+"<< **/"],s=e.lastIndexOf(o[0]),i=n?o[0]+n+o[1]:"";if(e.lastIndexOf(o[0])>=0){var l=e.lastIndexOf(o[1])+o[1].length;return e.slice(0,s)+i+e.slice(l)}return e+i}function c(e,t,n,o){var s=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=r(e.styleSheet.cssText,t,s);else{var i=document.createTextNode(s),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function a(e,t){var n=t.css,o=t.media,s=t.sourceMap;if(s&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(s))+" */",n='@import url("data:text/css;base64,'+btoa(n)+'")'}catch(i){}if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=u(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),p=u(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f());var n=s(e);return o(n,t),function(e){for(var i=[],l=0;l<n.length;l++){var r=n[l],c=d[r.id];c.refs--,i.push(c)}if(e){var a=s(e);o(a,t)}for(var l=0;l<i.length;l++){var c=i[l];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}}},function(e,t,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}}]);