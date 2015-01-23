#Set Up the Project

One of the tools that you installed previously was the Adaptive.js Generator. We'll use that generator to set up the folder structure for a new project.

##Create a New Project Using the Generator

1. Open the terminal and cd into the folder containing this repo
2. Run the following command:

    ```
    yo adaptivejs
    ```
3. When prompted type `workshop--adaptivejs-site` for the project name and hit enter

    *screenshot here*

4. Type `http://www.merlinspotions.com` as the URL of the project and hit enter

    *screenshot here*

5. Type `y` to using dust templating and hit enter

    *screenshot here*

6. Type `y` to using Mobify's Vellum framework and hit enter

    *screenshot here*

7. Type `y` to using the Nightwatch testing framework and hit enter
    
    *screenshot here*

8. Type `y` to linting your JavaScript files and hit enter

    *screenshot here*

9. Type `n` to using PRE and hit enter

    *screenshot here*

10. Select `Zepto` and hit enter

    *screenshot here*

11. Select the most recent version of Zepto and hit enter

    *screenshot here*

12. View the contents of the folder that was created

    *screenshot here*

    The adaptation folder is where you'll find the router, the view files and the template files.

    The assets folder contains files that will be used on the mobile version of the site. This includes the sites SCSS files, any images we add and JavaScript that runs on the page after it's been adapted.

    The bower_components folder contains plugins and other JavaScript tools that we'll use on the site.

    The node_modules folder contains the Node modules used by the project.

    The Gruntfile.js file defines tasks you may want to run, such as building your project, running tests, and uploading bundles to the Mobify Cloud.

    The package.json file defines your project information, such as its name, project slug, and dependencies.


To test your installation, please follow these directions on previewing:

[Previewing your Adaptation](https://cloud.mobify.com/docs/adaptivejs/getting-started/#/previewing-your-adaptation/)


##Ready to Start

Once you've previewed the site, you're ready to move on to the next step. 

Run the following command to proceed:

```
git checkout step-1-generate-view
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-1-generate-view/README.md)

## Some Additional Information

We've already done the initial set up for this project, however in the future to set up a new project you can use the generator that you installed in the install guide. Take a look at the [generator's readme](https://github.com/mobify/generator-adaptivejs) for more information on using it.