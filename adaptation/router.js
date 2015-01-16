define([
    '$',
    'adaptivejs/router',
    'views/home',
    'views/category'
],
function($, Router, Home, Category) {
    var router = new Router();

    router
        .add(Router.selectorMatch('body.home'), Home)
        .add(Router.selectorMatch('body.category'), Category);

    return router;
});
