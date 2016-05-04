var now = new Date();  //с мин сек
var startDate = new Date(2016, 3, 28); //полночь
var diff = now - startDate;

var web=0,
    app=0,
    sum=0;

var dd=now.getDate()-startDate.getDate(),
    hh=now.getHours()-startDate.getHours(),
    mm=now.getMinutes()-startDate.getMinutes();
/*
раз в десять минут a+=100. раз в 20 минут b+=200
*/
if (((mm-mm%10)/10)%2 == 0)
    ((mm-mm%10)/10)%2

web=100*(mm-mm%10)/10;
app=200*(mm-mm%10)/10;
sum=dd*900*24+hh*900+web+app;
document.getElementById('sum').innerHTML=web+" руб";
document.getElementById('sum2').innerHTML=app+" руб";

