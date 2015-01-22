#Step 9: Implement Tab Behaviour on the Home Page.

##Task

###Add click handlers to the homepage view-script

1. Open `home.js` found under /assets/js/ui/view-scripts
2. In the homeUI function, add a click handler for `.js-tab__header`

    ![Tab click handler](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/Uj39dM3AuQnPuAC/Screen%20Shot%202015-01-20%20at%2010.38.55%20AM.png)

3. Within the new click handler add an active class to the clicked tab, and remove the active class from all other tabs.

    ![Tab active class](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/4NkNIKLoY5J3I3w/Screen%20Shot%202015-01-20%20at%2010.40.54%20AM.png)

    We'll use this class to apply a few styles to active tabs.

4. Update the click handler so that an active class is added to the corresponding tab section and make sure that the active class is removed from other tab sections.

    ![Tab section active class](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/wlJ79QrtMDzx4Zw/Screen%20Shot%202015-01-20%20at%2010.49.29%20AM.png)

5. Finally, trigger a click on the first tab.

    ![Trigger click](https://s3.amazonaws.com/uploads.hipchat.com/15359/64553/YyVccSknECqyMJy/Screen%20Shot%202015-01-20%20at%2010.47.42%20AM.png)

6. Run `grunt preview`
7. Preview the homepage in your browser
8. Test that the active classes are applied correctly by inspecting the tabs

We'll add the tab styling along with the styling for the active classes in the next step.


## Ready to Continue?

When you're ready to continue, run the following command:

```
git clean -f && git checkout step-10-style-homepage
```

Then, follow the directions in that branch's [README](https://github.com/mobify/workshop--adaptivejs-site/blob/step-10-style-homepage/README.md)