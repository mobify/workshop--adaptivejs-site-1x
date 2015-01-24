#Step 2: Populate the Category View with Content

Now that we have the new view working, we'll need to add some content to it. Currently the contents of the body tag for the desktop page is being included on the page, but that contains some elements that we don't need. 

##Task

###Add Content to the category view

There are two main elements that we want to pull into our view. The page title, and the list of products. We'll start by selecting the elements from within the view file, then add them into the dust template.

1. Open the file `category.js` found in /adaptation/views/
2. Remove the `body` key found under `context`
3. Add the following to the context object in your view file

    ```
    title: function() {
        return $('.title');
    }
    ```

    This will select and return an item with the class `title`.

4. Add another key to the context object called `listing` that returns an element with the class `category-listing`

    ```
    title: function() {
        return $('.title');
    },
    listing: function() {
        return $('.category-listing');
    }
    ```

5. Open the file `category.dust` found in /adaptation/templates
6. Override the `contentBlock` that was defined in `base.dust` by adding the following:

    ![Override the contentBlock](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/XQKwUSv5WGo064c/Screen%20Shot%202015-01-16%20at%2012.15.59%20PM.png)

7. Within the contentBlock add the two keys defined in our view file

    ```
    {<contentBlock}
        {title}
        {listing}
    {/contentBlock}
    ```

8. Run `grunt preview`
9. Preview to http://www.merlinspotions.com/potions in your browser

You should see a page very similar to the one in the previous step, but now we're only including the content we need.

##Ready to Continue?

Once you've got the view set up we can move on to adding some styling to it. Run the following command to move on:

```
git reset --hard HEAD && git clean -df && git checkout step-3-style-category-page
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-3-style-category-page/README.md)
