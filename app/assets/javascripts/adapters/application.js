// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
DS.RESTAdapter.reopen({
    namespace: 'api/v1'
});

PerfLaunchEmber.Adapter = DS.RESTAdapter.extend({
    serializer: "PerfLaunchEmber.ServerSerializer"
});

PerfLaunchEmber.Store = DS.Store.extend({});
PerfLaunchEmber.ApplicationAdapter = DS.ActiveModelAdapter.extend({
});
