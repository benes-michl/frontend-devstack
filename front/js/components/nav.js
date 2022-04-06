require('mmenu-light/dist/mmenu-light.polyfills');
import MmenuLight from 'mmenu-light';

if (document.querySelector('#nav-mmenu')) {
    document.addEventListener(
        'DOMContentLoaded', () => {
            const menu = new MmenuLight(
                document.querySelector('#nav-mmenu'),
                '(max-width: 991px)'
            );

            const navigator = menu.navigation({ // eslint-disable-line
                selected: 'active'
            });
            const drawer = menu.offcanvas({
                position: 'right'
            });

            document.querySelector('.navbar-toggler')
                .addEventListener('click', (evnt) => {
                    evnt.preventDefault();
                    drawer.open();
                });

            const btnClose = document.createElement("div");
            btnClose.classList.add('close');
            document.getElementById("nav-mmenu").appendChild(btnClose);

            document.querySelector('#nav-mmenu .close')
                .addEventListener('click', (evnt) => {
                    evnt.preventDefault();
                    drawer.close();
                });
        }
    );
}

import hoverintent from 'hoverintent';

var _hoverTriggers = document.querySelectorAll('.nav-item--sub');

Array.prototype.forEach.call(_hoverTriggers, function (el) {
    hoverintent(el,
        function () {
            el.classList.add('hover');
        },
        function () {
            el.classList.remove('hover');
        }
    ).options({
        timeout: 100
    });
});
