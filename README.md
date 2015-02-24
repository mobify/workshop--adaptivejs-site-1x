#Step 7: Style the Footer

Let's now style the newsletter component of the footer. In this tutorial, you repeat tasks that you are already familiar with. Add a new component SCSS file to style the footer. Then add styles to the existing button component. Finally, add template-specifc styles for the footer partial.

##Task

###Style the Footer

1. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
2. Work through the third section, [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) of the Getting Started (New Project) guide. Use the http://www.merlinspotions.com/potions URL for the Site URL form field.
3. Add a new component scss file called `_newsletter.scss` with the following styles

    ```SCSS
    // Newsletter
    // ===
    //
    // 1. Legacy flexbox fix

    .c-newsletter {
        display: flex;

        .c-button {
            display: block; // 1
            flex: 0 0 auto;
            margin-left: $small-h-space;
        }
    }
    ```

4. In your editor app, from the `/assets/styles/components` folder, open the `_button.scss` file.

5. Add the style following to the file:

    ```SCSS
    .c-button.c--accent {
        border: 0;

        background-color: $accent-color;

        color: white;
    }
    ```
    
    Save the `_button.scss` file and close it.

6. In the editor, in the `/assets/styles/templates/partials` folder, create a new `_footer.scss` file.

7. Add the following style snippet to the new file:

    ```SCSS
    // Footer
    // ===

    .t-footer {
        text-align: center;

        h3 {
            font-family: $serif;
            font-style: italic;
            font-size: 15px;
        }

        p {
            margin: $v-space 0;

            font-size: 12px;
        }
    }


    // Footer: Form
    // ---

    .t-footer__form {
        padding: $v-space $h-space;

        .c-newsletter {
            @include clearfix;

            padding: $v-space 0;
        }
    }


    // Footer: Fineprint
    // ---

    .t-footer__fineprint {
        display: block;
        padding: $v-space 0;

        background: $grey-90;

        color: $grey-55;
        font-size: 12px;
    }
    ```

8. In the editor, from the `/assets/styles` folder, open the `_templates.scss` style file.
9. Add the `_footer.scss` file to the list of templates. Ensure that you specify the path correctly.

    ```SCSS
    // Partial Templates
    // -----------------
    // Like headers, footers

    @import 'templates/partials/header';
    @import 'templates/partials/footer
    ```

10. Refresh the Potions category page from Step 2.

    The footer now looks like this:

    ![Footer](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/KcuPmBLRbJMAG0Y/Screen%20Shot%202015-01-19%20at%201.28.56%20PM.png)


11. Stop the preview with the `[control] c` command in Terminal.

## Continue to Step 8

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-8-update-homepage
```

Then, follow the directions in the  [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-8-update-homepage/README.md) in the Step 8 branch.
