/* Alli AI widget for docs.edisglobal.com */
(function (w, d, s, o, f, js, fjs) {
  w['AlliJSWidget'] = o;
  w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments); };
  js = d.createElement(s); fjs = d.getElementsByTagName(s)[0];
  js.id = o; js.src = 'https://static.alliai.com/widget/v1.js'; js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'alli'));

alli('init', 'site_99Zt99CwRQxdUe9x');   // ← keep your site key
alli('optimize', 'all');