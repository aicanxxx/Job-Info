/**
 * Created by Administrator on 2017/7/20 0020.
 */
var http=require('http')
var qs=require('querystring')
var cheerio=require('cheerio')
var express=require('express')
var app=express();
var router=express.Router();
var query=qs.stringify({'word':'2018校园招聘','start':'10'});
var baseUrl='http://s.yingjiesheng.com/search.php?'+query;
function getPageAsync(url) {
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
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/yingjiesheng',(req,res)=> {
    let html = '';
    let infos = {
        title: [],
        links: [],
        desc: [],
        date: [],
        from: []
    };
    getPageAsync(baseUrl).then((html) => {
        html=html.replace(/<em>|<\/em>|&nbsp;|\?/g,'');
        const $ = cheerio.load(html);
        let $title = $('h3.title a');
        let $desc = $('ul.searchResult div');
        let $date = $('ul.searchResult p span.date');
        let $from = $('ul.searchResult p');

        //注意：cheerio中遍历时参数为index，value，array,而js中遍历参数为value，index，array，不能弄错
        $title.each((index, item) => {
            infos.title.push($(item).text());
            infos.links.push($(item).attr('href'));
        });
        infos.title.shift();
        infos.links.shift();
        $desc.each((index, item) => {
            let str='';
            $(item.childNodes).each((i,val)=>{
                if(val.nodeType==3){
                    str+=$(val).text().trim();
                }
            });
            infos.desc.push(str.replace('\s|\0',''));
            console.log(index+':'+str);
        });
        infos.desc.shift();
        $date.each((index, item) => {
            infos.date.push($(item).text());
        });
        $from.each((index, item) => {
            $(item.childNodes).each((i,val)=>{
                if(val.nodeType==3){
                    infos.from.push($(val).text().trim());
                }
            })
        });
        res.json(infos);
    });
});
app.use('/api',router);
app.listen(3000,()=>{
    console.log('server is listening')
})