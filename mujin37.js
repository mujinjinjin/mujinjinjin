/*

美颜相机



[rewrite_local]
^https:\/\/api\.meiyan\.com url script-response-body https://raw.githubusercontent.com/hhse/Mul4hong/master/myxj.js
[mitm] 
hostname = api.meiyan.com

//hostname :api.meiyan.com
//重写链接：^https:\/\/api\.meiyan\.com
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
