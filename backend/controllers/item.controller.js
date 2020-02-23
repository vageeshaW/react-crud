const Item = require('../models/item.model');

/**
 * Item Create Function.
 */
exports.item_create = function (req, res) {
    let item = new Item(
        {
            name: req.body.name,
            description: req.body.description,

        }
    );
     item.save()
        .then(item => {
            res.status(200).json({'item': 'item added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new item failed');
        });
};

/**
 * Get Item List Function.
 */
exports.items_list = function (req, res) {
	Item.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
};

/**
 * Get Item Detail Function.
 */
exports.item_details = function (req, res) {
	let id = req.params.id;
    Item.findById(id, function(err, item) {
        res.json(item);
    });
};

/**
 * Item update Function.
 */
exports.update_item = function (req, res) {
	 Item.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
        	todo.name = req.body.name;
            todo.description = req.body.description;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};

/**
 * Item delete Function.
 */
exports.delete_item = function (req, res) {
	let id = req.params.id;
    Item.findByIdAndRemove(id, function(err, item) {
    if (!item)
        res.status(404).send("data is not found");
    else
        res.json('Deleted successfully!');
});};
