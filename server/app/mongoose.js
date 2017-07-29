/**
 * Created by Administrator on 2017/7/25 0025.
 */
var mongoose=require('mongoose');
var schedule = require("node-schedule");
var config=require('../config');
var yjs=require('./api/yjs');

var db=mongoose.connect(config.mongodb);

var crawlerSchema=new mongoose.Schema({
    title:String,
    links:String,
    date:String,
    from:String,
    desc:String,
    keep:Boolean,
});

var Crawler=mongoose.model('Crawler',crawlerSchema);

var rule     = new schedule.RecurrenceRule();
var times    = [1,6,11,16,21,26,31,36,41,46,51,56];
rule.minute  = times;

schedule.scheduleJob(rule, function(){
    console.log('调用create...');
    yjs().then((infos)=>{
        Crawler.find().exec((err,docs)=>{
            if(docs){
                docs.forEach((item)=>{
                    item.remove();
                })
            }
        });
        infos.forEach((item)=>{
            var crawler=new Crawler(item);
            crawler.save((err)=> {
                if(err){
                    console.log('数据库存储出错');
                }
            });
        })
    });

});
/*function create() {
    console.log('1调用create...\n');
    yjs().then((infos)=>{
        Crawler.find().exec((err,docs)=>{
            if(docs){
                docs.forEach((item)=>{
                    item.remove();
                })
            }
        });
        infos.forEach((item)=>{
            var crawler=new Crawler(item);
            crawler.save((err)=> {
                if(err){
                    console.log('数据库存储出错');
                }
            });
        })
    });
}*/

function get(req,res,next){
    Crawler.find().exec((err,docs)=>{
        if(err)return next(err);
        return res.json(docs);
    })
}
function getCollection(req,res,next) {
    Crawler.find({keep:true}).exec((err,docs)=>{
        if(err)return next(err);
        return res.json(docs);
    })
}
module.exports={
    //create,
    get,
    getCollection
};