
let currentInput = "";
let display=document.getElementById("imageContainer");
let flag=false;
let coil_visable=false;
function disappear(){
    document.getElementById("coil").style.display="none";
    coil_visable=false;
}
function used_coil(){
    coil_visable=true;
    document.getElementById("coil").style.display="inline";
    setTimeout(disappear,700);
}
document.addEventListener("keydown", function(event) {
        
    currentInput+=event.key;
    console.log(currentInput);    
        if (currentInput.includes("letmedie")) {
            display.style.display = "flex";
            currentInput="";
            flag=true;
            }
        if (flag){
            if(event.key=="z" && !(coil_visable)){
                document.getElementById("coil").style.left="50%";
                used_coil();
            }
            if(event.key=="x" && !(coil_visable)){
                document.getElementById("coil").style.left="60%";
                used_coil();
            }
            if(event.key=="c" && !(coil_visable)){
                used_coil();
            }
        }    
} 
);
    

    