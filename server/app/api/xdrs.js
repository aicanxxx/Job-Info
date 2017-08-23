/**
 * Created by Administrator on 2017/7/25 0025.
 */
var http=require('http');
var cheerio=require('cheerio');
var getPages=require('./getpages');

module.exports = function () {
    let infos=[];
    return new Promise((resolve,reject)=>{
        //console.log('2调用yjs...\n');
        //console.log(getPages());
        getPages.getXdrs().then((html) => {
            console.log('5打印html\n'+html+'\n');
            /*html=html.replace(/<em>|<\/em>|&nbsp;|\?/g,'');*/
            const $ = cheerio.load(html);
            //console.log('6打印$\n'+$.html()+'\n');
            let $title = $('th.common a.xst');
            let $author = $('td.by cite a');
            let $date = $('td.by em span span');
            let $replyNum = $('td.num a.xi2');
            let $viewNum = $('td.num em');
            /*if($title.attr('href')=="http://www.yingjiesheng.com"){
                $title = $('h3.title a').slice(1);
                $desc = $('ul.searchResult div').slice(1);
            }*/
            //注意：cheerio中遍历时参数为index，value，array,而js中遍历参数为value，index，array，不能弄错
            $title.each((index, item) => {
                if(!infos[index]){
                    infos[index]={};
                }
                infos[index].title = $(item).text();
                infos[index].links= $(item).attr('href');
            });
            $author.each((index, item) => {
                if(index%2==0){
                    infos[index].author=$(item).text();
                    infos[index].authorLink=$(item).attr('href');
                }
            });
            //infos.desc.shift();
            $date.each((index, item) => {
                infos[index].date = $(item).text();
                infos[index].dateTitle = $(item).attr('title');
            });
            $replyNum.each((index, item) => {
                infos[index].reply = $(item).text();
            });
            $viewNum.each((index, item) => {
                infos[index].view = $(item).text();
            });
            resolve(infos);
        })
    })
};