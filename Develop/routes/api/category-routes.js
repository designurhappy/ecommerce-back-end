const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // DONE find all categories
  // DONE be sure to include its associated Products
  Post.findAll({
    where: {
      category: req.params.category
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.get('/:id', (req, res) => {
  // DONE find one category by its `id` value
  // DONE be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
 
});

router.post('/', (req, res) => {
  // DONE create a new category
  console.log(req.body);
  Category.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.put('/:id', (req, res) => {
  // DONE update a category by its `id` value
  Category.update(
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
  ).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.delete('/:id', (req, res) => {
  // DONE delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

module.exports = router;
