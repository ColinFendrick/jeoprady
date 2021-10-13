const models = require('../models');
const AppUser = models.AppUsers;

// exports.addPlayer =
// exports.removePlayer =

exports.updatePlayerScore = async (req, res) => {
  try {
    const appUser = await AppUser.findById(req.userId);

    if (!appUser)
      return res.status(404).send({
        message: 'Cannot find your username. Please sign out and back in.'
      });

    const ix = appUser.players.findIndex(p => p.username === req.body.username);
    const player = appUser.players[ix];
    const updatedPlayer = { ...player, score: player.score + (req.body.correct ? 1 : -1) };
    appUser.players.splice(ix, 1, updatedPlayer);

    await appUser.save();

    res.send({
      data: appUser,
      message: `${req.body.username} answered the question ${req.body.correct ? 'correctly' : 'incorrectly'}.`
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
