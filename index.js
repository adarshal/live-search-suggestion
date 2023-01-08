console.log('live search suggetsion for animal search');

require('dotenv').config();

const express=require('express');
const app=express();
const port=process.env.PORT || 8030;

app.use(express.json());
// connect to db
const db=require('./config/mongoose');

app.use(express.urlencoded({extended: false}));
const path=require('path');
app.use(express.static(path.join(__dirname,'/public')));

//routes
app.use('/', require('./routes'));

 app.listen(port,console.log(`server listening on port ${port}`)) ;
  