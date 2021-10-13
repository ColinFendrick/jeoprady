const checkDuplicateUsernameOrEmail = require('./checkDuplicateUsernameOrEmail');
const verifyJwt = require('./verifyJwt');
const verifyAdmin = require('./verifyAdmin');
const verifyUser = require('./verifyUser');

module.exports = {
  checkDuplicateUsernameOrEmail,
  verifyJwt,
  verifyAdmin,
  verifyUser
};
