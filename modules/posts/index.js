// file: modules/posts.js - created at 2015-06-27, 10:21
exports.CtrlPostsGetAll = require('./controllers/posts-getall');
exports.CtrlPostsGetText = require('./controllers/posts-getText');
exports.CtrlPostsPost = require('./controllers/posts-post');
exports.CtrlPostsGet = require('./controllers/posts-get');
exports.CtrlPostsDelete = require('./controllers/posts-delete');
exports.CtrlPostsUpdate = require('./controllers/posts-update');


exports.MiddlePostsGetAll = require('./middlewares/posts-getall');
exports.MiddlePostsGetText = require('./middlewares/posts-getText');
exports.MiddlePostsPost = require('./middlewares/posts-post');
exports.MiddlePostsGet = require('./middlewares/posts-get');
exports.MiddlePostsDelete = require('./middlewares/posts-delete.js');
exports.MiddlePostsUpdate = require('./middlewares/posts-update');