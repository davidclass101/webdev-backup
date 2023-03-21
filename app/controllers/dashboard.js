'use strict';

// import all required modules
const logger = require('../utils/logger');
const uuid = require('uuid');

const flightCollectionStore = require('../models/flightCollection-store.js');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Flight Collection App Dashboard',
      flightCollections: flightCollectionStore.getAllFlightCollections(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.flightCollections);
    response.render('dashboard', viewData);
  },
  
  deleteFlightCollection(request, response) {
    const flightCollectionId = request.params.id;
    logger.debug(`Deleting Flight Collection ${flightCollectionId}`);
    flightCollectionStore.removeFlightCollection(flightCollectionId);
    response.redirect('/dashboard');
  },
  
  addflightCollection(request, response) {
    const newFlightCollection = {
      id: uuid(),
      title: request.body.title,
      duration: request.body.duration,
      songs: [],
    };
    flightCollectionStore.addFlightCollection(newFlightCollection);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;