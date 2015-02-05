#Step 1: Generate a View

In addition to generating a new project, the Adaptive.js Generator has a sub-generator that can be used to set up a new view for your project. The sub-generator will create:
* a view file
* the dust template
* a view-script file
* a view test file.


##Task

###Create a new view called 'category'

1. Run the following command in the terminal within your project folder.

    ```
    yo adaptivejs:view
    ```

2. When prompted for a name type `category` and hit enter
3. Select `base` as the view to extend and hit enter

    ![View Generator](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/VXQhsUYEz8Jjnqj/Screen%20Shot%202015-01-15%20at%205.05.49%20PM.png)

4. Now need to add the view to the router file. Open the file `router.js` found in the adaptation folder of your project
5. Add the path for the new view file to the dependecies array.
6. List the view (Category) as an argument in corresponding function definition


    ![Add View to Router](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/cbyB4QiZs1m2KgY/Screen%20Shot%202015-02-05%20at%201.18.21%20PM.png)

7. Remove the generated calls to router.add() and replace them with the following:

    ```
    router
        .add(Router.selectorMatch('body.home'), Home)
        .add(Router.selectorMatch('body.category'), Category);
    ```


    The .add() function creates a new route that will load the given view when the function returns a truthy value. Router.selectorMatch() returns true when an element matching the selector exists on the current page.

8. Run `grunt preview`
9. [Preview](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) to http://www.merlinspotions.com/potions in your browser

    You should see a page similar to the homepage, but with content from the category page included under the header.

10. Stop preview by typing `ctrl c` in the terminal window.

##Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-2-populate-category-page
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-2-populate-category-page/README.md)
