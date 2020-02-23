const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const item_controller = require('../controllers/item.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', item_controller.items_list);
router.post('/add', item_controller.item_create);
router.get('/:id', item_controller.item_details);
router.post('/:id/update', item_controller.update_item);
router.get('/:id/delete', item_controller.delete_item);

module.exports = router;