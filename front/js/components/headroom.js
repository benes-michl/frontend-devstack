import Headroom from 'headroom.js';
var myElement = document.querySelector('.head');
var headroom  = new Headroom(myElement, {
  'offset': 100,
  'tolerance': 5
});
// initialise
headroom.init();
