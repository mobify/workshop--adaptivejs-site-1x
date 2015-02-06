#Step 8: Update the homepage

Now that we've gone over some of the basics, we can get back to the homepage. We'll start by adding the content we want to the page. 


##Task

###Update the Homepage

1. Open the file `home.js` under /adaptation/views
2. Remove the 'firstp' key
3. Add keys that select and return the hero banner, shipping message and discount banner:

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

4. Open the file `home.dust` under /adaptation/templates
5. Add the three elements to the template

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

    Now we need to deal with the three carousels on the page. We'll be including these three sections as tabs instead of carousels, so we need to extract information out of the carousels. We can then define new markup for the tabs inside the template.

6. Open the `home.js` view file
7. Add a `categories` key that will return each `.categories .carousel` div

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

    This will just output the full markup for each carousel, which won't really work for us. So let's try breaking it down a bit more.

8. Update the `categories` key so that it returns a list of objects that contain the category title, and collection of products for the category:

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

    Now let's take it one step further by changing the `products` zepto collection into a list of objects.

9. Map the `products` collection into a list of objects with each products href, image, title and price:

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

10. Open the `home.dust` file again

    Using the list we built we can arrange the categories and products in tabs.

11. Add the following markup to the home template:

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

    We're using `{#keyName}{/keyName}` to loop through items in a list. More on that as well as a few more dust templating tricks can be found [here](https://cloud.mobify.com/docs/adaptivejs/adapting/dustjs-cheat-sheet).



## Ready to Continue?

We'll get the tab functionality working in the next step by adding some javascript event handlers to the page.

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-9-homepage-tabs
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-9-homepage-tabs/README.md)