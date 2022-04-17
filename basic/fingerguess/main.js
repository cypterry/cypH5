function jianD(){
    document.getElementById("me").style.backgroundImage="url(images/2.png)";
    computer();
    judge("剪刀",computer());
}
function shiT(){
    document.getElementById("me").style.backgroundImage="url(images/3.png)";
    computer();
    judge("石头",computer());
}
function bu(){
    document.getElementById("me").style.backgroundImage="url(images/1.png)";
    computer();
    judge("布",computer())
}
function computer(){
    let com = Math.ceil(Math.random() * 3);
    if (com == 1) {
        document.getElementById("computer").style.backgroundImage = "url(images/jd.png)";
        return "剪刀";
    }
    else if (com == 2) {
        document.getElementById("computer").style.backgroundImage = "url(images/sht.png)";
        return "石头";
    }
    else {
        document.getElementById("computer").style.backgroundImage = "url(images/b.png)";
        return "布";
    }
}
function judge(myChioce,computerResult){
    if(myChioce=="石头"){
        if(computerResult=="石头"){
            document.getElementById("result").innerHTML="平局"
        }
        else if(computerResult=="剪刀"){
            document.getElementById("result").innerHTML="你赢了"
        }
        else{
            document.getElementById("result").innerHTML="你输了"
        }
    }
    else if(myChioce=="剪刀"){
        if(computerResult=="石头"){
            document.getElementById("result").innerHTML="你输了"
        }
        else if(computerResult=="剪刀"){
            document.getElementById("result").innerHTML="平局"
        }
        else{
            document.getElementById("result").innerHTML="你赢了"
        }
    }
    else{
        if(computerResult=="石头"){
            document.getElementById("result").innerHTML="你赢了"
        }
        else if(computerResult=="剪刀"){
            document.getElementById("result").innerHTML="你输了"
        }
        else{
            document.getElementById("result").innerHTML="平局"
        }
    }
}