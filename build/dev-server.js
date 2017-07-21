require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
//var http=require('http')
//var qs=require('querystring')
//var cheerio=require('cheerio')


// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app=express();
/*var router=express.Router();
var query=qs.stringify({'word':'2018校园招聘'});
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
        const $ = cheerio.load(html);

        let $title = $('h3.title a');
        console.log($title + '\n');
        //let $links=$('.title a');
        let $desc = $('ul.searchResult li div');
        let $date = $('h3.title p span.date');
        let $from = $('h3.title p');
        //注意：cheerio中遍历时参数为index，value，array,而js中遍历参数为value，index，array，不能弄错
        $title.each((index, item) => {
            console.log($(item).html() + '\n');
            infos.title.push($(item).text());
            infos.links.push($(item).attr('href'));
        });
        $desc.each((index, item) => {
            infos.desc.push($(item).text().trim());
        });
        $date.each((index, item) => {
            infos.date.push($(item).text());
        });
        $from.each((index, item) => {
            infos.from.push($(item).text().trim())
        });
        res.json(infos);
    });
});
app.use('/api',router);*/
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
