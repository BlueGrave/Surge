/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/BlueGrave/Surge/master/Scripts/CamScanner.js

[mitm]
hostname = ap*.intsig.net

***************************
Surge4 or Loon:

[Script]
CamScanner.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/BlueGrave/Surge/master/Scripts/CamScanner.js,type=http-response,pattern=https:\/\/(api|api-cs)-cn\.intsig\.net\/purchase\/cs\/query_property\?,binary-body-mode=0

[MITM]
hostname = ap*.intsig.net

**************************/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":4102415999,"svip": 1,"nxt_renew_tm":4102415999}}};
$done({body: JSON.stringify(obj)});