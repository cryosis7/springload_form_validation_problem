# Springload Form Validation Problem
This is my attempt at Springloads Form Validation problem.  
The problem can be found in detail here: [https://github.com/springload/form-validation-problem/](https://github.com/springload/form-validation-problem/)

## My Strategy:
I decided to use React with Material UI rendered components. I made this choice because Material UI offers professional responsive components with accessibility and portability largely built in, and considering I was under time constraint, I wasn't going to be able to implement these from scratch.  

The script can be run with:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Reflections
Having used Material UI(MUI) in the past, I thought I would be able to quickly put together a form that met the criteria of the project. Half way through however, I discovered that last week MUI had released their next major version, which had deprecated many features I was familiar with and introduced new concepts that I had to learn in order to get the styling working. Because of these delays I overshot the targeted 2 hours.  
In hindsight, I should have set lower expectations and tried to complete it well within 2 hours, so that in the event of unknowns or other delays, I had time available to still get it completed on time; and if I completed it with time to spare I could have worked toward improving my design.

I am particulary satisfied with the portability of the form; how it retains a clean layout even when reduced to the size of a small phone screen. And thanks to MUI's compatibility, it appears to be touchscreen-friendly too so I'm confident in claiming this form is responsive.

As I was already overtime, I wasn't able to complete the error checking to satisfaction. I'm unhappy with the inconsistancy between error messages vs. disable submit button. If I had more time I would have liked to improve that.