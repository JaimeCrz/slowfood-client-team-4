# Slowfood challenge Team 4  (client)

### Authors
[Robin Lillqvist](https://github.com/robin-lillqvist)  
[Jaime Cruz Hostalot](https://github.com/jaimeCrz)  
[Janko Radakovic](https://github.com/MadFarmer101)
[Daniel Bryant](https://github.com/DanielGITB)  

## Built with
**Front End:** React v.16.12.0 | CSS  
**Back End:** Ruby 2.5.1 | Rails 6.0.2 
**Testing framework:** Cypress  
**Deployed at:** [Netlify](https://slowfoodchallenge.netlify.com/) and [Heroku](https://slowfood-group4.herokuapp.com/).

## The code   
This project is the client facing side of our Slowfood application. The master repository for the Slowfood API, built in Rails, can be found [Here](https://github.com/CraftAcademy/slowfood_api_team_1).

## Getting started
### Dependencies  
* Yarn
* React
* Cypress
* Axios

### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:* Be sure to set up backend api first (noted above), in order to fully interact with the application. 
Install all of the dependencies:    
```
$ yarn install
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the backend api (if already configured) in a separate terminal (only run this command for the Rails application):
```
$ rails s
```
Start the React application and run it on your local host:
```
$ yarn start
```

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)