console.log('here');
var listModel = Backbone.Model.extend({
    defaults: {
        'title': 'Boiled Cat',
        'description':  "eww eq qw eqwfvxcxcvxcv eqw qw eqw eqw",
        'imageSrc':'img/cat_2.jpg',
        'price': 543
    }
});

var listCollection = Backbone.Collection.extend({
    model: listModel
});



var catCollection = new listCollection([
    {
        'title': 'Boiled Cat',
        'description':  "eww eq qw eqwfvxcxcvxcv eqw qw eqw eqw",
        'imageSrc':'img/cat_2.jpg',
        'price': 543
    },
    {
        'title': 'Fryed Cat',
        'description':  "eww equiouououiouiouiw eqw qw eqw eqw",
        'image':'img/cat_1.jpg',
        'price': 4
    },
    {
        'title': 'Fresh cat with mashrooms',
        'description':  "ewwvvbcvbbcvbcvbcvcvbqw eqw eqw qw eqw eqw",
        'imageSrc':'img/cat_1.jpg',
        'price': 7
    },
    {
        'title': 'Sweet cat under chocolate',
        'imageSrc':'img/cat_2.jpg',
        'description':  "werasdsdsdfdsfqw eqw eqw qw eqw eqw",
        'price': 776
    }
]);



var listView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    events: {
        "click .dro"       : "testClick"
    },
    el: '#list',
    template: $('#tpl-cat-detail').html(),
    render: function() {
        this.$el.html(doT.template(this.template, {
            cats: catCollection.toJSON()
        }));
    },
    testClick: function() {
        alert('testClick');
    }
});
