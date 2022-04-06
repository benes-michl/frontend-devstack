# Beneš & Michl Frontend devstack

Frontend devstack is the basis of every Beneš & Michl web agency project. This repository is used for frontend developers. This devstack is a public repository. Your project based on this devstack must be private.

## Used technologies

* Bootstrap 5 as Frontend Framework
* Sass as preprocessor scripting language
* Webpack for Sass and ES6 compilation

## Our philosophy

- If a component already exists in Bootstrap 5, we don't make it from scratch, we modify the existing component. (https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- For creating custom components we respect the BEM method (http://getbem.com/introduction/)
- Every website is responsive. We respect the 'mobile first' method from the base of Boostrap 5.
- We use SVG format for all icons. We never use webfont.
- HTML and CSS are indented by 4 spaces. The .editorconfig file is used for this purpose.
- All pages are 100% valid (https://validator.w3.org/).
    Errors/warnings caused by external code (e.g. iframes with Google map etc.) are fine.
- Class names are not renamed "banner", "adv", "b4n3r", etc. Adblock may then evaluate them as advertising and hide them.
- Links pointing outside the web (e.g. social network icons) are directed to a new window.


## Browsers and devices
We only support the latest stable browser versions.
- For mobile devices this is Chrome, Firefox and Safari.
- For desktop devices we support Chrome, Firefox, Microsoft Edge, Opera and Safari.
- Internet Explorer is not supported.


## SEO friendly
- All content on the page must be accessible without using JavaScript.
- Each page contains just one H1 heading.
- All text is converted from graphic design to text.
- We do not switch the order of H1, H2, H3... (https://gsnedders.html5.org/outliner/)


## File structure

```
/
├── /front
│   ├── /dist (compiled CSS and JS)
│   │   ├── /main.css
│   │   └── /scripts.min.js
│   ├── /images
│   ├── /js (your JavaScript source files)
│   │   ├── /componenets
│   │   └── /main.js
│   ├── /html (your .html templates)
│   │   └── index.html
│   └── /scss (your Sass source files)
│       ├── /_core (variables & mixins)
│       ├── /componenets (prepared and your components)
│       ├── /layout
│       └── /main.scss
└── package.json
```

## Instalation
- Run the command ``npm install`` or ``yarn install`` to install dependencies.

The ``package.json`` file contains some dependencies that you don't need. They are there for use in our content management system.


## Developing

### Start of development
Run the command ``npm front:build:dev``.

### Watch
Command ``npm front:build:dev`` will automatically start tracking your .js and .scss files. This command will automatically start tracking your .js and .scss files. When the file is changed, it will start compiling to the 'dist' folder.

### Live Reload
Command ``npm front:build:dev`` automatically starts a 'live reload' on port 35729. There is javascript code at the end of the index.html file. If you do not want to use 'live reload', remove this code from index.html.

## Production build
Run the command ``npm front:build:prod``. This command compiles CSS and JS and minifies them into production form.

## SVG Icons

Very often icons need to be colored using CSS, so we use one of the following variants

### SVG Symbol / Use (recommended variant)
All icons from folder ``front/icons`` are automatically converted to SVG sprite ``/images/icons.svg``.

Example of using Instagram icon in code:
```
<svg class="icon">
    <use xlink:href="../images/icons.svg#instagram"></use>
</svg>
```

### Inline SVG

Example of using icon in code:
```
<svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M5,20.5A3.5,...
    </path>
</svg>
```

## Support for external coders
For technical questions, please contact us at eduard.stula@b-m.cz.
