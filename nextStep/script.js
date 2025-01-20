let objjson = localStorage.getItem('obj');
let obj = JSON.parse(objjson);
const money = document.getElementById('money');
const recipient = document.getElementById('recipient');

if(obj != '') {
    money.innerHTML = obj.pricerub;
    recipient.innerHTML = obj.name;
}
