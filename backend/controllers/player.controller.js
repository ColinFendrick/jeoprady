exports.addPlayer = async (req, res) => {
  try {
    const appUser = req.appUser;

    appUser.players.push({
      username: req.body.username,
      score: 0
    });

    await appUser.save();

    res.send({
      data: appUser,
      message: `Added ${req.body.username}`
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};
exports.removePlayer = async (req, res) => {
  try {
    const appUser = req.appUser;

    const ix = appUser.players.findIndex(p => p.username === req.body.username);

    appUser.questions.splice(ix, 1);

    await appUser.save();

    res.send({
      data: appUser,
      message: `Successfully deleted ${req.body.username}`
    });
  } catch (e) {
    res.status(500).send({
      message: e.message
    });
  }
};

exports.updatePlayerScore = async (req, res) => {
  try {
    const appUser = req.appUser;

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
