#Step 4: Update the header

The Adaptive.js generator has already created a header view and template for us, but we need to add some content to it from the site.

##Task

###Add Content to the header

1. Open `_header.js` found under /adaptation/views/includes
2. Remove the `title` key and replace it with the following:

    ```
    logoHref: function() {
        return $('.logo a').attr('href');
    },
    cartCount: function() {
        return $('.header-count span').text();
    }
    ```

3. Open `_header.dust` found under /adaptation/templates/partials
4. Replace the content within `<header>` with the following:

    ```
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

5. Inspect the logo on the desktop site.

    The logo is being included as a background image, that won't work for our build since we're not including the desktop css on the page. We'll need to add a copy of the logo to the project.

6. Browse to http://www.merlinspotions.com/img/logo.62e1.png and save the logo as `logo.png` under /assets/images
7. Open `_header.dust` again and add an img element for the logo:

    ```
    <div class="t-header__logo">
        <a href="{logoHref}">
            <img src="{@getUrl path="images/logo.png" /}" alt="Merlins Potions">
        </a>
    </div>
    ```

    *Note:* `"{@getUrl path="images/logo.png" /}"` will prepend the bundle URL to the image path during the build process. When previewing locally that will look like `http://localhost:8080/images/logo.png`


## Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-5-style-header
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-5-style-header/README.md)