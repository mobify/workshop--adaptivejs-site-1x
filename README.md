#Step 7: Style the Footer

The footer contains a new component that we haven't styled yet, the newsletter. We'll need to add a new component SCSS file to style that. We also need to add a few styles to the existing button component. Finally, we'll add some template specific styles for the footer partial. 

##Task

###Style the Footer

1. Add a new component scss file called `_newsletter.scss` with the following styles

    ![Newsletter styles](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/dFVpSy98wVejeZB/Screen%20Shot%202015-01-19%20at%201.37.13%20PM.png)


2. Open `_button.scss` found under /assets/styles/components
3. Add the following to the file:

    ![Additional Button styles](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/k2lEmoQCuMNb2EN/Screen%20Shot%202015-01-19%20at%201.23.35%20PM.png)

4. Add a new file called `_footer.scss` under /assets/styles/templates/partials
5. Add the following to the new file:

    ![Footer styles](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/HKDf4OmcQicXMms/Screen%20Shot%202015-01-19%20at%201.24.24%20PM.png)

6. Open `_templates.scss` found under /assets/styles
7. Add the `_footer.scss` file to the list of templates (make sure you have the correct path)

    ![Add footer to templates scss](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/XOqVNqsdNFxbG8A/Screen%20Shot%202015-01-19%20at%201.24.45%20PM.png)

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
