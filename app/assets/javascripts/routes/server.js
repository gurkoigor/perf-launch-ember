PerfLaunchEmber.ServerRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('server', params.id);
    }
});