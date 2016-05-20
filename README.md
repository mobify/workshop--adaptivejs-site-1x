#Step 4: Update the Header

The Adaptive.js generator created a header view and template for us already. Now, we add some of the Merlin's Potions site content to the header.

##Task

###Add Content to the Header

1. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
2. [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project).

    * Use `http://training.merlinspotions.com/potions` as the site URL.

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
    
5. Save the `_header.js` file and close it.

    Your `_header.js` file should look like this:

    ![Header view final](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/ECIYK6QTDVSoQGE/Screen%20Shot%202015-03-12%20at%204.42.00%20PM.png)

6. In the editor app, from the `/adaptation/templates/partials` folder, open the `_header.dust` Dust file in your editor.
7. Replace the whole content of the `<header> ... </header>` section in the Dust file with the following HTML snippet:

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

8. Save the `_header.dust` file and close it.

9. In your browser, to inspect the logo on the desktop site [Merlin's Potions at http://training.merlinspotion.com/](http://training.merlinspotion.com/), right click with your mouse and the **"Inspect Element"** menu option. 

    The logo is included as a background image. However, this approach does not work for our build because we do not include the desktop CSS on our adapted page. Instead, we add a copy of the logo to the project.

10. In your browser, go to `http://training.merlinspotions.com/img/logo.62e1.png`. Save the logo as `logo.png` in your `workshop--adaptive-js-site` project directory `/assets/images` sub-folder.
11. In your editor, open `_header.dust` again and add an `img` image element for the logo:

    ```html
    <div class="t-header__logo">
        <a href="{logoHref}">
            <img src="{@getUrl path="images/logo.png" /}" alt="Merlins Potions">
        </a>
    </div>
    ```
    
    Save the `_header.dust` header Dust file and close it.

    The `{@getUrl path="images/logo.png" /}` part prepends the bundle URL to the image path during the build process. When you preview the site locally, the logo location will appear as `http://localhost:8080/images/logo.png`.

12. Refresh the Potions page preview from Step 2 to see the logo.
13. Stop preview with the command `[control] c` in Terminal.

## Continue to Step 5

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-5-style-header
```

Follow the directions in the [README](https://github.com/mobify/workshop--adaptivejs-site-1x/blob/step-5-style-header/README.md) of the Step 5 branch.
