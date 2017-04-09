# Frontend Interview boilerplates

This repo contains a collection of basic boilerplate apps in various modern frontend frameworks to be used during Frontend Engineer interviews

## Quick Start
* create a branch for your canidate. `git checkout -b firstName-lastName`.
* switch to the folder of the framework of your choice
* run ```npm install``` to install gulp and bower dependencies
* run ```npm start``` to launch the web server
* Access the boilerplate app at [http://localhost:8080](http://localhost:8080)
* commit the canidates work. `git add . && git commit`.
* push the work reference. `git push origin`.

## Conversation jumping off points

I find this works better if viewed as a conversion instead of an interrogation. Use these prompts to start talking, your goals are many fold. Interview training suggests this be done toward the end of an interview, after the technical evaluation.

1. Does this person know frontend dev?
2. Will this person grow as an engineer while working with you?

* Tell me about what you have been working on recently? (ice breaker)
  * What's your role in that? (optional follow up)
  * What new things did you learn on that? (optional follow up)
  * What was was the biggest headache on that? (optional follow up)
* What tools do you use in your workflow?
  * looking for sass/less... etc, grunt/gulp... etc or other interesting stuff
  * Did/do you maintain these things?
* Pick a tool he/she said they use/enjoy, ask them to critique it ("what would you change about X?").
  * looking to see if they can consider a better way than whatever they are handed.
* Things to look for in technical details:
  * tab items should be ```<li>``` that can receive focus with aria attr.
  * is content all in DOM at start or is it dynamically swapped? Either way ask why they did it the way they did.
  * simple css
  * simple markup
  * did/how was JS used? was it overly complex?
  * Bonus if they did well, update the URL for tab changes, along linking to specific tab.
* what is your experience with version control/git? explain how they use it.
* give me 10 ways you could make a webpage more efficent
  * enable client side caching
  * sprites
  * minify html/css/js
  * shared domains
  * use cdn
  * optimize images for web
  * script tags at end of page
  * lots more things, basically looking to be sure they understand how a website comes to be on a users computer.
