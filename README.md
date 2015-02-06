#Step 7: Style the Footer

The footer contains a new component that we haven't styled yet, the newsletter. We'll need to add a new component SCSS file to style that. We also need to add a few styles to the existing button component. Finally, we'll add some template specific styles for the footer partial.

##Task

###Style the Footer

1. Add a new component scss file called `_newsletter.scss` with the following styles

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

2. Open `_button.scss` found under **/assets/styles/components**

3. Add the following to the file:

    ```SCSS
    .c-button.c--accent {
        border: 0;

        background-color: $accent-color;

        color: white;
    }
    ```

4. Add a new file called `_footer.scss` under **/assets/styles/templates/partials**

5. Add the following to the new file:

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

6. Open `_templates.scss` found under **/assets/styles**
7. Add the `_footer.scss` file to the list of templates (make sure you have the correct path)

    ```SCSS
    // Partial Templates
    // -----------------
    // Like headers, footers

    @import 'templates/partials/header';
    @import 'templates/partials/footer
    ```

8. Run `grunt preview`
9. Preview the potions category page in your browser

    Your footer should now look like this:

    ![Footer](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/KcuPmBLRbJMAG0Y/Screen%20Shot%202015-01-19%20at%201.28.56%20PM.png)


## Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-8-update-homepage
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-8-update-homepage/README.md)
