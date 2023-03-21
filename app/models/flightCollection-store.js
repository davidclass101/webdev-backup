"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const flightCollectionStore = {
  store: new JsonStore("./models/flightCollection-store.json", {
    Collection: [],
  }),
  collection: "flightCollection",

  getAllFlightCollections() {
    return this.store.findAll(this.collection);
  },

  getFlightCollection(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addFlightCollection(flightCollection) {
    this.store.add(this.collection, flightCollection);
  },

  removeFlightCollection(id) {
    const flightCollection = this.getFlightCollection(id);
    this.store.remove(this.collection, flightCollection);
  },

  removeAllFlightCollections() {
    this.store.removeAll(this.collection);
  },

  addFlight(id, song) {
    const flightCollection = this.getFlightCollection(id);
    flightCollection.flights.push(flight);
  },

  removeFlight(id, songId) {
    const flightCollection = this.getFlightCollection(id);
    const flights = flightCollection.flights;
    _.remove(flights, { id: flightId });
  },

  editFlight(id, flightId, updatedFlight) {
    const flightCollection = this.getFlightCollection(id);
    const flights = flightCollection.flights;
    const index = flights.findIndex((flight) => flight.id === flightId);
    flights[index].flightNumber = updatedFlight.flightNumber;
    flights[index].origin = updatedFlight.origin;
    flights[index].destination = updatedFlight.destination;
    flights[index].airline = updatedFlight.airline;
    flights[index].pilot = updatedFlight.pilot;
    flights[index].duration = updatedFlight.duration;
    flights[index].departureDate = updatedFlight.departureDate;
    flights[index].departureTime = updatedFlight.departureTime;
  },
};

module.exports = flightCollectionStore;
