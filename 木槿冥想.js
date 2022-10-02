/*

木槿冥想



[rewrite_local]
^https:\/\/svc\.heartlylab\.com\/api\/v1\/user\/vip\/info url script-response-body mujin37.js
[mitm] 
hostname = svc.heartlylab.com

//hostname :svc.heartlylab.com
//重写链接：^https:\/\/svc\.heartlylab\.com\/api\/v1\/user\/vip\/info





*/







var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/v1/user/vip/info';


if (url.indexOf(vip) != -1) {
    obj.data.vip_expire_date = "1777777777777";
     body = JSON.stringify(obj);
}


$done({body});

