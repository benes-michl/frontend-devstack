/* TinyMCE Lightbox img handler */

var lightboxElements = document.getElementsByClassName("lightbox");

for (var i = 0; i < lightboxElements.length; ++i) {
    var element = lightboxElements[i];
    var parent = element.parentNode;

    var img = element.cloneNode();
    img.classList.add("gallery__img");
    img.classList.add("lazy");

    var a = document.createElement('a');
    a.href = element.src.replace(/-\d*-\d*-\./, '---.');
    a.className = "gallery__link";
    a.dataset.fancybox = "gallery";
    a.dataset.caption = "";
    a.appendChild(img);

    var newElement = document.createElement('div');
    newElement.classList.add("gallery__item--lightbox");
    newElement.appendChild(a);

    parent.insertBefore(newElement, element);
    parent.removeChild(element);
}
