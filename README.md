# Ruby Continental | Restaurant

[![Build Status](https://travis-ci.org/nursh/Restaurant-App.svg?branch=master)](https://travis-ci.org/nursh/Restaurant-App)

A web application for ordering food from a Restaurant

## Description

The project is a website for a restaurant. A user goes to the site to place an order from the menu. The menu is placed into several categories where each category has several items. The user can increase or reduce the quantity of the items to be added to the order. The user can review the order before checking out. In the order review, items could be removed from the order and the quantity could also be changed.


The menu categories and items in each category are stored in a GraphQL server(prisma). The payment is implemented using Stripe-Checkout. The front-end uses React and Apollo-client to query and mutate the GraphQL server. The NodeJS server handles creating charges after it has received a token from the front-end after an order has been paid for.

### Built with

* React (create-react-app)
* Apollo-Client (front-end GraphQL)
* NodeJS
* Prisma (GraphQL-Yoga) server
* Stripe-Checkout
* Nginx for reverse proxy
* TravisCI
* Docker

