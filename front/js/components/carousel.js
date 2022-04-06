var Flickity = require('flickity');
require('flickity-imagesloaded');

Flickity.prototype._createResizeClass = function() {
  this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');
var resize = Flickity.prototype.resize;

Flickity.prototype.resize = function() {
  this.element.classList.remove('flickity-resize');
  resize.call(this);
  this.element.classList.add('flickity-resize');
};

if ($('.carousel').length > 0) {
  var galleryElems = document.querySelectorAll('.carousel');

  for ( var i=0, len = galleryElems.length; i < len; i++ ) {
    var galleryElem = galleryElems[i];

    var flkty = new Flickity(galleryElem, {
      imagesLoaded: true,
      wrapAround: true,
      cellAlign: 'left',
      pageDots: true,
      prevNextButtons: true
    });
    flkty;
  }
}
