/*

圣才电子书


[rewrite_local]
^https:\/\/app\.100xuexi\.com\/app\/UserHandler\/UserAccount\.ashx?method=GetVipStatus&userId=10513777 url script-response-body 自己命名.js
[mitm] 
hostname = app.100xuexi.com
UserAccount.ashx

//hostname :app.100xuexi.com
UserAccount.ashx
//重写链接：^https:\/\/app\.100xuexi\.com\/app\/UserHandler\/UserAccount\.ashx?method=GetVipStatus&userId=10513777





*/







var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/app/UserHandler/UserAccount';


if (url.indexOf(vip) != -1) {
    obj.isVip = 1;
obj.vipEndTime = "\/Date(1809017600000)\/";



     body = JSON.stringify(obj);
}


$done({body});
