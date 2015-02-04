/*! jQuery UI - v1.10.3 - 2013-09-16
* http://jqueryui.com
* Includes: jquery.ui.widget.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(t,e){var i=0,n=Array.prototype.slice,s=t.cleanData;t.cleanData=function(e){for(var i,n=0;null!=(i=e[n]);n++)try{t(i).triggerHandler("remove")}catch(a){}s(e)},t.widget=function(i,n,s){var a,r,o,u,l={},h=i.split(".")[0];i=i.split(".")[1],a=h+"-"+i,s||(s=n,n=t.Widget),t.expr[":"][a.toLowerCase()]=function(e){return!!t.data(e,a)},t[h]=t[h]||{},r=t[h][i],o=t[h][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new o(t,i)},t.extend(o,r,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),u=new n,u.options=t.widget.extend({},u.options),t.each(s,function(i,s){return t.isFunction(s)?(l[i]=function(){var t=function(){return n.prototype[i].apply(this,arguments)},e=function(t){return n.prototype[i].apply(this,t)};return function(){var i,n=this._super,a=this._superApply;return this._super=t,this._superApply=e,i=s.apply(this,arguments),this._super=n,this._superApply=a,i}}(),e):(l[i]=s,e)}),o.prototype=t.widget.extend(u,{widgetEventPrefix:r?u.widgetEventPrefix:i},l,{constructor:o,namespace:h,widgetName:i,widgetFullName:a}),r?(t.each(r._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,o,i._proto)}),delete r._childConstructors):n._childConstructors.push(o),t.widget.bridge(i,o)},t.widget.extend=function(i){for(var s,a,r=n.call(arguments,1),o=0,u=r.length;u>o;o++)for(s in r[o])a=r[o][s],r[o].hasOwnProperty(s)&&a!==e&&(i[s]=t.isPlainObject(a)?t.isPlainObject(i[s])?t.widget.extend({},i[s],a):t.widget.extend({},a):a);return i},t.widget.bridge=function(i,s){var a=s.prototype.widgetFullName||i;t.fn[i]=function(r){var o="string"==typeof r,u=n.call(arguments,1),l=this;return r=!o&&u.length?t.widget.extend.apply(null,[r].concat(u)):r,this.each(o?function(){var n,s=t.data(this,a);return s?t.isFunction(s[r])&&"_"!==r.charAt(0)?(n=s[r].apply(s,u),n!==s&&n!==e?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):e):t.error("no such method '"+r+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}:function(){var e=t.data(this,a);e?e.option(r||{})._init():t.data(this,a,new s(r,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,n){var s,a,r,o=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(o={},s=i.split("."),i=s.shift(),s.length){for(a=o[i]=t.widget.extend({},this.options[i]),r=0;s.length-1>r;r++)a[s[r]]=a[s[r]]||{},a=a[s[r]];if(i=s.pop(),n===e)return a[i]===e?null:a[i];a[i]=n}else{if(n===e)return this.options[i]===e?null:this.options[i];o[i]=n}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,s){var a,r=this;"boolean"!=typeof i&&(s=n,n=i,i=!1),s?(n=a=t(n),this.bindings=this.bindings.add(n)):(s=n,n=this.element,a=this.widget()),t.each(s,function(s,o){function u(){return i||r.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):e}"string"!=typeof o&&(u.guid=o.guid=o.guid||u.guid||t.guid++);var l=s.match(/^(\w+)\s*(.*)$/),h=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,h,u):n.bind(h,u)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var s,a,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(s in a)s in i||(i[s]=a[s]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,s,a){"string"==typeof s&&(s={effect:s});var r,o=s?s===!0||"number"==typeof s?i:s.effect||i:e;s=s||{},"number"==typeof s&&(s={duration:s}),r=!t.isEmptyObject(s),s.complete=a,s.delay&&n.delay(s.delay),r&&t.effects&&t.effects.effect[o]?n[e](s):o!==e&&n[o]?n[o](s.duration,s.easing,a):n.queue(function(i){t(this)[e](),a&&a.call(n[0]),i()})}})}(jQuery);