import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	model: function(){ 
      return this.store.createRecord('user'); 
    },
    actions: {
      save: function(){
        return this.get('currentModel').save()
        .then(function(){
          alert("please continue");
        })
        .catch(function(e){
          alert("error");
        });
      }
    }	
});
