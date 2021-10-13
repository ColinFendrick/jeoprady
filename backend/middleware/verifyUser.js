const models = require('../models');
const AppUser = models.AppUsers;

module.exports = async (req, res, next) => {
  const appUser = await AppUser.findById(req.userId);

  if (!appUser)
    return res.status(404).send({
      message: 'Cannot find your username. Please sign out and back in.'
    });

  req.appUser = appUser;
  next();
};
