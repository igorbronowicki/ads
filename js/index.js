$(document).on('ready', function(){
    console.log('here');
    var listModel = Backbone.Model.extend({
        defaults: {
            'id':0,
            'title': 'Boiled Cat',
            'description':  "eww eq qw eqwfvxcxcvxcv eqw qw eqw eqw",
            'imageSrc':'img/cat_1.jpg',
            'price': 543
        }
    });

    var listCollection = Backbone.Collection.extend({
        model: listModel
    });



    var catCollection = new listCollection([
        {
            'id':1,
            'title': 'Cat Chips',
            'description':  "eww equiouououiouiouiw eqw qw eqw eqw",
            'imageSrc':'img/cat_2.jpg',
            'price': 4
        },
        {
            'id':2,
            'title': 'Fresh cat with mashrooms',
            'description':  "ewwvvbcvbbcvbcvbcvcvbqw eqw eqw qw eqw eqw",
            'imageSrc':'img/cat_3.jpg',
            'price': 7
        },
        {
            'id': 3,
            'title': 'Sweet cat salad with tomatos',
            'imageSrc':'img/cat_1.jpg',
            'description':  "werasdsdsdfdsfqw eqw eqw qw eqw eqw",
            'price': 776
        },
        {
            'id':4,
            'title': 'Microwaved Cat with cheese',
            'description':  "eww eq qw eqwfvxcxcvxcv eqw qw eqw eqw",
            'imageSrc':'img/cat_4.jpg',
            'price': 543
        }

    ]);



    var listView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        events: {
            "click .close": "removeItem"
        },
        el:'#list',
        template: $('#tpl-cat-detail').html(),
        render: function() {
                this.$el.html(doT.template(this.template)({
                    ads: catCollection.toJSON()
                }));
        },
        removeItem: function(e) {

            var item = $(e.target).closest('.list-item');
            var model = catCollection.get(item.data('item-id'));

            item.fadeOut();
            catCollection.remove(model);
        }
    });


    var App = new listView;
});

