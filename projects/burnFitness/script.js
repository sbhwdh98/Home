// countdown timer
var end = new Date("September 15, 2022 12:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var timeleft = end-now;
    var days = Math.floor(timeleft/(1000*60*60*24));
    var hours = Math.floor((timeleft%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((timeleft%(1000*60*60))/(1000*60));
    var seconds = Math.floor((timeleft%(1000*60))/(1000));
    document.getElementById('message').innerHTML = 'You can get free registration. But Hurry!<br>Every hour you wait is time you could be saving <br>';
    document.getElementById('demo').innerHTML = 'Deal ends on: '+days + ' days '+hours+' hours '+minutes+' mins '+seconds+' s ';
    if(timeleft<0){
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'Offer Expired!';
    }
},1000);