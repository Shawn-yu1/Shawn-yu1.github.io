let http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html:charser=utf-8'});
    let allData='';
    req.on('data',function(thunk){ //thunk 前端传过来的数据  转换字符串的
        allData+=thunk;
    });
    req.on('end',function(){
        let data = JSON.parse(allData);
        if(data.user==='freeless'&&data.passward==='123'){
            res.end("1")
        }
    });
    
}).listen(3000,()=>{
    console.log("服务器启动")
})