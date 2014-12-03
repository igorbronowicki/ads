;
var config = {
    'baseUrl': '/static/',
    'paths': {
        'jquery': 'libs/jquery',
        'underscore': 'libs/underscore',
        'backbone': 'libs/backbone',
        'mustache': 'libs/mustache',
        'text': 'libs/require.text',
        'doT': 'libs/doT.min'
    },
    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        }
    }
};
require.config(config);
