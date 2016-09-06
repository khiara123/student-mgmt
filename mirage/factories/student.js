import {
  Factory
}
from 'ember-cli-mirage';

export default Factory.extend({
  data: [{
    type: 'students',
    id: 1,
    attributes: {
      rollnumber: 'A123',
      firstname: 'Ankit',
      lastname: 'Khaira'
    }

  }]
});

