let count=1;
let temp=1;

function res() {
    var shape=document.getElementsByName('shape');
// console.log(shape);
for (let i = 0; i < shape.length; i++) {
    if(shape[i].checked)
        ans=shape[i].value;
    
}
const peter=document.querySelector('#startBox');
let val=parseInt(peter.value);
    if(ans==='circle'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const gwen=document.querySelector('.gwen');
            const seleColor=document.querySelector("#favColor");
            const favColor=seleColor.value;
            const bg=document.querySelector(".container");
            bg.style.background=`linear-gradient(to right,${favColor},#fff598)`;
            // console.log(favColor);
            gwen.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:100px; heigth:700px; border-radius:50%; background:${favColor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:10px; height:100px;")
        }
        // count=val;
    }
    else if(ans=='square'){
        // const peter=document.querySelector('#startBox');
        // let val=parseInt(peter.value);
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const gwen=document.querySelector('.gwen');
            const seleColor=document.querySelector("#favColor");
            const favColor=seleColor.value;
            const bg=document.querySelector(".container");
            bg.style.background=`linear-gradient(to right,${favColor},#fff598)`;
            // console.log(favColor);
            gwen.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:100px; heigth:700px;  background:${favColor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:10px; height:100px;")
        }
    }
    else if(ans=='rectangle'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const gwen=document.querySelector('.gwen');
            const seleColor=document.querySelector("#favColor");
            const favColor=seleColor.value;
            const bg=document.querySelector(".container");
            bg.style.background=`linear-gradient(to right,${favColor},#fff598)`;
            // console.log(favColor);
            gwen.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:250px; heigth:700px;  background:${favColor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:10px; height:100px;")
        }
    }
    
}

