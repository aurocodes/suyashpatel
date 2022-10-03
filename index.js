setInterval(() => {
    updateTime()
}, 1000);

updateTime()

function updateTime() {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    if(d.getHours() <= 6){
        document.body.style.background = "linear-gradient(to bottom, #33ccff 0%, #ff9999 100%)"
    }else if(d.getHours() <= 9){
        document.body.style.background = "linear-gradient(to bottom, #ffcc66 0%, #ffffff 100%)"
    }else if(d.getHours() <= 12){
        document.body.style.background= "linear-gradient(to bottom, #ff9933 0%, #ffcccc 100%)"
    }else if(d.getHours() <= 15){
        document.body.style.background = "linear-gradient(to bottom, #ff6699 0%, #cc99ff 100%)"
    }else if(d.getHours() <= 18){
        document.body.style.background = "linear-gradient(to bottom, #ff6666 0%, #ff99ff 100%)"
    }else if(d.getHours() <= 21){
        document.body.style.background = "linear-gradient(to bottom, #0000cc 0%, #cc33ff 100%)"
    }else if(d.getHours() <= 24){
        document.body.style.background = "linear-gradient(to bottom, #000066 0%, #660066 100%)"
    }
    else{
        document.body.style.background = "linear-gradient(to bottom, #ffcc66 0%, #ffffff 100%)"
    }
    
    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`;
}

