import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.newRecord()
	},
	actions:{
		onSave() {
         //this.get('currentModel').save();
         this.transitionTo('student');
		}
	},
   
    newRecord() {
    	return this.store.createRecord('student',{
    		rollnumber:'',
    		firstname:'',
    		lastname:''
    	});
    }
});
