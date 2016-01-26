# gmit-catering-test-server
A test node/express server for the "GMIT Catering" mobile app.

Heroku Deployed Web Server:
https://catering-test-server.herokuapp.com/

In order to change from the production server and this development server, you must change one variable.

That variable is located in the *www/app.js* file, at the bottom.  
Just uncomment the dev server url and comment the production server url.  

```js
  .constant('SERVER', {
    // development server
    //url: 'https://catering-test-server.herokuapp.com/',
    
    // production server
    url: 'http://canteenapplication.vmarisevs.me/mobileapplication/',
  });
```

You can view all the routes and respective input and output.  

*test-server.js* contains all the routes, it's coded with node/express.