#Step 6: Update the Footer

We're done with the header, so now let's move on to last part of this page, the footer. We'll start with adding content to the template and making a few adjustments to the mark up that will come in handy later when we look at styling it.

##Task

###Add Content to the Footer

1. Run `grunt preview`
2. [Preview](https://cloud.mobify.com/docs/adaptivejs/getting-started/new-project/#/start-adaptivejs-server)  to http://www.merlinspotions.com/potions in your browser

    We'll be making changes to the footer's HTML, refresh the page as you go to see the results of the changes.

3. Open `_footer.js` found under /adaptation/views/includes
4. Remove the `documentationLink` function
5. Add functions to select and return the newsletter sign up and copyright text

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

6. Open `_footer.dust` found under /adaptation/templates/partials/
7. Add the two footer elements to the template file

    ```html
    {#footer}
        <footer class="t-footer" role="contentinfo">
            {newsletter}
            {copyright}
        </footer>
    {/footer}
    ```

8. Wrap each element in a div within the template file. Use the classes below:

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

9. Open the footer view file again, so we can make a few changes to the newsletter element
10. Add the classes `c-button` and `c--accent` to the button found in the newsletter element
11. Wrap the input and button in a div with the class `c-newsletter`

    ```javascript
    context: {
        newsletter: function() {
            var $newsletter = $('.footer-newsletter');

            $newsletter.find('input, button').wrapAll('<div class="c-newsletter">');
            $newsletter.find('button').addClass('c-button c--accent');

            return $newsletter
        },
        copyright: function() {
            return $('copyright');
        }
    }
    ```

    The view file for the footer should end up looking like this:

    ![Footer view file](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/UQGjgCJTk5owpRc/Screen%20Shot%202015-02-05%20at%204.27.54%20PM.png)

12. Stop preview by typing `ctrl c` in the terminal window.

## Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-7-style-footer
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-7-style-footer/README.md)