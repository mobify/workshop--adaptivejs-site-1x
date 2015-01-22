#Step 3: Style the Category page

The CSS naming convention we use is a modified version of BEM that we call CSM (Component, Sub-component, Modifier). For more information on that and all of our CSS best practices check out the CSS section of our [Mobify code style project](https://github.com/mobify/mobify-code-style/tree/master/css).


In order to follow our best practices we often need to add classes to the desktop HTML, as well as make changes to the markup for elements. In this step will cover a few examples of that, and add the SCSS needed to style this page.

##TASK

### Update the Template's HTML

There are a few different areas where we can affect the HTML that is output by the template. The first is within the template itself.

1. Open `category.dust` found in /adaptation/templates
2. Wrap the `{title}` key in a div with the class `t-category__title`

    ![Wrap title in a div](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/AoTbBtkdqrBznRL/Screen%20Shot%202015-01-16%20at%201.25.40%20PM.png)

We can also change the output HTML by modifying the elements that get returned by the view.

1. Open category view file found in /adaptation/views
2. Add a postProcess function to the view. We'll need to make sure that this postProcess first calls the postProcess function in the base view file.

    ![Add postProcess](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/jcLAXHR4dtYiXsi/Screen%20Shot%202015-01-16%20at%201.27.27%20PM.png)

    This function will execute after we've selected all the elements for the view, so we can grab one of those elements and make a few changes to it.

3. Store the `context.listing` zepto object in a variable
4. Add the class `c-product-list` to the ul
5. Add the class `c-product-list__item` to each li and remove the inline styles
6. Add the class `c-price` to the `.price` div

Your view file should end up looking like this:

![Update listing element](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/TFDwYRj5dy23ZRX/Screen%20Shot%202015-01-16%20at%201.28.36%20PM.png)

##TASK

### Add SCSS files for the Template and Components

1. Create a new file under assets/styles/templates called `_category.scss`
2. Add the following styles for the `t-category__title` element

    ![Add style for t-category](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/RiIAUlbG8Nmwfqu/Screen%20Shot%202015-01-16%20at%201.29.39%20PM.png)

3. Open the file `_templates.scss` found under /assets/styles
4. Add the `_category` scss file to the list of page templates

    ![Add category scss to stylesheet](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/MNL05OsdR0MApeW/Screen%20Shot%202015-01-16%20at%202.44.42%20PM.png)

5. Create a new file under assets/styles/components called `_product-list.scss`
6. Add the following styles:

    ![Product list styles](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/I8Jy5Eu2Wbt6HZA/Screen%20Shot%202015-01-16%20at%201.35.45%20PM.png)

7. Open the file `_components.scss` found under /assets/styes
8. Add the `_product-list` scss file to the list of components

    ![Add product-list scss to stylesheet](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/8zb6m0NP9ow14yv/Screen%20Shot%202015-01-16%20at%201.36.41%20PM.png)

9. Repeat steps 5-8 to add a component file called `_price.scss` with the following styles:

    ![Price component styles](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/nxmJ8p0GC527QW6/Screen%20Shot%202015-01-16%20at%201.37.01%20PM.png)

10. Run `grunt preview`
11. Preview to http://www.merlinspotions.com/potions in your browser

The potions category page should look like this:

![Potions page](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/sYtMKGfRqXkKOr4/Screen%20Shot%202015-01-16%20at%202.04.06%20PM.png)


##Ready to Continue?

Once the page looks good and you're ready to move on, run the following command:

```
git clean -f && git checkout step-4-update-header
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-4-update-header/README.md)
