define(['$'], function($) {
    return {
        context: {
            newsletter: function() {
                var $newsletter = $('.footer-newsletter');
                $newsletter.find('input, button').wrapAll('<div class="c-newsletter"></div>');
                $newsletter.find('button').addClass('c-button c--accent');
                return $newsletter;
            },
            copyright: function() {
                return $('copyright');
            }
        }
    };
});
