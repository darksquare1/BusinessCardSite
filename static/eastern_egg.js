
let currentInput = "";
let display=document.getElementById("imageContainer");
let flag=false;
let key = "";
let coil_visable=false;
let sniper_appear = -1;
function sniper_pos(){
    sniper_appear=Math.floor(Math.random()*2);
    if (sniper_appear==0){
        document.getElementById("sniper").style.marginRight = "300px";
    }
    if (sniper_appear==1){
        document.getElementById("sniper").style.marginRight = "600px";
    }
    else if (sniper_appear==2){
        document.getElementById("sniper").style.marginRight = "950px";
    }

}
sniper_pos();
function disappear(){
    document.getElementById("coil").style.display="none";
    coil_visable=false;
}
function used_coil(key,sniper_appear){
    if (sniper_appear==0 && key=="c"){
        document.getElementById("sniper").style.display="none";
        sniper_pos();
        requestAnimationFrame(function () {
            document.getElementById("sf").style.opacity = 0;
        });
        flag=false;
    }
    else if (sniper_appear==1 && key=="x"){
        document.getElementById("sniper").style.display="none";
        sniper_pos();
        requestAnimationFrame(function () {
            document.getElementById("sf").style.opacity = 0;
        });
        flag=false;
    }
    else if (sniper_appear==2 && key=="z"){
        document.getElementById("sniper").style.display="none";
        sniper_pos();
        requestAnimationFrame(function () {
                    document.getElementById("sf").style.opacity = 0;
                });
        flag=false;
    }
    coil_visable=true;
    document.getElementById("coil").style.display="inline";
    setTimeout(disappear,700);
}
document.addEventListener("keydown", function(event) {
        
    currentInput+=event.key;
    console.log(currentInput);    
        if (currentInput.includes("letmedie")) {
            document.getElementById("sf").style.opacity = 0;
            document.getElementById("sniper").style.opacity = 0;
            display.style.display = "flex";
            requestAnimationFrame(function () {
                document.getElementById("sf").style.opacity=1;
                document.getElementById("sniper").style.opacity=1;
            });
            currentInput="";
            flag=true;
            document.getElementById("sniper").style.display="inline";
            }
        if (flag){
            if(event.key=="z" && !(coil_visable)){
                document.getElementById("coil").style.left="30%";
                used_coil("z",sniper_appear);
                
            }
            if(event.key=="x" && !(coil_visable)){
                document.getElementById("coil").style.left="50%";
                used_coil("x",sniper_appear);
            }
            if(event.key=="c" && !(coil_visable)){
                document.getElementById("coil").style.left="70%";
                used_coil("c",sniper_appear);
            }
        
        }    
} 
);
    

    