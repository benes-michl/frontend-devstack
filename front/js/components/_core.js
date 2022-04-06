import 'bootstrap';
import svg4everybody from 'svg4everybody';
import '@fancyapps/fancybox';
import naja from 'naja';
import lazyloading from "./lazyloading";

window.$ = window.jQuery = $;

$.fancybox.defaults.hash = false;
svg4everybody();
document.addEventListener('DOMContentLoaded', naja.initialize.bind(naja));
lazyloading();

naja.addEventListener('complete', () => {
  lazyloading();
  var $calendar = $('#calendar-modal');
  $calendar.removeClass('fade');
  $('.modal-backdrop').remove();
  $calendar.modal('handleUpdate');
  $calendar.modal('show');
});

// polyfill pro hoverintent a mmenu
if (typeof Object.assign != 'function') {
  Object.assign = function (target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}
