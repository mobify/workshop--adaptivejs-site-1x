#Set Up the Project

One of the tools that you installed previously was the Adaptive.js Generator. We'll use that generator to set up the folder structure for a new project.

##Create a New Project Using the Generator

1. Open the terminal and cd into the folder containing this repo
2. Run the following command:

    ```
    yo adaptivejs
    ```
3. When prompted type `workshop--adaptivejs-site` for the project name and hit enter

    ![Project Name](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/UAfzq5whtPon5UV/Screen%20Shot%202015-01-22%20at%204.12.37%20PM.png)

4. Type `http://www.merlinspotions.com` as the URL of the project and hit enter

    ![Project URL](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/7buMlNzOgC2laMf/Screen%20Shot%202015-01-22%20at%204.13.48%20PM.png)

5. Type `y` to using dust templating and hit enter

    ![Dust Templating](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/oqbf2lAduDXzTTk/Screen%20Shot%202015-01-22%20at%204.55.01%20PM.png)

6. Type `y` to using Mobify's Vellum framework and hit enter

    ![Vellum](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/yVuAllBWOV3DbdI/Screen%20Shot%202015-01-22%20at%204.18.08%20PM.png)

7. Type `y` to using the Nightwatch testing framework and hit enter
    
    ![Nightwatch](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/5xGrRACwJ0wklx3/Screen%20Shot%202015-01-22%20at%204.19.05%20PM.png)

8. Type `y` to linting your JavaScript files and hit enter

    ![Lint JS](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/DD9IwuARtzyxoQo/Screen%20Shot%202015-01-22%20at%204.19.44%20PM.png)

9. Type `n` to using PRE and hit enter

    ![PRE](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/zW1rEVD0zVEHLMi/Screen%20Shot%202015-01-22%20at%204.20.17%20PM.png)

10. Select `Zepto` and hit enter

    ![jQuery or Zepto](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/eytQdVG1wlvW7Ro/Screen%20Shot%202015-01-22%20at%204.20.50%20PM.png)

11. Select the most recent version of Zepto and hit enter

    ![Zepto Version](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/pgGyeLJEcpGlkbC/Screen%20Shot%202015-01-22%20at%204.21.34%20PM.png)

12. View the contents of the folder that was created

    ![Project folder contents](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/ttx79uuNjVCzD0K/Screen%20Shot%202015-01-22%20at%204.33.50%20PM.png)

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
git reset && git clean -f && git checkout step-1-generate-view
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-1-generate-view/README.md)

## Some Additional Information

The generator that we used to create the project also has a default setting, which will automatically choose the same settings that we used above. In the future you can generate projects using the defaults by typing:

```
yo adaptivejs --defaults mobify
```

For more information on options available for the generator, view the [generator's readme](https://github.com/mobify/generator-adaptivejs).

