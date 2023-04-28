const Api="https://script.google.com/macros/s/AKfycbyoJ67vsiU3QDKVZUzjrmMX2X7zzIeEMYDGIBnvL6iz1gpHt5pBH19W-JibFmVyYOpfuA/exec";
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
xhr.open('GET','https://script.google.com/macros/s/AKfycbyoJ67vsiU3QDKVZUzjrmMX2X7zzIeEMYDGIBnvL6iz1gpHt5pBH19W-JibFmVyYOpfuA/exec?url='+ul+'&name='+name);
xhr.send();

}
async function getVul() {
return new Promise((res) =>{ 
    vids=document.querySelectorAll('video');
    sou = document.querySelectorAll('source');
    dv=document.querySelector('#ButD');
    Vl=vids.length;
    Sl=sou.length;
    dv.innerHTML+="<br>:vid="+Vl+" sour: "+Sl;
    if(Sl<1){
       sr= vids[0].getAttribute('data-src');
       if(sr==null){
           sr=vids[0].src;
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
        sr=sou[0].getAttribute("data-src");
        if(sr==null){
            sr=sou[0].src;
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
async function go() {
 div= document.createElement('div');
 div.id="ButD";
 div.style = "width: auto;height: auto;max-width:50%;background: black;border:1px solid gray;color:white;border-radius:5px;padding:3px;z-index:99999;position:fixed;top:10px;right:12px; overflow:scroll;";
 div.textContent = ":doing.";
 document.body.appendChild(div);
 div.innerHTML += "<br>:geting url...";
 ul = await getVul();
 div.innerHTML+= "<br>:url: "+ul+"<br>starting-send...";
 title=document.getElementsByTagName('title').textContent;
 vv=await sendToDrive(ul,title);
    
}
