#Set Up the Project

One of the tools that you installed previously was the Adaptive.js Generator. We'll be using that generator to set up the folder structure for a new project.

##Create a New Project Using the Generator

Right now you should have the terminal open to the workshop folder. If you don't, open the terminal and navigate to the workshop folder.
    ```
    cd workshop--adaptivejs-site
    ```

1. Run the following command:

    ```
    [sudo] yo adaptivejs
    ```

    **Note:** This command will eventually run `npm install` so depending on your permissions on the current directory, you may need to use `sudo`. 
    In general, if you run into permission errors when running any of the commands mentioned, try re-running the command using `sudo`.

2. When prompted type `workshop--adaptivejs-site` for the project name and hit enter

    ![Project Name](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/UAfzq5whtPon5UV/Screen%20Shot%202015-01-22%20at%204.12.37%20PM.png)

3. Type `http://www.merlinspotions.com` as the URL of the project and hit enter

    ![Project URL](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/7buMlNzOgC2laMf/Screen%20Shot%202015-01-22%20at%204.13.48%20PM.png)

4. Type `y` to using dust templating and hit enter

    ![Dust Templating](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/oqbf2lAduDXzTTk/Screen%20Shot%202015-01-22%20at%204.55.01%20PM.png)

    For our builds we use dust templating to build out the HTML structure of our pages. For more information on the dust templating syntax, view our documentation [here](https://cloud.mobify.com/docs/adaptivejs/adapting/dustjs-cheat-sheet/).

5. Type `y` to using Mobify's Vellum framework and hit enter

    ![Vellum](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/yVuAllBWOV3DbdI/Screen%20Shot%202015-01-22%20at%204.18.08%20PM.png)

    Vellum is a framework that we've created to add some default styles to the project. More information on Vellum can be found [here](https://github.com/mobify/vellum).

6. Type `y` to using the Nightwatch testing framework and hit enter
    
    ![Nightwatch](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/5xGrRACwJ0wklx3/Screen%20Shot%202015-01-22%20at%204.19.05%20PM.png)

    Nightwatch is a UI automated testing framework that uses Selenium. We've created a fork of the project that we use in our builds. The forked repo can be found [here](https://github.com/mobify/nightwatch). Selecting `y` here will also add some custom Nightwatch commands that we've created for testing our sites. Information on the custom commands we've added can be found [here](https://github.com/mobify/nightwatch-commands).

7. Type `y` to linting your JavaScript files and hit enter

    ![Lint JS](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/DD9IwuARtzyxoQo/Screen%20Shot%202015-01-22%20at%204.19.44%20PM.png)

    Selecting `y` here will mean that any time you preview your build all of your JavaScipt files will be checked to see if they follow our [code style guide](https://github.com/mobify/mobify-code-style). Style errors found in your project will be output in terminal, but it will not stop you from previewing the site.

8. Type `n` to using PRE and hit enter

    ![PRE](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/zW1rEVD0zVEHLMi/Screen%20Shot%202015-01-22%20at%204.20.17%20PM.png)

    PRE is one of our tools for website performance optimization. We're currently not including this in new projects by default.

9. Select `Zepto` and hit enter

    ![jQuery or Zepto](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/eytQdVG1wlvW7Ro/Screen%20Shot%202015-01-22%20at%204.20.50%20PM.png)

    Currently we're using Zepto by default on projects, so we'll use it for this project as well. Zepto provides some of the same functionality that jQuery does, but with a smaller file size. Documentation on Zepto can be found [here](http://zeptojs.com/).

10. Select the most recent version of Zepto and hit enter

    ![Zepto Version](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/pgGyeLJEcpGlkbC/Screen%20Shot%202015-01-22%20at%204.21.34%20PM.png)

11. View the contents of the folder that was created (either in the open terminal or in the finder)

    ```
        adaptation/
        assets/
        bower_components/
        node_modules/
        tests/
        tasks/
        Gruntfile.js
        package.json
        bower.json
    ```

    The **adaptation** folder is where you'll find the router, the view files and the template files.

    The **assets** folder contains files that will be used on the mobile version of the site. This includes the sites SCSS files, any images we add and JavaScript that runs on the page after it's been adapted.

    The **bower_components** folder contains plugins and other JavaScript tools that we'll use on the site.

    The **node_modules** folder contains the Node modules used by the project.

    The **Gruntfile.js** file defines tasks you may want to run, such as building your project, running tests, and uploading bundles to the Mobify Cloud.

    The **package.json** file defines your project information, such as its name, project slug, and dependencies.


**Note:** The generator has created a folder within the repository called `workshop--adaptivejs-site`. Which means our current folder structure contains two folders with the same name:

    /workshop--adaptivejs-site/workshop--adaptivejs-site/(project files)

To avoid any further confusion we've fixed this issue in the next step.

To test your installation, please follow these directions on previewing:

[Previewing your Adaptation](https://cloud.mobify.com/docs/adaptivejs/getting-started/#/previewing-your-adaptation/)


##Ready to Start

Once you've previewed the site, you're ready to move on to the next step. 

Run the following command to proceed:

```
git reset --hard HEAD && git clean -df && git checkout step-1-generate-view
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-1-generate-view/README.md)

## Some Additional Information

The generator that we used to create the project also has a default setting, which will automatically choose the same settings that we used above. In the future you can generate projects using the defaults by typing:

```
yo adaptivejs --defaults mobify
```

For more information on options available for the generator, view the [generator's readme](https://github.com/mobify/generator-adaptivejs).

