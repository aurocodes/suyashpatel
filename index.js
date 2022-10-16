setInterval(() => {
    updateTime()
}, 1000);

updateTime()

function updateTime() {
    
    d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = JSON.stringify(days[d.getDay()]);
    let month=d.getMonth();
    let dat=d.getDate();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    let m1="",m2="";
    let tr=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
    if(htime==12||htime==00)  
  {m2=JSON.stringify(tr[12])}
  else
   {m2=JSON.stringify(tr[htime%12])} 

    let ts=["","one","two","three","four","five","six","seven","eight","nine","ten"];
    let tts=["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
    let tpp=["twenty","thirty","forty","fifty","sixty"]
    if(mtime<=10)
    m1=JSON.stringify(ts[mtime])
    else if(mtime>10 && mtime<20)
    m1=JSON.stringify(tts[mtime-11])
    else 
    m1=JSON.stringify(tpp[(Math.floor(mtime/10)-2)]+" "+ts[mtime%10])
    let m3=""
    if(mtime!=0)
    m3="past"
    else
    m3="o'clock"
    document.getElementById("clock").innerHTML=`
    It is currently <br>
    ${JSON.parse(m2)} ${m3} ${JSON.parse(m1)}<br>
    <span id="dayte">${JSON.parse(day)},${dat}/${month}</span>
    `
}

