define([
    '$',
    'views/base',
    'dust!templates/category'
],
function($, Base, template) {
    return {
        template: template,
        extend: Base,

        context: {
            templateName: 'category',
            title: function() {
                return $('.title');
            },
            listing: function() {
                return $('.category-listing');
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * https://cloud.mobify.com/docs/adaptivejs/views/
         */
    };
});
