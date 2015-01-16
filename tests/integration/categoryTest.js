define([
    'lib/viewMocker',
    'views/category',
    'text!fixtures/category.html'
],
function(test, view, fixture) {
    test('category view context', view, fixture, {
        'context contains the correct template name': function($, context) {
            var templateName = context.templateName;
            assert.equal(templateName, 'category', 'category context has correct template name');
        }
    });

    test('category view DOM', view, fixture, {
        'adaptation adds the correct template class': function($) {
            var $root = $('#x-root');

            assert.isTrue($root.hasClass('t-category'), 'x-root has class t-category');
        }
    });
});
