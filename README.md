#Step 1: Generate a View

In addition to generating a new project, the Adaptive.js Generator has a sub-generator that can be used to set up a new view for your project. The sub-generator will create a view file, the dust template, a view-script file and a view test file.


##Task

###Generate a view called 'categories'

Start by running the following command in the terminal within your project folder.

```
yo adaptivejs:view
```

1. When prompted for a name type `categories` and hit enter
2. Select `base` as the view to extend and hit enter

*screenshot here*

We've created a new view, but the router doesn't know about it yet. In order to see the view we need to tell the router when it should be used.

3. Open the file `router.js` found in the adaptation folder of your project
4. Add the path for the new view file to the dependecies array.
5. List the view (Category) as an argument in corresponding function definition

*screenshot here*

Now that the new view is included in the router file, we need to define when the router should use that view.

6. Remove the generated calls to router.add() and replace them with the following:

*screenshot here*

The .add() function creates a new route that will load the given view when the function returns a truthy value. Router.selectorMatch() returns true when an element matching the selector exists on the current page.


8. Run `grunt preview`
9. Preview to http://www.merlinspotions.com/potions in your browser

You should see a page almost identical to the one you saw before, but if you inspect the #x-root element you'll see it has the class t-category, instead of t-home.

##Ready to Continue?

When you're ready to continue, run the following command:

```
git clean -f && git checkout 
```
