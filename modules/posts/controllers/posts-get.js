// file: controllers/posts-get.js - created at 2015-06-27, 02:18
function postsGetHandler(req, res) {
  debug('postsGetHandler Handler controller');
  res.json(res.locals.out);
}
module.exports = exports = postsGetHandler;
