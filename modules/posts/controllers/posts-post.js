// file: controllers/posts-post.js - created at 2015-06-27, 12:27
function postsPostHandler(req, res) {
  debug('postsPostHandler Handler controller');
  res.json(res.locals.out);
}
module.exports = exports = postsPostHandler;
