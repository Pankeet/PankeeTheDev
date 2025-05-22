const express = require("express"); 
const app = express();
const mongoose = require('mongoose');
const cors  = require('cors')
require('dotenv').config ;

app.use(express.json()) ;
app.use(cors()) ;

