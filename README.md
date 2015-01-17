#Step 4: Update the header

The Adaptive.js generator has already created a header view and template for us, but we need to add some content to it from the site.

##Task 

###Add Content to the header

1. Open `_header.js` found under /adaptation/views/includes
2. Remove the `title` key and replace it with the following:

    *screenshot here*

3. Open `_header.dust` found under /adaptation/templates/partials
4. Replace the content within `<header>` with the following:

    *screenshot here*

5. Inspect the logo on the desktop site.

    The logo is being included as a background image, that won't work for our build since we're not including the desktop css on the page. We'll need to add a copy of the logo to the project.

6. Browse to *logo url* and save the logo as `logo.png` under /assets/images
7. Open `_header.dust` again and add an img element for the logo:

    *screenshot here*

8. Run `grunt preview`
9. View the potions page in your browser


## Ready to Continue?

When you're ready to continue, run the following command:

```
git clean -f && git checkout *next-branch*
```

