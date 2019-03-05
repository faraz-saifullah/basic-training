# SIMPLE BILL GENERATOR

SIMPLE BILL GENERATOR is a simple app that generates bill for a shopping transaction at the time of checkout. 
  - Installation
  - Features
  - Setup
  - How To Use?
  - Browser Support

## Installation

  - Clone this using git clone.
  or
  - Download zip file

## Features

Following are some of the features of this App:

* Bill generation from strings as input.
* Facility to add or delete multiple item details' input strings.
* Having multiple items in each order.
* Bill generation from JSON objects.
* Calculation of Sales Tax for individual item as well as each order
* Total generation

## Setup

This app requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and start the server.

```sh
$ cd bill
$ npm install
$ cd bill
$ npm install
$ DEBUG=bill:* npm start
```
Now you can open your browser and type this and start using the app.
```sh
localhost:3000
``` 
## How to use?

### Text Strings As Input
On the first page of this app you'll have a text input box in which you can add a text string containing information about each item in the following format :


```sh
<quantity> <imported or not> <product name> at <price>
```
To have multiple items in a order you can user the Add Item button and an optional Delete button on the UI to delete that item from the order.

Sample Input
```sh
1 book at 12.49
1 imported bottle of perfume at 47.50
```

Sample Output
```sh
Order 1:
1 book: 12.49
1 imported bottle of perfume: 54.630
Sales Taxes: 7.13
Total: 67.12
```
#### JSON Object As Input
It is very similar to Text Strings As Input but here you have to write a JSON object in the input field.

Sample Input
```json
{
    "name": "order1",
    "items": [
        {
            "name": "book",
            "category": "book",
            "quantity": 1,
            "price": 12.49
        },
        {
            "name": "music CD",
            "category": "music",
            "quantity": 1,
            "price": 14.99
        },
        {
            "name": "chocolate bar",
            "category": "food",
            "quantity": 1,
            "price": 0.85
        }
    ]
}
```
Sample Output
```sh
Order1:
1 book: 13.74
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 2.75
Total: 31.08
```
You'll have to press the Checkout button to generate the output i.e. the Bill

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)
--- | --- | --- | --- | --- | --- |
IE 11+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

