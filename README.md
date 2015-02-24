#Step 5: Style the header

Now that there is content in the header, we add style to it.

##Task

###Style the Header


1. In Terminal, ensure you are in the `workshop--adaptivejs-site directory`. On the command line, enter the `grunt preview` command to start the preview.
2. Work through the third section, [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) of the Getting Started (New Project) guide. Use the http://www.merlinspotions.com/potions URL for the Site URL form field.
3. In the `/assets/styles/templates/partials` directory, open the `_header.scss` header SCSS file in an editor app.

    This file was created by the Adaptive.js project generator with some default styles. We now replace these with styles for our site header.

4. Replace the file contents with the following:

    ```SCSS
    // Header
    // ===

    .t-header {
        display: flex;
        justify-content: space-between;
        padding: $v-space $small-h-space;
    }


    // Header: Logo
    // ---
    //
    // 1. Height comes from the logo img tag
    // 2. Legacy flexbox fix

    .t-header__logo {
        padding: 0 $h-space;

        a {
            display: block; // 2
            height: 39px; //1
        }

        img {
            max-height: 100%;
        }
    }
    ```
    
    Save the `_header.scss` header SCSS file and close it.

    We have the header layout set up. Let's add to menu and the cart buttons to fill in this layout.

5. In your editor app, create a new `_button.scss` SCSS file called in the folder `/assets/styles/components`.

6. Add the following content to the file:

    ```SCSS
    // Button
    // ===

    .c-button {
        @extend %button;
    }


    // Button Themes
    // ---

    .c-button.c--brand {
        border: 0;

        background-color: $brand-color;

        color: white;
    }
    ```

    Save the `_button.scss` SCSS file and close it.

7. In your editor app, from the `/assets/styles` directory, open the `_components.scss` file.

8. Add the `_button.scss` file to the list of components with the `@import` statement at the bottom of this code snippet:

    ```SCSS
    // Project Components
    // ------------------
    //
    // Styles for project-specific components.
    //
    // eg. @import 'components/button';

    @import 'components/card';
    @import 'components/product-list';
    @import 'components/price';
    @import 'components/button';
    ```
    
    Save the `_components.scss` file and close it.

    Now that we have common button styles, let's adjust our header menu button.
9. In your editor app, from the `/assets/styles/templates/` (?partials?) directory, open the `_header.scss` header file.
10. In the `.t-header__menu block` block, add button modifications with the following lines of code:

    ```SCSS
    // Header: Menu
    // ---

    .t-header__menu {
        .c-button {
            display: block;
            min-width: 45px;
            min-height: 45px;

            background-image: url('/images/menu.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 25px auto;
        }
    }
    ```
    
    Save and close the file.

10. Repeat Steps 5 - 8 of this Task to add another component called `_cart-count` with the following styles:

    ```SCSS
    // Cart Count
    // ===
    //
    // 1. Relative for absolutely positioned .c-cart-count__number
    // 2. Width must account for the presence of the number badge

    .c-cart-count {
        position: relative; // 1

        width: 40px; // 2
        height: 40px;

        background: url('/images/cauldron.png') top left no-repeat;
    }


    // Card Count: Number
    // ---
    //
    // 1. Absolutely positioned number badge relative to the parent .c-cart-count

    .c-cart-count__number {
        position: absolute; // 1
        top: 0;
        right: 0;

        display: block;
        width: 20px;
        height: 20px;

        border-radius: 50%;
        background-color: $accent-color;

        color: #fff;
        font-family: $oswald;
        font-weight: 300;
        text-align: center;
    }
    ```

    Remember to add the `_cart-count` to the list of components in the `_components.scss` file.

11. View the mobile site in your browser

    The header now looks like this:

    ![Header final styling](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/Z8Dwb5hT0q9nYXO/Screen%20Shot%202015-01-19%20at%2010.28.56%20AM.png)


12. Stop preview with the command `[control] c` in Terminal.

## Continue to Step 6

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-6-update-footer
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-6-update-footer/README.md) in the Step 6 branch.
