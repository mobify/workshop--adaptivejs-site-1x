#Step 1: Generate a View

In addition to generating a new project, the Adaptive.js Generator has a sub-generator that can be used to set up a new view for your project. The sub-generator will create a view file, the dust template, a view-script file and a view test file.


##Task

###Create a new view called 'category'

Start by running the following command in the terminal within your project folder.

```
yo adaptivejs:view
```

1. When prompted for a name type `category` and hit enter
2. Select `base` as the view to extend and hit enter

    ![View Generator](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/VXQhsUYEz8Jjnqj/Screen%20Shot%202015-01-15%20at%205.05.49%20PM.png)

    We've generated all the files we need for a view, but we now need to add the view to the router file.

3. Open the file `router.js` found in the adaptation folder of your project
4. Add the path for the new view file to the dependecies array.
5. List the view (Category) as an argument in corresponding function definition

    ![Add View to Router](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/2ISxRvJ4zAQItfs/Screen%20Shot%202015-01-16%20at%2010.16.10%20AM.png)

    Now that the new view is included in the router file, we need to define when the router should use that view.

6. Remove the generated calls to router.add() and replace them with the following:

    ![Add Route for Category](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/IPlrxZHNWkmHwBI/Screen%20Shot%202015-01-16%20at%2010.19.19%20AM.png)

    The .add() function creates a new route that will load the given view when the function returns a truthy value. Router.selectorMatch() returns true when an element matching the selector exists on the current page.

8. Run `grunt preview`
9. Preview to http://www.merlinspotions.com/potions in your browser

You should see a page similar to the homepage, but with content from the category page included under the header.

##Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-2-populate-category-page
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-2-populate-category-page/README.md)
