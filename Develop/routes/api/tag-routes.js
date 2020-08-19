const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  User.findAll({
    attributes: {Tag, Product}
  });

  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // DONE find a single tag by its `id`
  // DONE be sure to include its associated Product data
  Tag.findOne({
    where: {
    id: req.params.id
  }
})
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No product found with this id' });
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
   });
});

router.post('/', (req, res) => {
  // DONE create a new tag
  Tag.create({
    text: req.body.text,
    complete: req.body.complete
  }).then(dbTag => {
    res.json(dbTag);
  });
});

router.put('/:id', (req, res) => {
  // DONE update a tag's name by its `id` value
  db.Tag.update(
    {
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbPost => {
    res.json(dbPost);
  });
});

router.delete('/:id', (req, res) => {
  // DONE delete on tag by its `id` value
  db.Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    res.json(dbTag);
  });
});

module.exports = router;
