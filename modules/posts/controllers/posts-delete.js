// file: controllers/posts-delete.js - created at 2015-06-27, 03:41
function postsDeleteHandler(req, res) {
  debug('postsDeleteHandler Handler controller');
  res.send(res.locals.out);
}
module.exports = exports = postsDeleteHandler;
