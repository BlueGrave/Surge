/*
Surge 中显示机场的流量信息
作者 @mieqq & @congcong0806
结合两位大佬的脚本，根据自己的需求更改

Surge配置参考注释，感谢@asukanana.
----------------------------------------
先将带有流量信息的订阅链接encode，用encode后的链接替换"url="后面的xxx，"reset_day="后面的数字替换成流量每月重置的日期，如1号就写1，8号就写8。
如需显示多个机场的信息，可以参照上述方法创建多个策略组以显示不同机场的信息，将Name替换成机场名字即可，脚本只需要一个。
示例↓↓↓
----------------------------------------
[Proxy Group]
DlerCloud = select, policy-path=http://t.tt?url=xxx&reset_day=8, update-interval=3600

[Script]
sub_info = type=http-request,pattern=http://t\.tt,script-path=https://raw.githubusercontent.com/BlueGrave/Surge/master/Sub_Info.js,script-update-interval=0
*/

(async () => {
  let params = getUrlParams($request.url);
  let reset_day = parseInt(params["due_day"] ||params["reset_day"] || 1);
  
  let info = await getUserInfo(params.url);
  let usage = getDataUsage(info);
  let used = usage.download + usage.upload;
  let total = usage.total;
  let days = getRmainingDays(reset_day);
  let expire = usage.expire == undefined ? '' : formatTimestamp(usage.expire * 1000)
  console.log(total)
  let body = `Used: ${bytesToSize(used)} | Total: ${bytesToSize(total)}  = ss, 1.2.3.4, 1234, encrypt-method=aes-128-gcm,password=1234
  Traffic Reset: ${days} Day${days == 1 ? "" : "s"}  = ss, 1.2.3.4, 1234, encrypt-method=aes-128-gcm,password=1234
  Expire Date: ${expire}  = ss, 1.2.3.4, 1234, encrypt-method=aes-128-gcm,password=1234`;
  
    $done({response: {body}});
})();

function getUrlParams(url) {
  return Object.fromEntries(
    url.slice(url.indexOf('?') + 1).split('&')
   .map(item => item.split("="))
   .map(([k, v]) => [k, decodeURIComponent(v)])
  );   
}

function getUserInfo(url) {
  let headers = {"User-Agent" :"Quantumult X"}
  let request = {headers, url}
  return new Promise(resolve => $httpClient.head(request, (err, resp) => 
resolve(resp.headers["subscription-userinfo"] || resp.headers["Subscription-userinfo"])));
}

function getDataUsage(info) {
  return Object.fromEntries(
    info.match(/\w+=\d+/g).map(item => item.split("="))
    .map(([k, v]) => [k,parseInt(v)])
  );
}

function getRmainingDays(reset_day) {
  let now = new Date();
  let today = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let daysInMonth = new Date(year, month, 0).getDate();
  if (reset_day > today) daysInMonth = 0;
  
  return daysInMonth - today + reset_day;
}

function bytesToSize(bytes) {
    bytes = parseInt(bytes);
    if (bytes === 0) return '0B';
    var k = 1024;
    sizes = ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i];
}

function formatTimestamp( timestamp ) {
    var dateObj = new Date( timestamp );
    var year = dateObj.getYear() + 1900;
    var month = dateObj.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var day = dateObj.getDate();
    day = day < 10 ? '0' + day : day;
    return year +"-"+ month +"-" + day;      
}