#Step 8: Update the homepage

Now that we've gone over some of the basics, we can get back to the homepage. We'll start by adding the content we want to the page. 


##Task

###Update the Homepage

1. Open the file `home.js` under /adaptation/views
2. Remove the 'firstp' key
3. Add keys that select and return the hero banner, shipping message and discount banner:

    ![Add banners to view](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/iVh3cyLBSPBraKi/Screen%20Shot%202015-01-19%20at%204.24.43%20PM.png)

4. Open the file `home.dust` under /adaptation/templates
5. Add the three elements to the template

    ![Add banners to template](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/F2wTMkpG4Bwde0N/Screen%20Shot%202015-01-19%20at%204.26.20%20PM.png)

    Now we need to deal with the three carousels on the page. We'll be including these three sections as tabs instead of carousels, so we need to extract information out of the carousels. We can then define new markup for the tabs inside the template.

6. Open the `home.js` view file
7. Add a `categories` key that will return each `.categories .carousel` div

    ![Categories in view](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/YsnUYpz5OoszDZb/Screen%20Shot%202015-01-19%20at%204.27.37%20PM.png)

    This will just output the full markup for each carousel, which won't really work for us. So let's try breaking it down a bit more.

8. Update the `categories` key so that it returns a list of objects that contain the category title, and collection of products for the category:

    ![List of categories](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/mbyiyKi5a63BArl/Screen%20Shot%202015-01-19%20at%204.29.32%20PM.png)

    Now let's take it one step further by changing the `products` zepto collection into a list of objects.

9. Map the `products` collection into a list of objects with each products href, image, title and price:

    ![List of products](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/hg5VhI7TGbJ3BNR/Screen%20Shot%202015-01-19%20at%204.34.14%20PM.png)

10. Open the `home.dust` file again

    Using the list we built we can arrange the categories and products in tabs.

11. Add the following markup to the home template:

    ![Products in template](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/hg5VhI7TGbJ3BNR/Screen%20Shot%202015-01-19%20at%204.34.14%20PM.png)

    We're using `{#keyName}{/keyName}` to loop through items in a list. More on that as well as a few more dust templating tricks can be found [here](https://cloud.mobify.com/docs/adaptivejs/adapting/dustjs-cheat-sheet).



## Ready to Continue?

We'll get the tab functionality working in the next step by adding some javascript event handlers to the page.

When you're ready to continue, run the following command:

```
git clean -f && git checkout step-9-homepage-tabs
```

