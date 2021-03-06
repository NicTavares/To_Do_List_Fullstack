const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

//route GET api/items
//get ALL items
//access public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items))
})
// route POST api/items
//creates an item
router.post('/', (req, res) => {
    const newItem = new Item ({
        name: req.body.name,
        description: req.body.description
    });
    newItem.save().then(item => res.json(item));
});
//delete and item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
        .then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success: false}))
})


module.exports = router;