const router = require('express').Router();

const { verifyJwt } = require('../middleware');
const player = require('../controllers/player.controller');

const playerRoutes = app => {
  router.post('/player',
    verifyJwt,
    player.addPlayer
  );

  router.delete('/player',
    verifyJwt,
    player.removePlayer
  );

  router.post('/score',
    verifyJwt,
    player.updatePlayerScore
  );

  app.use(router);
};

module.exports = playerRoutes;
