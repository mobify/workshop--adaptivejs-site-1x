#Step 4: Update the Header

The Adaptive.js generator created a header view and template for us already. Now, we add some of the Merlin's Potions site content to the header.

##Task

###Add Content to the Header

1. On the command line, enter the `grunt preview` command to start the preview.
2. Work through the third section, [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) of the Getting Started (New Project) guide. Use the http://www.merlinspotions.com/potions URL for the Site URL form field.

    Now, we change the header HTML. Refresh the page as you work your way through the subsequent steps to see the results.

3. In an editor app, from the `/adaptation/views/includes` folder, open the `_header.js` JavaScript file.
4. Remove the `title` key and replace it with the following code snippet:

    ```javascript
    logoHref: function() {
        return $('.logo a').attr('href');
    },
    cartCount: function() {
        return $('.header-count span').text();
    }
    ```
    
    Save the `_header.js` file and close it.

5. In the editor app, from the `/adaptation/templates/partials` folder, open the `_header.dust` Dust file in your editor.
6. Replace the whole content of the `<header> ... </header>` section in the Dust file with the following HTML snippet:

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

    Save the `_header.dust` file and close it.

7. Inspect the logo on the desktop site [Merlin's Potions at http://www.merlinspotion.com/](http://www.merlinspotion.com/) with the right click of your mouse and "Inspect Element" menu option. 

    The logo is included as a background image. However, this approach does not work for our build because we do not include the desktop CSS on our adapted page. Instead, we add a copy of the logo to the project.

8. Browse to `http://www.merlinspotions.com/img/logo.62e1.png` and save the logo as `logo.png` in your `worksho--adaptive-js-site` project directory `/assets/images` sub-folder.
9. In your editor, open `_header.dust` again and add an `img` image element for the logo:

    ```html
    <div class="t-header__logo">
        <a href="{logoHref}">
            <img src="{@getUrl path="images/logo.png" /}" alt="Merlins Potions">
        </a>
    </div>
    ```
    
    Save the `_header.dust` header Dust file and close it.

    **Note:** `"{@getUrl path="images/logo.png" /}"` prepends the bundle URL to the image path during the build process. When you preview locally, the logo locations appear as `http://localhost:8080/images/logo.png`.

10. Stop preview with the command `[control] c` on the command line.

## Continue to Step 5

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-5-style-header
```

Follow the directions in the [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-5-style-header/README.md) of the Step 5 branch.
