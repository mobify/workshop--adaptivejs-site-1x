#Step 2: Populate the Category View with Content

Now that the new view works, let's add content to it. Currently the contents of the body tag for the desktop page are included on the page but we don't need all of the original contents for the adapted site.

##Task

###Add Content to the Category View

There are two main elements to pull into our view:

1. the page title, and 
2. the list of products.
 
Start with the HTML definition for the page in the template file. Then in the view file, select the elements on the desktop site to add to the template.

1. In Terminal, enter the following command to start the preview:

    ```
    grunt preview
    ```

2. Work through Work through the third section, [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server), of the Getting Started (New Project) guide.

    As you change the category template and view files, refresh the preview page in the browser to see the changes.

3. In your `workshop--adaptivejs-site` directory, navigate to the `adaptation/views` folder. Open the `category.js` category view file in an editor app.

    As you remember from the Overview of the Mobify bundle, the view file is where you select and transform content from the original page.

Templates: Templates define the layout of your page on mobile. They use the content from the views.
4. In the `context` section of the file, remove the `body` key.
5. In context object of the view file, add the `title` key with the following code snippet:

    ```javascript
    title: function() {
        return $('.title');
    }
    ```

    This selects and returns an item with the class `title`.

6. Underneath the `title` key, add the `listing` key that returns an element with the class `category-listing` with the following code snippet:

    ```javascript
    title: function() {
        return $('.title');
    },
    listing: function() {
        return $('.category-listing');
    }
    ```
7. Save and close the `category.js` view file in your editor.

7. Navigate to the `adaptation/templates` directory and open the `category.dust` template file in an editor app.

    As you remember from the Overview of the Mobify bundle, the template file defines the layout of your page on mobile. Each template uses the content from its corresponding view. This is why the `category.js` and `category.dust` files have parallel names.

8. In the `category.dust` template file, override the `contentBlock` key from its default in `base.dust`.  Adding the following lines of code instead:

    ![Override the contentBlock](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/XQKwUSv5WGo064c/Screen%20Shot%202015-01-16%20at%2012.15.59%20PM.png)

    As you remember from the Step 1 branch, the new view extends the base view. This means that the category template uses all of the mark up from the base dust file. By default, the base simply displays the full contents of the desktop HTML.

    ![Base template contentBlock](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/Hehqa43UYdVBQxW/Screen%20Shot%202015-02-05%20at%201.41.56%20PM.png)

    When you override the `contentBlock` key, you can add your own markup that is specific to this new page. For more information, view our documentation on [view inheritance](https://cloud.mobify.com/docs/adaptivejs/adapting/views/#/view-inheritance/) and [block overrides](https://cloud.mobify.com/docs/adaptivejs/adapting/dustjs-cheat-sheet/#/block-overrides/).

9. In the `contentBlock` key, add the two keys that you defined in the corresponding view file:

    ```
    {<contentBlock}
        {title}
        {listing}
    {/contentBlock}
    ```

10. View the category page in your browser.

    A page similar to the one in the previous step appears but now only with the title and listing as contents.

11. Stop the preview with the `[control] c` command on the command line.

##Continue to Step 3

Once you set up the miew, add some styling to it. Run the following command to move on:

```
git reset --hard HEAD && git clean -df && git checkout step-3-style-category-page
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-3-style-category-page/README.md) of the Step 3 branch.
