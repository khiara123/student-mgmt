import DS from 'ember-data';

export default DS.Model.extend({
   rollnumber: DS.attr('string'),
   firstname: DS.attr('string'),
   lastname: DS.attr('string')
});
