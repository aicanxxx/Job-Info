/**
 * Created by Administrator on 2017/7/25 0025.
 */
var http=require('http');
var qs=require('querystring');
var url=require('./baseUrl');

console.log(url.yjsUrl);
console.log(url.xdrsUrl);

function getPages(url){
    return new Promise((resolve,reject)=>{
        http.get(item,(res) => {
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

module.exports = function () {
    console.log('3调用getpages...\n');
        return new Promise((resolve,reject)=>{
            Promise.all(url.yjsUrl.map((item)=>{
                getPages(item);
            }));
            let allHtml='';
            /*new Promise((resolve,reject)=>{
                url.yjsUrl.forEach((item)=>{
                    http.get(item,(res) => {
                        let html='';
                        res.on('data',(data)=> {
                            html +=data;
                        });
                        res.on('end', () => {
                            console.log('3.1\n');
                            allHtml +=html;
                        })
                    }).on('err',(e)=>{
                        reject(e);
                        console.log('出错了');
                    })
                });
                resolve(allHtml);
            }).then((allhtml)=>{

            });*/
            url.yjsUrl.forEach((item)=>{
                http.get(item,(res) => {
                    let html='';
                    res.on('data',(data)=> {
                        html +=data;
                    });
                    res.on('end', () => {
                        console.log('3.1\n');
                        allHtml +=html;
                    })
                }).on('err',(e)=>{
                    reject(e);
                    console.log('出错了');
                })
            });
            console.log('4打印allHtml\n'+allHtml+'\n');
            resolve(allHtml);
        })
};