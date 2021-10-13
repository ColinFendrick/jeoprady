const db = require('../models');
const AppUser = db.AppUsers;

module.exports = async (req, res, next) => {
  try {
    const appUser = await AppUser.findById(req.userId);

    if (!appUser)
      return res.status(404).send({
        message: 'Cannot find your username. Please sign out and back in.'
      });

    if (!appUser.admin)
      return res.status(500).send({
        message: 'You are unauthorized for this route'
      });

    next();
  } catch (e) {
    res.status(500).send({
      message: `Something when wrong trying to verify admin status: ${e}`
    });
  }
};
