'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const flightCollection = require('./controllers/flightCollection.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

router.get('/flightCollection/:id', flightCollection.index);

router.get('/flightCollection/:id/deleteFlight/:flightid', flightCollection.deleteFlight);
router.post('/flightCollection/:id/addFlight', flightCollection.addFlight);
router.post('/flightCollection/:id/updateFlight/:flightid', flightCollection.updateFlight);

router.get('/dashboard/deleteFlightCollection/:id', dashboard.deleteflightCollection);
router.post('/dashboard/addFlightCollection', dashboard.addFlightCollection);

// export router module
module.exports = router;

