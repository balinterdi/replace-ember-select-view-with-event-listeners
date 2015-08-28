import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
	favoriteBand: null,
  bands: ['Pearl Jam', 'Tool', 'Long Distance Calling', 'Led Zeppelin'],

  actions: {
    setFavoriteBand(band) {
      this.set('favoriteBand', band);
    }
  }
});
