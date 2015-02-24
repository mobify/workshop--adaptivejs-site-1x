#Step 8: Update the Homepage

Now that you have experience with some of the basics, we work on the homepage. To start, we add the content we want to the page.

##Task

###Update the Homepage

1. View the desktop version of the [Merlin's Potions homepage](http://www.merlinspotions.com) in a new tab in your browser.
2. Inspect the HTML for the page. Right click in the browser and select the **"Inspect Element"** menu option.

    Specifically, look at:

    * the hero image
    * the free shipping banner
    * the discount banner
    * the three carousels for Potions, Ingredients and Books

    We add these elements to our mobile version of the page.

3. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
4. Work through the third section, [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) of the Getting Started (New Project) guide. Use the `http://www.merlinspotions.com/` URL for the Site URL form field.

    As you work through these instructions and change the homepage view and template files, refresh the mobile preview homepage in your browser.

5. In an editor app, from the `/adaptation/views` folder, open the `home.js` view file.
6. Remove the 'firstp' key.
7. Add keys that select and return the hero banner, shipping message, and discount banner from the following code snippet:

    ```javascript
    context: {
        templateName: 'home',
        hero: function() {
            return $('.hero');
        },
        shipping: function() {
            return $('.header .shipping').text();
        },
        discountBanner: function() {
            return $('.banner-message');
        }
    }
    ```
    Save the `home.js` file and close it.

8. In the editor, from the `/adaptation/templates` folder, open the `home.dust` Dust template file. 
9. Inside the content block, add the three elements from this snippet:

    ```html
    {<contentBlock}
        {hero}

        <div class="c-shipping-banner">
            {shipping}
        </div>

        <div class="t-home__promo">
            {discountBanner}
        </div>

    {/contentBlock}
    ```

    Now, we work with the three carousels on the page. We include these three sections as tabs instead of carousels, so we extract information from the carousels to place them in the tabs. We then define new markup for the tabs inside the template.

10. In the editor, from the `/adaptation/views` folder, open the `home.js` view file.
11. Inside the `context` block, add a `categories` key that returns each `.categories .carousel` div with the following code snippet:

    ```javascript
    context: {
        templateName: 'home',
        hero: function() {
            return $('.hero');
        },
        shipping: function() {
            return $('.header .shipping').text();
        },
        discountBanner: function() {
            return $('.banner-message');
        },
        categories: function() {
            return $('.categories .carousel');
        }
    }
    ```
    Now, this code simply outputs the full markup for each carousel. Let's break it down even further.

12. In the `home.js` view file, update the `categories` key to return a list of objects that contain the category title and collection of products for the category with the following code snippet:

    ```javascript
        discountBanner: function() {
            return $('.banner-message');
        },
        categories: function() {
            return $('.categories .carousel').map(function() {
                var $category = $(this);

                return {
                    title: $category.find('h3').text(),
                    products: $category.find('.jcarousel li a')
                };
            });
        }
    }
    ```

    Now let's take it one step further: let's change the `products` Zepto collection into a list of objects.

13. In the `home.js` view file, map the `products` collection into a list of objects with each products href, image, title, and price with this code snippet:

    ```javascript
        discountBanner: function() {
            return $('.banner-message');
        },
        categories: function() {
            return $('.categories .carousel').map(function() {
                var $category = $(this);

                return {
                    title: $category.find('h3').text(),
                    products: $category.find('.jcarousel li a').map(function() {
                        var $item = $(this);

                        return {
                            href: $item.attr('href'),
                            image: $item.find('img'),
                            // Find and remove the price before selecting
                            // the description, to separate the two elements
                            price: $item.find('.price').remove().text(),
                            title: $item.find('.description').text().replace(' - ', '')
                        };
                    })
                };
            });
        }
    }
    ```

    Finally, save the `home.js` view file and close it.

14. In the editor, from the `/adaptation/templates` folder, open the `home.dust` Dust template file again.

    With list we built, we arrange the categories and products in tabs.

15. Add the following markup to the home template:

    ```html
         <div class="t-home__promo">
            {discountBanner}
        </div>

        <div class="t-home__content">
            <div class="c-tab">
                <div class="c-tab__controls">
                    {#categories}
                        <button class="c-tab__button u-unstyle js-tabs__header">{title}</button>
                    {/categories}
                </div>

                {#categories}
                    <div class="c-tab__section c-product-list js-tabs__sections">
                        {#products}
                            <a href="{href}" class="c-product-list__item">
                                {image}
                                <div class="c-tab__description">{title}</div>
                                <div class="c-price">{price}</div>
                            </a>
                        {/products}
                    </div>
                {/categories}
            </div>
        </div>

    {/contentBlock}
    ```

    Save the `home.dust` template file and close it.
    
    Refresh the homepage preview page from Step 3.

    We use the `{#keyName}{/keyName}` block to loop through items in a list. Read our [Dust.js Cheat Sheet](https://cloud.mobify.com/docs/adaptivejs/adapting/dustjs-cheat-sheet) for more dust templating tricks.

16. Stop the preview with the `[control] c` command in Terminal.



## Continue to Step 9

In the next step, we add functionality to the tabs with some JavaScript event handler additions to the homepage.

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-9-homepage-tabs
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-9-homepage-tabs/README.md) in the Step 9 branch.
