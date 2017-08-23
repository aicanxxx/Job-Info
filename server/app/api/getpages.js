/**
 * Created by Administrator on 2017/7/25 0025.
 */
var http=require('http');
var cheerio=require('cheerio');
var qs=require('querystring');
var url=require('./baseUrl');

//console.log(url.yjsUrl);
//console.log(url.xdrsUrl);

function getHtml(url){
    return new Promise((resolve,reject)=>{
        http.get(url,(res) => {
            let html='';
            res.on('data',(data)=> {
                html +=data;
            });
            res.on('end', () => {
                resolve(html);
            })
        }).on('err',(e)=>{
            reject(e);
            console.log('出错了');
        })
    })
}

/*function getContent(url){
    return Promise.all(url.map((item)=>{
        return getHtml(item);
    })).then((result)=>{
        return result.map((items)=>{
            const $=cheerio.load(items);
            return $('ul.searchResult').html();
        }).join('');
    });
}*/
module.exports = {
    getYjs(){
        /*return getContent(url.yjsUrl);*/
        return Promise.all(url.yjsUrl.map((item)=>{
            return getHtml(item);
        })).then((result)=>{
            return result.map((items)=>{
                const $=cheerio.load(items);
                return $('ul.searchResult').html();
            }).join('');
        });
    },
    getXdrs(){
        /*return getContent(url.)*/
        return getHtml(url.xdrsUrl).then((result)=>{
            const $=cheerio.load(result);
            return $('table.threadlisttableid').html();
        });
        /*return new Promise((resolve,reject)=>{

        })*/
        /*return Promise.all(url.xdrsUrl.map((item)=>{
            return getHtml(item);
        })).then((result)=>{
            return result.map((items)=>{
                const $=cheerio.load(items);
                return $('ul.searchResult').html();
            }).join('');
        });*/
    }
};