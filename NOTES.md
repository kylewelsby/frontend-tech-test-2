# SamKnowns Frontend Code Challenge

## 2020-08-07 17:00:00
Starting with getting boiler plating a project using Vite.
You might notice the re-organisation of the challenge source files to `./__DESIGNS__` and `./src/utils/flatten.js` which feel like an ideal place for them in the project right now. 

## 2020-08-07 17:20:00
The project uses Vue.js with the opinionated Vite builder for simplicity. 

Now I'm going to get the basic functionality of the project running.  My intent is to use [XState.js](https://xstate.js.org/) and [TailwindCSS](https://tailwindcss.com/)

## 2020-08-07 17:49:00
Committed base skeleton

Wiring up the API to finalise the core functionality, then quickly finish off the design to keep the core ability within given time allocation. 

## 2020-08-07 18:48:00

Implemented the design as provided in the `.png` and ensured it is reactive with best intentions. 

Now let's take on the challenge of the `src/utils/flatten.js` project.

## 2020-08-07 19:31:00

Introduced Jest unit-testing framework to test the expectations for `src/utils/flatten.js`.  Refactored the code to use reducers and checks for objects.

## 2020-08-07 19:50:00

Adding final touches like a `./README.md` and ensuring the quality of the resulting code at this time is as I expect. 

Should I have had more time, I would have liked to use [XState.js](https://xstate.js.org/) to manage the state machine of the API requests and separate the main component into smaller focused components on the off-chance they'll benefit from reusability. 

For now, everything for this simple example is in one document to keep the state management simple.

## 2020-08-07 20:56:00

Extra mile, decided to ensure the happy path works with Cypress.io end-to-end testing gives me better confidence. 


# Final Notes
>Why did I not approach this project with Test Driven Development first?

That's a great question Test Driven Development is excellent on projects, and I truly value the confidence testing gives. 
As the initial core of this Code Challenge assignment was to make a screenshot design into a functional bit of code, some areas needed to be explored and prototyped before confidence that I know what to test.  
Unit tests for the Vue.js code are not present as the setup time for the project takes a while to get fully reliable, and I wanted to see and deliver a working example instead of half-finished code. 

> Why did this code challenge take you a little longer than 3 hours to complete?

Well, the core design-to-code part took about in 1-hour 40ish minutes and focus was turned to the `src/utils/flatten.js` challenge thereon.  That challenge had an exciting curveball in it, 👏 good one.  You will notice unit tests for this, and I see no other way I would be able to approach this part without unit testing. I completed it in about 40 minutes. 

I then switched attention back to the entire project as a whole to evaluate the quality of base code without going too overboard with re-writing everything into design system components etc.  

I felt the need to add End-to-End tests to finally ensure the satisfactory confidence of what I am delivering meets my expectations and the user stories.

Completing or delivering this assignment with working functional code as specified in brief is more important than a delivery deadline. 

> What would you like to do next on this?

Yeah, as explained earlier, I would have liked to separate the component into a few areas for better separation of concerns.  But I was not confident with time I would get the communication between the components working right as expected without VueX or state management which would be a little over-kill for this. 
StateX.js would have been a choice to turn to manage states such as initial loading, what the flow can do and error states with end states. Unfortunately again, this was a little bit beyond what I set out to do within 1.5 hours. 

I snook in CI and Deployment to GithubPages at the very end.

👉 https://kylewelsby.github.io/samknows-code-challege/ 👈

Thanks for allowing me to complete this challenge.

🙏🏾