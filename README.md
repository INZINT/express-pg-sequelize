# INZINT

## Demo app using NodeJs, ExpressJs, Postgresql and Sequelize

Install globally
* `npm install -g sequelize-cli`
* `npm install -g pg`

To run locally:

* Make sure you have install and run PostgreSQL server
* Create database with the name same as in config file
* Run `npm install` or `yarn install`
* Run `sequelize db:migrate`
* Run `nodemon` or `npm start`

### Example commands:
* To add migration: `sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string`
* To run migration: `sequelize db:migrate`
