import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['bandId'],

  bandId: null,

  favoriteBand: Ember.computed('bandId', function() {
    return this.get('bands').findBy('id', this.get('bandId'));
  }),

  bands: [
    Ember.Object.create({ id: "1", name: 'Pearl Jam', formedIn: 1990 }),
    Ember.Object.create({ id: "2", name: 'Tool', formedIn: 1991 }),
    Ember.Object.create({ id: "3", name: 'Long Distance Calling', formedIn: 2003 }),
    Ember.Object.create({ id: "4", name: 'Led Zeppelin', formedIn: 1970 })
  ]
});
