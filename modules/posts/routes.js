var express = require('express');
var router = express.Router();
var index = require('./index');

router
  .post('/',index.MiddlePostsPost,index.CtrlPostsPost) 
  .get('/',index.MiddlePostsGetAll,index.CtrlPostsGetAll)
  .get('/fulltext/:text',index.MiddlePostsGetText,index.CtrlPostsGetText)   
  .get('/:id',index.MiddlePostsGet,index.CtrlPostsGet)
  .put('/:id',index.MiddlePostsUpdate,index.CtrlPostsUpdate)
  .delete('/:id',index.MiddlePostsDelete,index.CtrlPostsDelete);

module.exports = exports = router;