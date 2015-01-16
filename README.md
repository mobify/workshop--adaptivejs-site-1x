#Step 2: Populate the Category View with Content

Now that we have the new view working, we'll need to add some content to it. Currently the contents of the body tag for the desktop page is being included on the page, but that contains some elements that we don't need. 

##Task

###Add Content to the category view

There are two main elements that we want to pull into our view. The page title, and the list of products. We'll start by selecting the elements from within the view file, then add them into the dust template.

1. Open the file `category.js` found in /adaptation/views/
2. Remove the `body` key found under `context`

3.Add the following to the context object in your view file

*screenshot here*

This will select and return an item with the class `title`.

4. Add another key to the context object called `listing` that returns an element with the class `category-listing`

*screenshot here*

5. Open the file `category.dust` found in /adaptation/templates
6. Override the `contentBlock` that was defined in `base.dust` by adding the following:

*screenshot here*

7. Within the contentBlock add the two keys defined in our view file

*screenshot here*


8. Run `grunt preview`
9. Preview to http://www.merlinspotions.com/potions in your browser

You should see a page very similar to the one in the previous step, but now we're only including the content we need.

##Ready to Continue?

Once you've got the view set up we can move onto adding some styling to it. Run the following command to move on:

```
```