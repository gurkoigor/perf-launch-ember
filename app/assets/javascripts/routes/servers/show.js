PerfLaunchEmber.ShowServerRoute = Ember.Route.extend({
    model: function (params) {
        this.store.find('server', params.id)
    }
});