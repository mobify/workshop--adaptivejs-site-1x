#Step 6: Update the Footer

With the header done, let's move on to last part of this page, the footer. Start to add content to the template and to make a few adjustments to the markup. This prepares the files for Step 7, where you style the footer.
##Task

###Add Content to the Footer

1. In Terminal, ensure you are in the `workshop--adaptivejs-site` directory. On the command line, enter the `grunt preview` command to start the preview.
2. [Preview the Adaptive.js Site](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server) in your browser. Use `http://www.merlinspotions.com/potions` as the site URL.

    Make changes to the footer HTML. As you do, refresh the page to see your changes take effect.

3. In an editor app, from the `/adaptation/views/includes` folder, open the `_footer.js` JavaScript footer file.
4. Inside the `context` block, remove the entire `documentationLink` function.
5. Inside the `context` block, add these functions to select and to return the newsletter sign up and copyright text with the following code snippet:

    ```javascript
    context: {
        newsletter: function() {
            return $('.footer-newsletter');
        },
        copyright: function() {
            return $('copyright');
        }
    }
    ```
    
    Save the changes to your `_footer.js` file and close it.

6. In your editor app, from the `/adaptation/templates/partials/` folder, open the `_footer.dust` Dust template footer file.
7. Remove the contents of the `<footer>...</footer>` block. Add the two new `newsletter` and `copyright` footer elements to the template file:

    ```html
    {#footer}
        <footer class="t-footer" role="contentinfo">
            {newsletter}
            {copyright}
        </footer>
    {/footer}
    ```

8. Wrap each element in a `<div>` tag. Use the classes in the snippet below:

    ```html
    {#footer}
        <footer class="t-footer" role="contentinfo">
            <div class="t-footer__form">
                {newsletter}
            </div>
            <div class="t-footer__fineprint">
                {copyright}
            </div>
        </footer>
    {/footer}
    ```

    Save your changes to the `_footer.dust` template file and close it.

9. Open the `_footer.js` footer view file from Step 3 again to change the newsletter element.
10. Inside the `newsletter` element function, add the `c-button` and `c--accent` classes to the button just above the return line.

    ```javascript
    context: {
        newsletter: function() {
            var $newsletter = $('.footer-newsletter');

            $newsletter.find('button').addClass('c-button c--accent');

            return $newsletter;
        },
        copyright: function() {
            return $('copyright');
        }
    }
    ```

11. Wrap the `input` and `button` in a `c-newsletter` class with the following code snippet:

    ```javascript
    context: {
        newsletter: function() {
            var $newsletter = $('.footer-newsletter');

            $newsletter.find('input, button').wrapAll('<div class="c-newsletter"></div>');
            $newsletter.find('button').addClass('c-button c--accent');

            return $newsletter;
        },
        copyright: function() {
            return $('copyright');
        }
    }
    ```

    Save the `_footer.js` footer file again and close it.
    
    The view file now looks like this:

    ![Footer view file](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/UQGjgCJTk5owpRc/Screen%20Shot%202015-02-05%20at%204.27.54%20PM.png)
    
    Refresh the Potions preview page. Scroll to the bottom to see the footer.

12. Stop the preview with the `[control] c` command in Terminal.

## Continue to Step 7

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-7-style-footer
```

Then, follow the directions in the [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-7-style-footer/README.md) in the Step 7 branch.
