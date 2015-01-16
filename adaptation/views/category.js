define([
    '$',
    'views/base',
    'dust!templates/category'
],
function($, Base, template) {
    return {
        template: template,
        extend: Base,

        postProcess: function(context) {
            context = Base.postProcess(context);

            var $listing = $(context.listing);

            // Apply missing component classes
            $listing.addClass('c-product-list');
            $listing.find('li').addClass('c-product-list__item')
                .removeAttr('style');
            $listing.find('.price').addClass('c-price');

            return context;
        },

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
