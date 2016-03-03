// For more information see: http://emberjs.com/guides/routing/

PerfLaunchEmber.Router.map(function() {
    this.route('servers', { path: '/' }, function () {

        this.route('server', { path: '/servers/:id' }, function () {
            this.route('edit')
        });

        this.route('new');
    });
});
