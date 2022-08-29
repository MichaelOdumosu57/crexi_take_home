# Notes
*  tried npx ng add @ngrx/schematics
* love the advances use of scss in src\custom-theme.scss
* noticed that jasmine is there but there no spec.ts and no ng test in package.json
* there is a linter getting upset when variables are not defined
* noted noUnusedLocals property in tsconfig.json
* is there extension out there to get type of large string or how can you get vscode to give you the type
* I have heard about string, type is there email type phone type

# Part 1 Steps

## Init steps
* I make an env class out of the environments so I can leverage patterns such as DRY and polymorphism
* I provide for the src\app\features\profile\store\index.ts barrel file so I can more easily organize my exports from store
* I immediately start setting up naming conventions for my entity to establish tightly-coupled associations
* I early stages make a function for information hiding so I can re use the logic to make simpler Effects called __UtilService.generateEntityEffect__ 
  * for __UtilService.generateEntityEffect__ I may want to figure out how I get my translation fn involved, transform the data before doing any work
  * trade off between knowing the type in the utility service, but I should not have to ever visit the utility service ever again


## Setting up the service
* Now I have setup my action and effect, I need translate logic to go on my service to transform the data to the required format
* FILE __src\app\features\profile\services\profile.service.ts__ 
  I setup getUserSuccess translation fn to update my apiModole to my uiModel

* FILE __src\app\features\profile\profile-detail\profile-detail.component.ts__
* I replace init profile action with loading get profile 
* I use the date pipe becuase you want you business logic and app logic, souce data and display data seperate, with the use of pipes you dont have to store your application data seperate, you just use the pople outpimizing storage
* I optimize the html so everything is not so hardcoded and I really want to implement ngx translate
  * In    FILE __src\app\features\profile\interfaces\user-profile.ts__     // tricky look at the naming convertion because I know im piping dob 

## Generate Overlay loading
* removed angular.json{}cli.defaultCollection because it was interering with schematic generation
* wanted to see how the org does styles
* noticed there is no variables for spacing and fontSize and I notied px were getting used, 
* loved the fact that were know flexbox and not just bootstrap
* from investigation it seems that page model is from core
* I saw that z-index in the header was set to 1035, do we need a course in z-index
* hard question whether to use store or service to toggle overlay loading, use store to keep consistency
* what I am worried about is the generidec type for store in utility.service what if it may need to do more than access layout state
* I setup delay on the API call so we can see the loading in action
* Here I decided to start to implemnent i18n because this something I wanted taken care of early in the project
* FILE __src\app\features\profile\profile-detail\profile-detail.component.html__
  I made the detailKey single since its the same information and provided for the i18n there

## Setting up Error handling
* the $colorError does not look like an error banner
* when I am setting up store for snack bar things are getting repititive lets see what I can do to mititaget
* I create snack-bar-content component to help allow for i18n in the snackbar

# Part 2 Steps

## Creating the profile list page and seeing it
* I used angular cli
* I updated __src\app\app.routes.ts__ and added profiles list
* I provided a bit of anmiation

## Setting up the service endpoint
* I add listUsers and listUsers translation fn
* I forced the reuse of the getUserSuccess fn by mutating the interface is this ok

## Setting up the store
* I mirror store against the getProfile logic
* I provide for logic in profile-list to only get list if the result if ProfileState.users is empty

## Getting the user from the route
* I set up my selector pickUserProfile
  * __ODD__ somehow currentUserId is coming up a string evenhtough it was type 2 a number
* I had to make a container component profile-main that will retrieve the list of users

# Extras 

## Implement i18n
* I implemented the logic in the header component
* I saw some use of absolute positioning and translate for hardcoded position, cleaned that up a bit

## Implement SSP in profile list
* I refereneced old code
* If the current route was not profile I told it not to do anything
* Thought about resolve service but that may not help with ssp
* how can you tell if the current cards have not reached the bottom of the list
* __src\app\features\profile\profile-main\profile-main.component.ts__ initLoadONScrollBottom may cause to fire too many times
* I want to try to optimize what profile main is doing

## Make it Responsive
* made the header responsive

# Questions
* I did development with a very different styling syntax how can I learn synatax standards
* I see your convetions for naming .html and .scss how can I get the @angular-eslint/schematics to work
* How do I update the loading text incase something is taking too long
* structural directive *ngIf *ngSwitchcase, the values may never change how can I get that not to render on the html



# TODO

## Optimizations

* Avoid get all in profile list
* turn card into library
* bring in only one icon to be used by material icon libary, lessing api call
* generic size your entity research ngrx entity
* Fallback img incase orignial is missing