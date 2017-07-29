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
        getPages.getYjs().then((html) => {
            //console.log('5打印html\n'+html+'\n');
            html=html.replace(/<em>|<\/em>|&nbsp;|\?/g,'');
            const $ = cheerio.load(html);
            //console.log('6打印$\n'+$.html()+'\n');
            let $title = $('h3.title a');
            let $desc = $('ul.searchResult div');
            let $date = $('ul.searchResult p span.date');
            let $from = $('ul.searchResult p');
            if($title.attr('href')=="http://www.yingjiesheng.com"){
                $title = $('h3.title a').slice(1);
                $desc = $('ul.searchResult div').slice(1);
            }
            //注意：cheerio中遍历时参数为index，value，array,而js中遍历参数为value，index，array，不能弄错
            $title.each((index, item) => {
                if(!infos[index]){
                    infos[index]={};
                }
                infos[index].title = $(item).text();
                infos[index].links= $(item).attr('href');
            });
            $desc.each((index, item) => {
                let str = '';
                $(item.childNodes).each((i, val) => {
                    if (val.nodeType == 3) {
                        str += $(val).text().trim();
                    }
                });
                infos[index].desc = str.replace('\s|\0', '');
            });
            //infos.desc.shift();
            $date.each((index, item) => {
                infos[0].date = $(item).text();
            });
            $from.each((index, item) => {
                let str='';
                $(item.childNodes).each((i,val)=>{
                    if(val.nodeType==3){
                        str += $(val).text().trim();
                    }
                });
                infos[index].from = str.replace('\s|\0', '');
            });
            resolve(infos);
        })
    })
};