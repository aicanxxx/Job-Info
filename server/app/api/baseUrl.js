/**
 * Created by Administrator on 2017/7/26 0026.
 */
var qs=require('querystring');

var address={
    yjs:[
        {'word':'2018校园招聘','start':'0'},
        {'word':'2018校园招聘','start':'10'},
        {'word':'2018校园招聘','start':'20'},
        {'word':'2018校园招聘','start':'30'},
        {'word':'2018校园招聘','start':'40'},
    ],
    xdrs:[
        {'page':'1'},
        {'page':'2'},
        {'page':'3'},
        {'page':'4'},
        {'page':'5'}
    ]
}

var yjsUrl=address.yjs.map((item)=>{
    return 'http://s.yingjiesheng.com/search.php?'+qs.stringify(item);
});
var xdrsUrl=address.xdrs.map((item)=>{
    return 'http://rs.xidian.edu.cn/forum.php?mod=forumdisplay&fid=554&filter=typeid&typeid=43&'+qs.stringify(item);
});

module.exports={
    yjsUrl,
    xdrsUrl
};
