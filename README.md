#Step 10: Style the Homepage

##Task

###Style the Homepage

1. Open the file `_home.scss` found under **/assets/styles/templates**
2. Replace the existing styles with the following:

    ``` SCSS
    // Home
    // ===

    .t-home {
    }


    // Home: Promo
    // ---

    .t-home__promo {
        padding: $v-space 0;

        text-align: center;

        .banner-message {
            font-family: $serif;
            font-style: italic;
        }
    }


    // Home: Content
    // ---

    .t-home__content {
        padding: 0 $small-h-space;
    }
    ```

3. Create a new component scss file for the tabs component called `_tab.scss` with the following styles:

    ``` SCSS
    // Tab
    // ===

    .c-tab {
    }


    // Tab: Header
    // ---

    .c-tab__controls {
        display: flex;
        padding-bottom: $v-space;

        color: $grey-55;
        text-align: center;
    }


    // Tab: Button
    // ---

    .c-tab__button {
        @extend %heading;

        display: block;
        width: 100%;
        min-height: $line-height;
        padding: 0;

        font-size: $font-size - 1;
        text-transform: uppercase;

        &.c--active {
            position: relative;

            color: $accent-color;
            font-weight: normal;
            font-size: $font-size + 1;

            &::after {
                content: '';

                position: absolute;
                right: 0;
                bottom: -12px;
                left: 0;

                width: 0;
                margin: auto;
                border-top: 5px solid $accent-color;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;

                background-color: white;
                box-shadow: 5px 0 0 0 white, -5px 0 0 0 white;
            }
        }
    }


    // Tab: Section
    // ---

    .c-tab__section {
        @include clearfix;

        display: none;
        padding: $large-v-space 0;
        border-top: 1px solid $grey-80;
        border-bottom: 1px solid $grey-80;

        &.c--active {
            display: block;
        }
    }
    ```

    *Note:* Don't forget to import the tabs scss file in `_components.scss`

    ```SCSS
    // Project Components
    // ------------------
    //
    // Styles for project-specific components.
    //
    // eg. @import 'components/button';

    ...
    @import 'components/newsletter';
    @import 'components/tab';
    ```

4. Create a component scss file called `_shipping-banner.scss` with the following styles:

    ```SCSS
    // Shipping Banner
    // ===

    .c-shipping-banner {
        padding: $v-space 0;

        background-color: $accent-color;

        color: white;
        font-family: $serif;
        font-style: italic;
        text-align: center;
    }
    ```

5. Run `grunt preview`
6. Preview the site in your browser


## Ready to Continue?

We're done! For now at least.

