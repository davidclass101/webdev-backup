'use strict';

// import all required modules
const logger = require('../utils/logger');
const flightCollectionStore = require('../models/flightCollection-store.js');

// create start object
const start = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // app statistics calculations

    const flightCollection = flightCollectionStore.getAllFlightCollections();

    let numFlightCollections = flightCollection.length;

    let numFlights = 0;

    for (let item of flightCollection) {
        numFlights += item.flight.length;
    }
    
    // display confirmation message in log
    logger.info('start rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
        title: 'Welcome to the Flight Collections App!',
        totalFlightCollections: numFlightCollections,
        totalFlights: numFlights,
    };
    
    // render the start view and pass through the data
    response.render('start', viewData);
  },
};

// export the start module
module.exports = start;