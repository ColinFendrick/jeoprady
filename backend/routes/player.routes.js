const router = require('express').Router();

const { verifyJwt, verifyUser } = require('../middleware');
const player = require('../controllers/player.controller');

const playerRoutes = app => {
  router.post('/player',
    verifyJwt,
    verifyUser,
    player.addPlayer
  );

  router.delete('/player',
    verifyJwt,
    verifyUser,
    player.removePlayer
  );

  router.post('/score',
    verifyJwt,
    verifyUser,
    player.updatePlayerScore
  );

  app.use(router);
};

module.exports = playerRoutes;
