/*
Surge按照注释配置，建议将Name改成机场名字方便区分，作者@mieqq.

[Proxy Group]
Name = select, policy-path=http://t.tt, update-interval=0

[Script]
Name = type=http-request,pattern=http://t.tt,script-path=sub_info.js
*/

const url = "";//引号内填写带有流量信息的订阅
const due_day = ;//填写重置日期，如1号就填1

$httpClient.head(url, (err, response) => {
    let info = getDataInfo(response.headers["subscription-userinfo"]);
    let days = getRmainingDays();
    let used = info.download + info.upload;
    let total = info.total;
    let body = `${used.toFixed(2)} GB | ${total.toFixed(2)} GB | ${days} Day${days === 1 ? "" : "s"}  = ss, 1.2.3.4, 1234, encrypt-method=aes-128-gcm,password=1234`
    $done({response:{body}});
});


function getDataInfo(info) {
  return Object.fromEntries(
    info.split("; ").map(item => item.split("="))
    .map(([k, v]) => [k, (v/1024**3)])
  );
}

function getRmainingDays() {
  let now = new Date();
  let today = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let daysInMonth = new Date(year, month, 0).getDate();
  if (due_day > today) daysInMonth = 0;
  
  return daysInMonth - today + due_day;
  
}