const checkDuplicateUsernameOrEmail = require('./checkDuplicateUsernameOrEmail');
const verifyJwt = require('./verifyJwt');
const verifyAdmin = require('./verifyAdmin');

module.exports = {
  checkDuplicateUsernameOrEmail,
  verifyJwt,
  verifyAdmin
};
