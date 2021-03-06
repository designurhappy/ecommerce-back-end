const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tags) => res.status(200).json(tags))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // DONE find a single tag by its `id`
  // DONE be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
      model: Product,
      through: ProductTag,
     },
   ],
})
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

router.post('/', (req, res) => {
  // DONE create a new tag
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

router.put('/:id', (req, res) => {
  // DONE update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((upTag) => {
    res.json(upTag);
  })
  .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // DONE delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(404).json(err));
});

module.exports = router;
