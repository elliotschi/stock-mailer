# stock-mailer
this is a project that pulls in stock data for Apple and Google and displays it on the screen. Once the data is rendered, if you click on a card you can see a bar graph with the first two bars as the day's low and high, and the year's low and high

it is deployed [here](https://stock-mailer.herokuapp.com/)

## Installation
There are a few steps needed to install and run this project locally

After cloning the repository down:

`npm install`

I used a package called dotenv that allows me to configure my local env variables. Create a file called '.env' in the root directory that follows this [template](https://github.com/elliotschi/stock-mailer/blob/master/dotEnvTemplate)

To start a development server run the following:

`npm run start:dev`

To run the tests run:

`npm run test`

## Tech Stack
This project incorporates the following technologies:
- React
- Redux
- Node
- Express
- Mocha
- Chai
- Enzyme(AirBnB's react testing utility)
- Yahoo Finance API
- Webpack/Babel
- Materialize CSS framework
- Heroku for deployment
- SendGrid for email


