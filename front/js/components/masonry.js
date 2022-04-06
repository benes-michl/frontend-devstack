import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

var grid = document.querySelector('.card-masonry');
if (grid) {
  var iso = new Isotope( grid, {
    itemSelector: '.col',
    percentPosition: true,
    masonry: {
      columnWidth: '.col-sizer',
      horizontalOrder: true
    }
  });

  imagesLoaded(grid).on('done', function() {
    // dirty fix pro nacteni fontu, lepe pouzit font loader
    setTimeout(refresh, 3000);
  });

  var refresh = function() {
    iso.layout();
  };
}
