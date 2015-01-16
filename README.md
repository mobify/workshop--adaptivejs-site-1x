#Step 3: Style the Category page

The CSS naming convention we use is a modified version of BEM that we call CSM (Component, Sub-component, Modifier). More information on that and all of our CSS best practices check out the CSS section of our [Mobify Code Style Repo](https://github.com/mobify/mobify-code-style/tree/master/css).


In order to follow our best practices we often need to add classes to the desktop HTML, as well as make changes to the markup for elements. In this step will cover a few examples of that, and add the SCSS needed to style this page.

##TASK

### Update the Template's HTML

There are a few different areas where we can affect the HTML that is output by the template. The first is within the template itself.

1. Open `category.dust` found in /adaptation/templates
2. Wrap the `{title}` key in a div with the class `t-category__title`

*screenshot here*

We can also change the output HTML by modifieing the elements that get returned by the view.

1. Open category view file found in /adaptation/views
2. Add a postProcess function to the view. We'll need to make sure that this postProcess first calls the postProcess function in the base view file.

*screenshot here*

This function will execute after we've selected all the elements for the view, so we can grab one of those elements and make a few changes to it.

4. Store the `listing` element in a variable
5. Add the class `c-product-list` to the ul
6. Add the class `c-product-list__item` to each li and remove the inline styles for the element
7. Add the class `c-price` to the `.price` div

Your view file should end up looking like this:

*screenshot here*

##TASK

### Add SCSS files for the Template and Components

1. Create a new file under assets/styles/templates called `_category.scss`
2. Add the following styles for the `t-category__title` element

*screenshot here*

3. Open the file `_templates.scss` found under /assets/styles
4. Add the `_category` scss file to the list of page templates

*screenshot here*

5. Create a new file under assets/styles/components called `_product-list.scss`
6. Add the following styles:

*screenshot here*

7. Open the file `_components.scss` found under /assets/styes
8. Add the `_product-list` scss file to the list of components

*screenshot here*

9. Repeat steps 5-8 to add a component file called `_price.scss` with the following styles:

*screenshot here*

10. Run `grunt preview`
11. Preview to http://www.merlinspotions.com/potions in your browser

The potions category page should look like this:
*screenshot here*


##Ready to Continue?

Once the page looks good and you're ready to move on, run the following command:

```
git clean -f && git checkout 
```

