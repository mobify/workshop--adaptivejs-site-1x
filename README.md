#Step 4: Update the header

The Adaptive.js generator has already created a header view and template for us, but we need to add some content to it from the site.

##Task

###Add Content to the header


1. Run `grunt preview`
2. [Preview](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) to http://www.merlinspotions.com/potions in your browser
    
    We'll be making changes to the header's HTML, refresh the page as you go to see the results of the changes.

3. Open `_header.dust` found under /adaptation/templates/partials
4. Replace the content within `<header>` with the following:

    ```html
    <div class="t-header__menu">
        <a class="c-button c--brand js-header-menu__link"></a>
    </div>

    <div class="t-header__logo">
        <a href="{logoHref}"></a>
    </div>

    <div class="t-header__cart">
        <div class="c-cart-count">
            <div class="c-cart-count__text">
                <span class="c-cart-count__number">{cartCount}</span>
            </div>
        </div>
    </div>
    ```

5. Open `_header.js` found under /adaptation/views/includes
6. Remove the `title` key and replace it with the following:

    ```javascript
    logoHref: function() {
        return $('.logo a').attr('href');
    },
    cartCount: function() {
        return $('.header-count span').text();
    }
    ```

7. Inspect the logo on the desktop site.

    The logo is being included as a background image, that won't work for our build since we're not including the desktop css on the page. We'll need to add a copy of the logo to the project.

8. Browse to http://www.merlinspotions.com/img/logo.62e1.png and save the logo as `logo.png` under /assets/images
9. Open `_header.dust` again and add an img element for the logo:

    ```
    <div class="t-header__logo">
        <a href="{logoHref}">
            <img src="{@getUrl path="images/logo.png" /}" alt="Merlins Potions">
        </a>
    </div>
    ```

    **Note:** `"{@getUrl path="images/logo.png" /}"` will prepend the bundle URL to the image path during the build process. When previewing locally that will look like `http://localhost:8080/images/logo.png`

10. Stop preview by typing `ctrl c` in the terminal window.

## Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-5-style-header
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-5-style-header/README.md)