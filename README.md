# Getting Started with Pizza Shop App

## How to Run the App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Hoisted URl

codeSandBox URL [https://codesandbox.io/p/github/jainshubham785/pizza-shop/draft/keen-shadow?workspaceId=1924fe86-c047-452c-9dd8-973daed7342a]

## Features

Task is to create an application which simulates a pizza restaurant behavior. From taking orders
to making the order ready. Below are the requirements for the application

1. Placing a pizza order (simulate through a form) - add a form from which pizza can be
   configured & ordered with following options
   Types : - Veg, Non-Veg
   Size : - Large, Medium, Small
   Base : - Thin, Thick
2. There can be 10 max number of orders a restaurant can handle at a time, otherwise
   show “Not taking any order for now”
3. Stages of pizza
   a. Order Placed
   b. Order in Making
   c. Order Ready
   d. Order Picked
4. Highlight with Red if a pizza is in same stage for more that 3 min
5. Show time spent in each stage with each pizza card
6. Display each stage in different cols with pizzas as cards, as shown in below diagram
7. There should be a main display
   a. for all pizza in progress with their remaining time & order Id
   b. total pizza delivered today
8. Can be Canceled at any time before order is in Ready stage from Main section
9. Pizza must be moved from one stage to another manually with either click on
   next/picked/cancel buttons
10. Both screens should be on the same page

Pizza Stages Section

Main Section

Bonus

1. different size pizza have different making time (change red a/c to time) (3 min -
   small, 4 min - medium, 5 min - large)
2. Use Redux
