/*
----------------------------------------
_____________________Initial Installation_______________________
* 1. visit: console.firebase.google.com
* 2. create project (skip google analytics)
* 3. Register app (create config)
* 4. install firebase : npm install firebase
* 5. Add config your project
* 6. DANGER: Do not publish or make firebase config to public by pushing to github
               ______________INTEGRATION____________________
* 7. Visit: Go to Docs > Build > Authentication > web > get Started 
* 8. export app from the firebase.config.js file: export default app
* 10. Create const auth = getAuth (app)
              __________________PROVIDER SETUP_________________
* 11. import googleAuthProvider and create a new provider
* 12. use signUpWithPopUp and pass auth and provider
* 13. activate sign-in method ( google, facebook, github) 
* 14. [vite]: change 127.0.0.1 to localhost
*/