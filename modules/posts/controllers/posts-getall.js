// file: controllers/posts-getall.js - created at 2015-06-27, 01:15
function postsGetallHandler(req, res) {
  debug('postsGetall Handler controller');  
  res.json(res.locals.out);
}
module.exports = exports = postsGetallHandler;
