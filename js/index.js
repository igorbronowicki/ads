console.log('here');
var AdModel = Backbone.Model.extend({
    defaults: {
        'title': 'ololo',
        "description":  "caesar salad",
        'price': 44
    }
});

var AddCollection = Backbone.Collection.extend({
    model: AdModel
});



var addCollection = new AddCollection([
    {
        'title': 'Boiled Cat',
        'description':  "eww eq qw eqwfvxcxcvxcv eqw qw eqw eqw",
        'imageSrc':'',
        'price': 543
    },
    {
        'title': 'Fryed Cat',
        'description':  "eww equiouououiouiouiw eqw qw eqw eqw",
        'image':'',
        'price': 4
    },
    {
        'title': 'Fresh cat with mashrooms',
        'description':  "ewwvvbcvbbcvbcvbcvcvbqw eqw eqw qw eqw eqw",
        'imageSrc':'',
        'price': 7
    },
    {
        'title': 'Sweet cat under chocolate',
        'imageSrc':'',
        'description':  "werasdsdsdfdsfqw eqw eqw qw eqw eqw",
        'price': 776
    }
]);



var AdsView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click .dro"       : "testClick"
    },
    el: 'body',
    template: '{{#ads}}<p class="xxx">{{title}}<br>{{description}}<br>{{price}}</p>{{/ads}}',
    render: function() {
        this.$el.html(Mustache.render(this.template, {
            ads: addCollection.toJSON()
        }));
    },
    testClick: function() {
        alert('testClick');
    }
});

AdsView.init();