#Step 9: Implement Tab Behavior on the Home Page.

##Task

###Add Click Handlers to the Homepage `view-script`

1. Open `home.js` found under /assets/js/ui/view-scripts

    The JavaScript files in this folder will be run on the page after it has been rendered. Any UI functionality for the page should be added here.

2. In the homeUI function, add a click handler for `.js-tab__header`

    ```javascript
    define([
        '$'
    ],
    function($) {
        var homeUI = function() {
            $('.js-tabs__header').on('click', function(e) {
                // The tab functionality will be added up here.
            });
        };

        return homeUI;
    });
    ```

    We'll be setting up the tabs so that when a user clicks on a tab the matching section is displayed and all other panels are hidden. The click handler will add and remove classes from the tabs and tab section that we will then use to hide/show the elements with CSS.

3. Within the new click handler add an active class to the clicked tab, and remove the active class from all other tabs.

    ```javascript
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

    We'll use this class to highlight the active tab.

4. Update the click handler so that an active class is added to the corresponding tab section and make sure that the active class is removed from other tab sections.

    ```javascript
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

    ```javascript
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

6. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
7. Work through the third section, [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) of the Getting Started (New Project) guide. Use the `http://www.merlinspotions.com/` URL for the Site URL form field.
8. Inspect the tabs in the site preview to test the active classes.

    In Step 10, we add the tab styling and styling for the active classes.

9. Stop the preview with the `[control] c` command in Terminal.


## Continue to Step 10

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-10-style-homepage
```

Then, follow the directions in the [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-10-style-homepage/README.md) in the Step 10 branch.
