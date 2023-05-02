localStorage.setItem("ODr",0);
const Apii='https://script.google.com/macros/s/AKfycbzSOdHxUa6hpNuVf07mkiFDLbFePeZEhumlTNNRlw5JfQb1eyyCu-JdVCaAIZQjH04_/exec';


const but=`<div style="width:auto; height:auto; background:white;color:black;border:1px solid gray;border-radius:3px;z-index:99999;" id="ReFB" onclick="ref()">Refesh</div>`;
async function sendToDrive(ul,name){
  const xhr = new XMLHttpRequest();
//xhr.withCredentials = true;
xhr.addEventListener('readystatechange', function () {
if (this.readyState === this.DONE) {
x=this.responseText;
  dv=document.querySelector('#ButD');
  dv.innerHTML+="<br>"+x;
 }
});
xhr.open('GET',Apii+'?Auth=saveUl&url='+ul);
xhr.send();

}
function Ropen() {
    dv=document.querySelector('#ButD');
    dv.style.display = "block";
}
function Rclose() {
    dv=document.querySelector('#ButD');
    dv.style.display = "none";
}
function Dor() {
    i=Number(localStorage.getItem("ODr"));
    switch (i) {
        case  0:
            i=1;
            Ropen();
            localStorage.setItem("ODr",1);
            break;
        case  1:
            i=0;
            Rclose();
            localStorage.setItem("ODr",0);
            break;
            
      }
}

async function setTouch() {
    var box = document.getElementById('RXInMin');
    box.addEventListener('click',function (e){
        Dor();
    })
    box.addEventListener('touchmove', function(e) {
    var touchLocation = e.targetTouches[0];
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  })
    box.addEventListener('touchend', function(e) {
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  })
}

async function getVul2(i) {
return new Promise((res) =>{
    vids=document.querySelectorAll('video');
    sou = document.querySelectorAll('source');
    Sl=sou.length;
    if(Sl<1){
       sr= vids[i].getAttribute('data-src');
       if(sr==null){
           sr=vids[i].src;
       }
       issr = sr.match(/http/g);
       if(issr==null){
       hr=window.location.href; 
       hris = hr.match('html') ;
       if(hris==null){
          ssrl = hr+"/"+sr;
       }else{
          nsr=hr.split('/');
          nl=nsr.length-1;
          d=nsr.slice(0,nl).join('/');
          ssrl=d+"/"+sr;
       }     
       }else{
       srrl=sr;
       }
           res(srrl);
    }else{
        sr=sou[i].getAttribute("data-src");
        if(sr==null){
            sr=sou[i].src;
        }
        issr = sr.match(/http/g);
       if(issr==null){
       hr=window.location.href;   
       hris = hr.match('html') ;
       if(hris==null){
          ssrl = hr+"/"+sr;
       }else{
          nsr=hr.split('/');
          nl=nsr.length-1;
          d=nsr.slice(0,nl).join('/');
          srrl=d+"/"+sr;
       }
       }else{
       srrl=sr;
       }
     res(srrl);
    }
    });
}
async function sendToDrivep(ul) {
    title=document.querySelector('title').textContent;
    dv=document.querySelector('#ButD');
   dv.innerHTML+="<br>:sending:-"+ul;
   vv=await sendToDrive(ul,title);
 console.log(ul,title);
}

async function getVul1() {
    return new Promise(async (res)=>{
        vids=document.querySelectorAll('video');
    sou = document.querySelectorAll('source');
    dv=document.querySelector('#ButD');
    Vl=vids.length;
    Vv=Vl-1;
    Sl=sou.length;
    dv.innerHTML+="<br>:vid="+Vl+" sour: "+Sl;
    for(i=0;i<=Vv;i++){
       ul=await getVul2(i);
       dv.innerHTML+=`<br>${i}: <p style="margin:1px;color:red;" onclick="sendToDrivep(this.textContent)">${ul}</p>`;
       af = ul.indexOf('?');
       console.log(af);
       if(af<=-1){
        
       }else if(af>-1){
       dv.innerHTML+="Correct: "+ul;
           res(ul);
           break;
       }
     }
    })
}
async function run() {
div=document.querySelector('#ButD');
 div.innerHTML+= ":doing.";
 div.innerHTML += "<br>:geting url...";
 ul = await getVul1();
 div.innerHTML+= "<br>:sel-url: "+ul+"<br>starting-send...";
 title=document.querySelector('title').textContent;
 vv=await sendToDrive(ul,title);
}
async function ref() {
    dv=document.querySelector('#ButD');
    dv.innerHTML=but;
 bb= await run();
 console.log("rfeshed");
}
async function go() {
 RxB=document.createElement('div');
 RxB.id="RXInMin";
 RxB.style = "z-index:99999;width: 40px;height: 40px;position: absolute;border:3px solid black;border-radius:50%;background: black;color:white;top:100px;left:10px;background:url('https://cdn.jsdelivr.net/gh/Ravindu33/js@main/Picsart_22-10-03_07-57-20-985.png');background-repeat: no-repeat, no-repeat;background-size: 40px 40px;";
 div= document.createElement('div');
 div.id="ButD";
 div.style = "width: auto;height: auto;max-width:50%;background: black;border:1px solid gray;color:white;border-radius:5px;padding:3px;z-index:99999;position:fixed;top:10px;right:12px; overflow:scroll;display:none";
 document.body.appendChild(div);
 document.body.appendChild(RxB);
 await setTouch()
 div.innerHTML=but;
 xx=await run();
    
}
