// file: middlewares/markdown-it-render.js - created at 2015-06-22, 01:45
function markdownItRenderHandler(req, res, next) {
  // start here with markdown-it-render.js
  var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();
  var result = md.render('# markdown-it rulezz!');

  debug(result);
  next();
}
module.exports = exports = markdownItRenderHandler;
