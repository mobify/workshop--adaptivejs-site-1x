#Step 2: Populate the Category View with Content

Now that we have the new view working, we'll need to add some content to it. Currently the contents of the body tag for the desktop page is being included on the page, but that contains some elements that we don't need. 

##Task

###Add Content to the category view

There are two main elements that we want to pull into our view. The page title, and the list of products. We'll start by defining the HTML for the page within the template file, then within the view file, we'll select the elements on the desktop site that we need to add to the template.

1. Open the file `category.dust` found in /adaptation/templates
2. Override the `contentBlock` that was defined in `base.dust` by adding the following:

    ![Override the contentBlock](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/XQKwUSv5WGo064c/Screen%20Shot%202015-01-16%20at%2012.15.59%20PM.png)

    If you remember in the previous step, we said that the new view should extend the base view. This means that the category template will pull in all of the mark up from the base dust file. Which by default just displays the full contents of the desktop HTML.

    ![Base template contentBlock](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/Hehqa43UYdVBQxW/Screen%20Shot%202015-02-05%20at%201.41.56%20PM.png)

    By overriding the contentBlock key, we can add our own markup that is specific to this new page.

3. Within the contentBlock add the two keys defined in our view file

    ```
    {<contentBlock}
        {title}
        {listing}
    {/contentBlock}
    ```

4. Open the file `category.js` found in /adaptation/views/
5. Remove the `body` key found under `context` since we won't need it for this page
6. Add the `title` key to the context object in your view file

    ```
    title: function() {
        return $('.title');
    }
    ```

    This will select and return an item with the class `title`.

7. Add the `listing` key that returns an element with the class `category-listing`

    ```
    title: function() {
        return $('.title');
    },
    listing: function() {
        return $('.category-listing');
    }
    ```

8. Run `grunt preview`
9. [Preview](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) to http://www.merlinspotions.com/potions in your browser

    You should see a page very similar to the one in the previous step, but now we're only including the content we need.

10. Stop preview by typing `ctrl c` in the terminal window.

##Ready to Continue?

Once you've got the view set up we can move on to adding some styling to it. Run the following command to move on:

```
git reset --hard HEAD && git clean -df && git checkout step-3-style-category-page
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-3-style-category-page/README.md)
