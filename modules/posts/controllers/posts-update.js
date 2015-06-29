// file: controllers/posts-update.js - created at 2015-06-27, 03:48
function postsUpdateHandler(req, res) {
  debug('postsUpdateHandler Handler controller');
  res.sendStatus(202).json(res.locals.out);
}
module.exports = exports = postsUpdateHandler;
