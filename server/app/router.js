/**
 * Created by Administrator on 2017/7/25 0025.
 */
var express=require('express');
var bodyParser=require('body-parser');
var db=require('./mongoose');
var config=require('../config');
var yjs=require('./api/yjs');

var app=express();
var router=express.Router();

app.use(bodyParser.json());

router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/yjs',(req,res,next)=> {
    //db.create();
    db.get(req,res,next);
});

/*app.use((req,res,next)=>{
    res.status(404);
    try{
        return res.json('Not Found');
    } catch(e){
        console.error('404 set header after sent');
    }
});

app.use((err,req,res,next)=>{
    if(!err){
        return  next();
    }
    res.status(500);
    try{
        return res.json(err.message || 'server error');
    }catch (e){
        console.error('500 set header after sent');
    }
});*/

app.use('/api',router);

app.listen(config.port,()=>{
    console.log(config.port+'server is listening')
});

module.exports=app;
