PerfLaunchEmber.NewServerRoute = Ember.Route.extend({
    //setupController: function(controller) {
    //    controller.set('fields', {})
    //}

    actions: {
        createServer: function (params) {
            var self = this;
            var server = this.store.createRecord('server', {url: params.url, status: 'new'});

            server.save().then(function () {
                self.transitionToRoute('servers');
            });
        }
    }
});