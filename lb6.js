
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
xhr.open('GET','https://script.google.com/macros/s/AKfycbyZwbjnPc3Bxfy-WkjvdKCljy7a_dMXin4T-BzADeMYGocNLyXmPHy7rQFIxDuVVX-LXA/exec?url='+ul+'&name='+name);
xhr.send();

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
async function go() {
 div= document.createElement('div');
 div.id="ButD";
 div.style = "width: auto;height: auto;max-width:50%;background: black;border:1px solid gray;color:white;border-radius:5px;padding:3px;z-index:99999;position:fixed;top:10px;right:12px; overflow:scroll;";
 div.textContent = ":doing.";
 document.body.appendChild(div);
 div.innerHTML += "<br>:geting url...";
 ul = await getVul1();
 div.innerHTML+= "<br>:sel-url: "+ul+"<br>starting-send...";
 title=document.querySelector('title').textContent;
 vv=await sendToDrive(ul,title);
    
}
