"use strict";

if('EyeDropper' in window){
    let btn = document.querySelector("#colorPick");
    let box = document.querySelector("#pickedColor");
    
    btn.addEventListener("click", ()=>{
        let picker = new EyeDropper();
        picker.open()
            .then(val => {
                ShowOutput(0, "Picked color " + val.sRGBHex);
                box.style.backgroundColor = val.sRGBHex;
            }).catch(err =>{
                ShowOutput(1, err);
            })
    });
}else{
    ShowOutput(1, "EyeDropper is not supported by your browser.")
};

function ShowOutput(msgType, msg){
    let elem;
    if(msgType === 0){
        elem = document.getElementById("successBox");
    }else if(msgType === 1){
        elem = document.getElementById("errorBox");
    }
    elem.innerText += msg + "\n";
    elem.style.display = "block";
}

