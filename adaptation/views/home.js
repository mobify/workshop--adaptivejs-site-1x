define([
    '$',
    'views/base',
    'dust!templates/home'
],
function($, BaseView, template) {
    return {
        template: template,
        extend: BaseView,
        context: {
            templateName: 'home',
            hero: function() {
                return $('.hero');
            },
            shipping: function() {
                return $('.free-shipping');
            },
            discountBanner: function() {
                return $('.banner-message');
            },
            categories: function() {
                return $('.categories .carousel').map(function() {
                    var $category = $(this);

                    return {
                        title: $category.find('h3').text(),
                        products: $category.find('.jcarousel li a').map(function() {
                            var $item = $(this);
                            return {
                                href: $item.attr('href'),
                                image: $item.find('img'),
                                // Find and remove the price before selecting
                                // the description to separate the two elements.
                                price: $item.find('.price').remove().text(),
                                title: $item.find('.description').text().replace(' - ', '')
                            };
                        })
                    };
                });
            }
        }

        /**
         * If you wish to override preProcess/postProcess in this view, have a look at the documentation:
         * https://cloud.mobify.com/docs/adaptivejs/views/
         */
    };
});
