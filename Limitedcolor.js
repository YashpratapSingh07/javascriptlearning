//generate a Random color
const randomcolor = function () {
const hex='0123456789ABCDEF';
let color='#';
for(let i=0;i<6;i++){
    color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalid;
const startchangingcolor=function(){
    if(!intervalid){
        intervalid= setInterval(changecolor,2000);
    }
       function changecolor(){ document.body.style.backgroundColor=randomcolor();
       }
    
};
const stopchangingcolor=function(){
    clearInterval(intervalid);
    intervalid=null;//save memorya and efficient program after the workdone null to intervalid
}
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);
// he addEventListener method doesn't take two arguments like that. The second argument should be the function reference, not a comma separating two items.