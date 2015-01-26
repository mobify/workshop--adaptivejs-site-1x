#Step 6: Update the Footer

We're done with the header, so now let's move on to last part of this page, the footer. We'll start with adding content to the template and making a few adjustments to the mark up that will come in handy later when we look at styling it.

##Task

###Add Content to the Footer

1. Open `_footer.js` found under /adaptation/views/includes
2. Remove the `documentationLink` function
3. Add functions to select and return the newsletter sign up and copyright text

    ```
    context: {
        newsletter: function() {
            return $('.footer-newsletter');
        },
        copyright: function() {
            return $('copyright');
        }
    }
    ```

3. Open `_footer.dust` found under /adaptation/templates/partials/
4. Add the two footer elements to the template file

    ```
    {#footer}
        <footer class="t-footer" role="contentinfo">
            {newsletter}
            {copyright}
        </footer>
    {/footer}
    ```

5. Wrap each element in a div within the template file. Use the classes below:

    ```
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

6. Open the footer view file again, so we can make a few changes to the newsletter element
7. Add the classes `c-button` and `c--accent` to the button found in the newsletter element
8. Wrap the input and button in a div with the class `c-newsletter`

    ```
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

## Ready to Continue?

When you're ready to continue, run the following command:

```
git reset --hard HEAD && git clean -df && git checkout step-7-style-footer
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-7-style-footer/README.md)