var like = 0
var unlike = 0

function Count(){
    document.getElementById("OUTPUT").innerHTML = "LIKE " + (like++ + 1);
}

function UnCount(){
    document.getElementById("OUTPUT1").innerHTML = "UNLIKE " + (unlike++ + 1);
}
 