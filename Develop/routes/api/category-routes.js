const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // DONE find all categories
  // DONE be sure to include its associated Products
  Category.findAll({
    include: [Product],
  })
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // DONE find one category by its `id` value
  // DONE be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then((category) => {
    res.json(category);
  })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // DONE create a new category
  Category.create(req.body)
    .then((newCat) => {
      res.json(newCat);
    })
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // DONE update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((upCat) => {
      res.json(upCat);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete('/', (req, res) => {
  // DONE delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((upRow) => res.json(upRow))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
