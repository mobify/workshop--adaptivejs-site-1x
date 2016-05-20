#Step 3: Style the Category Page

The CSS naming convention we use is a modified version of BEM. We call it "CSM" (Component, Sub-component, Modifier). For more information on CSM and on all of our CSS best practices, read the CSS section of our [Mobify code style project](https://github.com/mobify/mobify-code-style/tree/master/css).

To follow our best practices, we often add classes to the desktop HTML and we change the markup for elements. This step covers a few examples of our best practices. We also show you how to add the SCSS to style this page.

##Task A

### Update the Template HTML

There are a few different ways to affect HTML that the template outputs. The first way is to modify the template file iteself.

1. In Terminal, ensure that you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
2. [Preview your Project](http://adaptivejs.mobify.com/v1.0/docs/preview-your-project) .

    Use `http://training.merlinspotions.com/potions` as the site URL.

    Refresh the page in your browser as you update the template HTML and SCSS to view the changes.

3. In an editor app, in the `adaptation/templates` folder, open the `category.dust` dust template file.
4. Wrap the `{title}` key in a `div` element with the `t-category__title` class.

    ![Wrap title in a div](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/AoTbBtkdqrBznRL/Screen%20Shot%202015-01-16%20at%201.25.40%20PM.png)

5. Save the `category.dust` file and close it.

Inspect the class name to understand how it follows our [class naming convention](https://github.com/mobify/mobify-code-style/tree/master/css/class-naming-conventions#class-naming-conventions). The `t-` prefix indicates that the class is part of a template ([learn more on css class prefix conventions](https://github.com/mobify/mobify-code-style/tree/master/css/class-naming-conventions#class-prefix-conventions)).
The next part indicates the name of the template, which is `category`.
Finally the  `__title` part indicates a title subcomponent of the `category` template.

Another way to change the output HTML is to modify the elements that the view returns.

1. In your editor app, in the `adaptation/views` folder, open the `category.js` category view file.
2. Add a `postProcess` function to the view. Ensure that this `postProcess` first calls the `postProcess` function in the base view file.

    ```javascript
    {
        template: template,
        extend: Base, 
        postProcess: function(context) {
            context = Base.postProcess(context);

            return context;
        },

        context: {
    ```

    The `postProcess` function executes after all the elements for the view are selected, so we can grab one of those elements and make a few changes to it. The base view contains its own `postProcess` function that makes a few global changes. In order to keep these changes, call the `postProcess` for the base. More information on the `postProcess` function can be found in the [Views](http://docs.mobify.com/v1.0/docs/views/#c-view-postprocess) guide.

3. Inside the `postProcess` function, at the top of the function, store the `context.listing` Zepto object in a `context` variable.

    ```javascript
    context = Base.postProcess(context);
    ```

4. Store the listing in a new `$listing` variable. Add the class `c-product-list` to the listing element. The `c-product-list` class name indicates that it is a self-contained component. As you apply the `c-product-list` class name to the listing element, the listing element acts as the container for the component.

    ```javascript
    var $listing = context.listing;
    
    $listing.addClass('c-product-list');
    ```

5. Add the `c-product-list__item` class to each `<li>` list item HTML tag and remove the inline styles. The `c-product-list__item` class name indicates that it is a sub-component of the `c-product-list` component. The `c-product-list__item` class name and must be a child of the `c-product-list` element.

    ```javascript
    $listing.children().addClass('c-product-list__item').removeAttr('style');
    ```

6. Add the `c-price` class to the `.price` div. The `c-price` class name is another self-contained component.

    ```javascript
    $listing.find('.price').addClass('c-price');
    ```

    The `c-` prefix indicates that the element is a component. In our case, we deal with two components: `c-product-list` (which has a sub-component item), and `c-price`.
    
7. Save the `category.js` file and close it.

Your newly modified view file looks like this:

![Update listing element](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/jA3OWysySFbjwTM/Screen%20Shot%202015-03-27%20at%2011.45.02%20AM.png)

##Task B

### Add SCSS Files for the Template and Components

1. In an editor app, create a new file in the `assets/styles/templates` directory. As a best practice, name the file `_category.scss` in a way that follows the [Mobify file name convention](https://github.com/mobify/mobify-code-style/tree/master/css/sass-best-practices#filename-naming-convention).
2. Add the following styles for the `t-category__title` element:

    ```scss
    // Category
    // ===

    .t-category {
    }


    // Category Title
    // ---

    .t-category__title {
        padding: 0 $h-space;
    }
    ```

    Save the `_category.scss` SCSS file and close it.

3. In the editor app, from the `/assets/styles` folder, open the `_templates.scss` file. This is where all of the template SCSS files are imported into.
4. Add the `_category.scss` file to the list of template SCSS partials.

    ```scss
    // Page Templates
    // --------------

    @import "templates/home";
    @import "templates/category";
    ```

    Save the `_templates.scss` file and close it.

5. In the editor app, in the `assets/styles/components` folder, create a new `_product-list.scss` SCSS file for the `product-list` component.
6. Add the following styles to the `_product-list.scss` product list SCSS file.

    ```scss
    // Product List
    // ===

    .c-product-list {
        @include clearfix;

        font-family: $serif;
        text-align: center;
    }


    // Product List Item
    // ---

    .c-product-list__item {
        float: left;

        display: block;
        width: 50%;
        padding: $v-space $small-h-space;

        color: $grey-20;

        &:nth-child(odd) {
            clear: both;
        }
    }
    ```
    Save the `_product-list.scss` product list file and close it.

7. In your editor app, from the `/assets/styes` folder, open the `_components.scss` component SCSS file. This is where all of the component SCSS files are imported into.
8. Add the `_product-list` SCSS file to the list of components.

    ```scss
    // Project Components
    // ------------------
    //
    // Styles for project-specific components.
    //
    // eg. @import 'components/button';

    @import 'components/card';
    @import 'components/product-list';
    ```
    Save the `_components.scss` component list file and close it.

9. Repeat Steps 5-8 in Task B. In `assets/styles/components` folder, add a `_price.scss` component file with the following styles:

    ```scss
    // Price
    // ===

    .c-price {
        color: $accent-color;
        font-family: $sans-serif;
        font-weight: bold;
    }
    ```
**Remember** to add the `_price` file to the list of compontent to the component list in `/assets/styles/_components.scss`. Save both your files in the editor when you are done.

10. In your browser, view the potions category page. Refresh the page from Step 2 in Task A in this README.

    The Potions category page looks like this:

    ![Potions page](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/sYtMKGfRqXkKOr4/Screen%20Shot%202015-01-16%20at%202.04.06%20PM.png)

11. Stop preview with the command `[control] c` on the command line in the Terminal.

##Continue to Step 4

Once the page looks good and you're ready to move on, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-4-update-header
```

Follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site-1x/blob/step-4-update-header/README.md) in the Step 4 branch.
