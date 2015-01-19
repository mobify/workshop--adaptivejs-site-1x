#Step 6: Update the Footer

We're done with the header, so now lets move on to last part of this page, the footer. We'll start with adding content to the template and making a few adjustments to the mark up that will come in handy later when we look at styling it.

##Task

###Add Content to the Footer

1. Open `_footer.js` found under /adaptation/views/includes
2. Remove the `documentationLink` function
3. Add functions to select and return the newsletter sign up and copyright text

    ![Newsletter and copyright in view](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/ly5Fa1XROUNc1DV/Screen%20Shot%202015-01-19%20at%2012.44.30%20PM.png)

3. Open `_footer.dust` found under /adaptation/templates/partials/
4. Add the two footer elements to the template file

    ![Newsletter and copyright in template](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/6ba569IE1y4ypn5/Screen%20Shot%202015-01-19%20at%2012.45.06%20PM.png)

5. Wrap each element in a div within the template file. Use the classes pictured:

    ![Add classes to newsletter elements](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/pSIIxys6vjlhhH5/Screen%20Shot%202015-01-19%20at%2012.47.56%20PM.png)

6. Open the footer view file again, so we can make a few changes to the newsletter element
7. Add the classes `c-button` and `c--accent` to the button found in the newsletter element
8. Wrap the input and button in a div with the class `c-newsletter`

    ![Wrap footer elements in template](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/2ZnSsCAPUQE8WVV/Screen%20Shot%202015-01-19%20at%2012.56.59%20PM.png)

## Ready to Continue?

When you're ready to continue, run the following command:

```
git clean -f && git checkout step-7-style-footer
```

