var startDate = new Date(2016, 4, 4); //полночь
var now //с мин сек
var diff = now - startDate;
var web=0,
    app=0,
    sum=0;
var counter=0;
var time = 10*60*1000 // 10 min
//var time = 50*1000 // debug 5 sec
console.log(time/1000/60+" min");//debug

function calc_init_value(){
    now = new Date();
    
    var dd=now.getDate()-startDate.getDate(),
        hh=now.getHours()-startDate.getHours(),
        mm=now.getMinutes()-startDate.getMinutes();

//    console.log(dd+"д "+hh+"ч "+mm + "м") //debug

    sum = dd*900*24+hh*900+(mm-mm%10)*10;
    write(sum);
}

function write(data)
{
    document.getElementById('sum').innerHTML=data+" &#8381; ";
//    console.log(data);
}

calc_init_value();
setInterval(function() {
    
    if (counter%2==0)
        {
        sum+=200;
            
//        console.log("+200. "+"Итого:"+sum);
        }
    else 
        {
        sum+=100;
//        console.log("+100. "+"Итого:"+sum);
        }
    write(sum);
//    console.log(sum);
    counter++;
},time);




