/* const { body } = require('express-validator');

const create = () => {
  body('title')
    .withMessage('is required')
    .isString()
    .isLength({ min: 5, max: 25 });
  body('description')
    .withMessage('is required')
    .isString()
    .isLength({ min: 5, max: 250 });
  body('imageUrl').withMessage('is required').isString().isURL();
  body('userId').withMessage('is required').isString();
  body('price').isNumeric().withMessage('is required');
};

module.exports = {
  create,
};
*/
