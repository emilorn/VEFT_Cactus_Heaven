const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
const amqp = require('amqplib/callback_api');
const order = require('./data/db').Order
const orderItem = require('./data/db').OrderItem

