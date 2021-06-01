const { Router } = require("express");
const router = Router();
const ctrl = require("./posts.ctrl");
const paginate = require('express-paginate');



// API
router.post("/", ctrl.post_posts);

router.put("/:id", ctrl.put_posts_update);

router.delete("/:id", ctrl.delete_posts_delete);

router.post("/tag", ctrl.post_posts_tag);

router.delete("/tag/:post_id/:tag_id", ctrl.delete_posts_tag);

router.get('/', paginate.middleware(5 , 5) , ctrl.get_posts_list );

router.get('/search', ctrl.get_posts_search);


module.exports = router;
