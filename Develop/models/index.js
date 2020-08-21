// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// DONE Products belongsTo Category
//Product.belongsTo(Category);
// DONE Categories have many Products
//Category.hasMany(Product);
// DONE Products belongToMany Tags (through ProductTag)
//Product.belongsToMany(ProductTag);
// DONE Tags belongToMany Products (through ProductTag)
//Tag.belongsToMany(ProductTag);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
