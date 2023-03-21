'use strict';

const logger = require('../utils/logger');
const uuid = require('uuid');
const flightCollectionStore = require('../models/flightCollection-store');

const flightCollection = {
  index(request, response) {
    const flightCollectionId = request.params.id;
    logger.debug('flightCollection id = ' + flightCollectionId);
    const viewData = {
      title: 'Flight Collection',
      flightCollection: flightCollectionStore.getFlightCollection(flightCollectionId),
      flightCollection: flightCollectionStore.getFlightCollection(flightCollectionId),
    };
    logger.info('about to render', viewData.flightCollection);
    response.render('flightCollection', viewData);
  },
    deleteFlight(request, response) {
    const flightCollectionId = request.params.id;
    const flightId = request.params.flightid;
    logger.debug(`Deleting Flight ${flightId} from Flight Collection ${flightCollectionId}`);
    flightCollection.removeFlight(flightCollectionId, flightId);
    response.redirect('/flightCollection/' + flightCollectionId);
  },
    addFlight(request, response) {
    const flightCollectionId = request.params.id;
    const flightCollection = flightCollectionStore.getFlightCollection(flightCollectionId);
    const newFlight = {
      id: uuid(),
      flightNumber: request.body.flightNumber,
      origin: request.body.origin,
      destination: request.body.destination,
      airline: request.body.airline,
      pilot: request.body.pilot,
      duration: request.body.duration,
      departureTime: request.body.departureDate,
      departureTime: request.body.departureTime
    };
    flightCollectionStore.addFlight(flightCollectionId, newFlight);
    response.redirect('/flightCollection/' + flightCollectionId);
  },
  updateFlight(request, response) {
    const flightCollectionId = request.params.id;
    const flightId = request.params.songid;
    logger.debug("updating flight " + flightId);
    const updatedFlight = {
      flightNumber: request.body.title,
      origin: request.body.origin,
      destination: request.body.destination,
      airline: request.body.airline,
      pilot: request.body.pilot,
      duration: request.body.duration,
      departureDate: request.body.departureDate,
      departureTime: request.body.departureTime
    };
    flightCollectionStore.editFlight(flightCollectionId, flightId, updatedFlight);
    response.redirect('/flightCollection/' + flightCollectionId);
  }
};

module.exports = flightCollection;