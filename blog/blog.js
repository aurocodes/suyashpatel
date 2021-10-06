var like = 0 ,like1 = 0
var unlike = 0, unlike1 = 0

function Count(){
    document.getElementById("OUTPUT").innerHTML = "LIKE " + (like++ + 1);
}

function Count1(){
    document.getElementById("OUTPUTS").innerHTML = "LIKE " + (like1++ + 1);
}

function UnCount(){
    document.getElementById("OUTPUT1").innerHTML = "UNLIKE " + (unlike++ + 1);
}

function UnCount1(){
    document.getElementById("OUTPUTS1").innerHTML = "UNLIKE " + (unlike1++ + 1);
}

