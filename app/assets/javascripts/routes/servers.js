PerfLaunchEmber.ServersRoute = Ember.Route.extend({
    model: function() {
        return this.store.findAll('server');
    }
});