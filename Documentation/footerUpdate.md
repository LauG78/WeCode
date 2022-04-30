## Updates to footer 30/04/2022 ##
### Issue ###
- Footer was not seen as one block by html, only copyright disclaimer was seen as footer
- Footer was overlapping contenr
- Footer was not staying on bottom
### Solutions ###
- HTML
  - Removed the section and gave the id to the footer itself
  - Renamed footer__container to footer__content for easier html reading
  - renamed copyright div to copyright__container for easier reading
- CSS
  - Make whole footer position relative (it will always come after whats in the main)
  - Took previous properties out of footer__Container and ID and split them between existing ones
- GLOBAL CSS BIG CHANGES
  - Global is now a partial! - not having it as a partial resulted in import errors after compilation by SASS
    - import it in your sass file by using ```{@import 'global';}```
    **^^^^^^^^^^Very important everyone does this in their SASS file I didnt do it for you to prevent merge conflicts^^^^^^^^^^**
    - Global turns the body of your page into a flexbox! (so some elements might inherit this)
      - Remember you can easely remove inherited properties with property:unset
       - for example: ```{justify-content: unset;}``` will remove whatever it was set to
    - WHY IS THE BODY A FLEXBOX ?
      - This way we can ensure our pages fill the whole screen vertically with ```{min-height:100vh}```
      - By using ```{flex-direction: column;}``` we make sure all content still stacks on top of eachother
      - By using ```{justify-content: flex-start;}``` we make sure everything in our body still starts at the top of the screen
      - Now we can add ```{margin-top:auto;}``` to our footer and flexbox will ensure the footer is always nicely position at the bottom no matter howmuch content the page has

### What should I do now ? ###
- Thanks to Mo's nice footer design not a lot had to change to achieve this update :D
- had to use no media queries everythign still looks nice on all screen sizes :D
 - **KUDOS TO MO!!!**
- The Footer changes have been implemented on every page
- Checkout your branch
- and merge the main branch into your branch to get these updates
### What will this do to my page ? ###
- I discovered this issue working on my page
  - This will ensure your content will not be overlapped by the footer
  - This will ensure that if your page hasn't got enough content to fill a full screen the footer will be nicely visible
  - This ensures that if your page has a lot of content, the footer will put itself nicely beneith it

  ### HELP I HAVE MERGE CONFLICTS ? ###
  - Please reach out, I'm happy to guide you trough them
   - Man i didnt want this extra work !!!
     - I made these changes so you'll have an easier time building your page
  - I really can't have these merge conflicts in my brain right now
   - As I am responsible for these changes feel free to reach out and i will merge them into your branch for you and save you the headache

   - I want to do it myself I don't need help, but do you have some tips ?
     - Open up the page you have merge conflicts with on github
     - Take a look at the code over there and try to match it in your branch
       - This has helped me a lot!
