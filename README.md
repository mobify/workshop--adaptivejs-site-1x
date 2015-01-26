#Step 9: Implement Tab Behaviour on the Home Page.

##Task

###Add click handlers to the homepage view-script

1. Open `home.js` found under /assets/js/ui/view-scripts
2. In the homeUI function, add a click handler for `.js-tab__header`

    ```
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                console.log('tab header clicked');
            });
        };

        return homeUI;
    });
    ```

3. Within the new click handler add an active class to the clicked tab, and remove the active class from all other tabs.

    ```
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                var $tab = $(this);

                $tab.siblings().removeClass('c--active');
                $tab.addClass('c--active');
            });
        };

        return homeUI;
    });
    ```

    We'll use this class to apply a few styles to active tabs.

4. Update the click handler so that an active class is added to the corresponding tab section and make sure that the active class is removed from other tab sections.

    ```
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                var $tab = $(this);
                var tabIndex = $tab.index();
                var $sections = $('.js-tabs__sections');

                $tab.siblings().removeClass('c--active');
                $tab.addClass('c--active');

                $sections.removeClass('c--active');
                $sections.eq(tabIndex).addClass('c--active');
            });
        };

        return homeUI;
    });
    ```

5. Finally, trigger a click on the first tab.

    ```
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                var $tab = $(this);
                var tabIndex = $tab.index();
                var $sections = $('.js-tabs__sections');

                $tab.siblings().removeClass('c--active');
                $tab.addClass('c--active');

                $sections.removeClass('c--active');
                $sections.eq(tabIndex).addClass('c--active');
            });

            $('.js-tabs__header').first().click();
        };

        return homeUI;
    });
    ```

6. Run `grunt preview`
7. Preview the homepage in your browser
8. Test that the active classes are applied correctly by inspecting the tabs

We'll add the tab styling along with the styling for the active classes in the next step.


## Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-10-style-homepage
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-10-style-homepage/README.md)