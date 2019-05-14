# :hamburger: Burger Shack!


### Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!
Please check out the launched app on Heroku [here](https://burgerr-shack.herokuapp.com/)!


### Functionality
Using an home-grown ORM, the app has 3 basic CRUD functions...
  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
  2. UPDATE a selected burger by clicking "Devour It", which...
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. CREATE a new burger using the "Place Order" form, which...
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)





### Screenshots
- Desktop View
  * ![Full Size](https://github.com/harshpaddle/burger-shack/blob/master/public/assets/images/Screen%20Shot%202019-05-13%20at%2010.35.52%20PM.png)


