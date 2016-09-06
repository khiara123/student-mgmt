import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findAll('student');
    },

    actions: {
      onDelete(studentId) {
          this.store.queryRecord('student', {
            id: studentId
          }).then(function (student) {
            student.destroyRecord(); // => DELETE to /student/2
          });
        },
        onAddNew() {
          this.transitionTo('student.new');
        }
    }
});

