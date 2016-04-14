import Ember from 'ember';

export function eq([value, anotherValue]) {
  return value === anotherValue;
}

export default Ember.Helper.helper(eq);
