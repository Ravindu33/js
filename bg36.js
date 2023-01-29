function rem() {
    localStorage.removeItem("objj")
    addC();
    document.getElementById("LinkD").innerHTML = "";
}
function addC() {
    x = localStorage.getItem("objj");
    if(x!=null) {
    y = JSON.parse(x);
    e =  JSON.stringify(y['VIDEO'][0]);
    nnnv = e.split(',');
    VN= nnnv.length/2;
     ei =  JSON.stringify(y['IMG'][0]);
    nnni = ei.split(',');
    IN= nnni.length/2;
     eif =  JSON.stringify(y['IFRAME'][0]);
    nnnif = eif.split(',');
    IFN= nnnif.length/2;
    console.log(VN,IN,IFN);
    if(VN==1) {
      v = y['VIDEO'][0].link1[0]['url'];
      console.log(v);
      if(v==null) {
          document.getElementById("Vid").innerHTML ="VIDEO:"+0;
      }else if(v!=null){
      document.getElementById("Vid").innerHTML ="VIDEO:"+VN;
      }
    }
    if(IN==1) {
       l =  y['IMG'][0].link1[0]['url'];
       console.log(l);
       if(l==null) {
          document.getElementById("Img").innerHTML ="IMG:"+0;
      }else if(l!=null){
      document.getElementById("Img").innerHTML = "IMG:"+IN;

      }
    }
    if(IFN==1) {
       g =  y['IFRAME'][0].link1[0]['url'];
       console.log(g);
       if(g==null) {
          document.getElementById("Ifr").innerHTML ="IFRAME:"+0;
      }else if(g!=null){
      document.getElementById("Ifr").innerHTML = "IFRAME:"+IFN;
      }
    }
   if(VN!=1) {
        document.getElementById("Vid").innerHTML ="VIDEO:"+VN;
    }
    if(IN!=1) {
        document.getElementById("Img").innerHTML = "IMG:"+IN;
    }
    if(IFN!=1) {
        document.getElementById("Ifr").innerHTML = "IFRAME:"+IFN;
    }
    
    }else if(x==null) {
        var ob ={
            VIDEO:[{
        link1:[{name:null,url:null}]
                 }],
            IMG:[{
        link1:[{name:null,url:null}]              
                 }],
            IFRAME:[{
        link1:[{name:null,url:null}]
                 }]};
bj=JSON.stringify(ob);
console.log( bj,"setting json");
localStorage.setItem("objj",bj); 
addC()
}}

function mat(a,b) {
if(a!=null) {
   x = a.match(b);
    if(x==null && a!=b) {
       return  false;
    }else if(x!=null && a==b){
    return true;
    } 
}
        
    }

function setle(a,b,c,y,k) {
   // console.log(b);
   s=window.location.origin+"&&"+a;
  dg = [{name:s,url:b}];
   d =   y[k][0]["link"+c] = dg;
 //  console.log(d);
 e=`<p style="">${k} ${a} ${b}</p>`;
   document.getElementById("LinkD").innerHTML+=e;
   bd = JSON.stringify(y);
   console.log(bd);
   localStorage.setItem("objj",bd);
   addC();
   
}
function set2(k,a,b) {
    x = localStorage.getItem("objj");
    y = JSON.parse(x);
    console.log(k);
    nn =  JSON.stringify(y[k][0]);
    nnn = nn.split(',');
    z= nnn.length/2;
    for (var i = 1; i <= z; i++) {
    xn = localStorage.getItem("objj");
    y = JSON.parse(xn);
    nn =  JSON.stringify(y[k][0]);
    nnn = nn.split(',');
    z = nnn.length/2;
    console.log(z);
    
    bb = y[k][0]['link'+i][0].url;
    mcd = mat(bb,b)
    //console.log(xn,mcd);
    if(bb != null && mcd==true) {
    console.log("exiting");
        break;
    }
    if(bb == null && mcd == false ||bb==null) {
    console.log("setting to",i);
        setle(a,b,i,y,k);
        break;
        }
    if(i == z && mcd == false) {
    console.log("setting to-",z+1,"-new");
      setle(a,b,z+1,y,k);
       break; 
    }else {
   console.log(i);
    }}
//  console.log(x,z);
}

function set(k,a,b) {
    x = localStorage.getItem("objj");
    if(x!=null) {
       console.log("getting.....");
       set2(k,a,b);
    }else if(x==null){
        var ob ={
            VIDEO:[{
        link1:[{name:null,url:null}]
                 }],
            IMG:[{
        link1:[{name:null,url:null}]              
                 }],
            IFRAME:[{
        link1:[{name:null,url:null}]
                 }]};
bj=JSON.stringify(ob);
console.log( bj,"setting json");
localStorage.setItem("objj",bj); 
set(k,a,b);
    }
}

function gl() {
    v=localStorage.getItem("objj");
    if(v==null) {
        alert("no catched sources.....");
    }
}


 function f(a,b) {
     c = a.src;
     d=a.tagName;
     b=document.querySelector('title').textContent;
     if(c=="" && d=='VIDEO') {
         n=document.querySelector('source').src;
         console.log('VIDEO',n);
         set('VIDEO',b,n);
         
     }else if(d=="IFRAME"){
     alert("iframe found not direct link.....\n I will try to fetch it...\nbut I can\'t promis...\n[if i gives the link, (it is a video player link..) you can go that link and use again my script and you can get the direct source link😀🤙😏]\n🛑I can\'t help to download drm protected videos🥵🛑");
     set(d,b,c);
     }else{
     console.log(d,c);set(d,b,c);
     }
     
 }
function h() {
    var b=document.querySelectorAll('video,iframe,#feed-video-element,img');
   b.forEach(f);
   
}
const downloadFile = () => {
         const link = document.createElement("a");
         const content = localStorage.getItem("objj");
         const file = new Blob([content], { type: 'text/javascript' });
         
         link.href = URL.createObjectURL(file);
         console.log(link.href);
         link.download = "sample.js";
         link.click();
         URL.revokeObjectURL(link.href);
      };
      localStorage.setItem("I",0);
function DON() {
console.log("kkk");
i = Number(localStorage.getItem("I"));
   switch (i) {
       case  0:
           i = 1;
           console.log("ljkk");
          addC(); document.getElementById("HC").style.display="block";
           localStorage.setItem("I",1);
           break;
           case 1:
           i = 0;
           console.log("kljjkk");
           document.getElementById("HC").style.display="none";localStorage.setItem("I",0);
           break;
       
           
     } 
}

function dod() {
    AllC=document.createElement("div");
    catchB=document.createElement("div");
    Dbutton=document.createElement("button");
    I = `<div  style="width: 50px;height: 50px;background: black;border-radius: 15px;position: fixed;top: 20px;right: 20px;color: white;object-fit: contain;padding:1px;" onclick="DON()"><p style="position: absolute;left: 15px;margin: 5px;top: 10px;font-size: 20px;">0</p></div>`;
    C=`<div id="HC" style="color: white;display:none;position: fixed;width: 100%;height:50%;bottom: 5px;background: black;margin: 0px;left: 0px;overflow-x:hidden ;overflow-y:visible;border-radius:20px;"><button onclick="h()">Catch</button><button onclick="downloadFile()">Download Links</button><button onclick="rem()">Remove Old Links</button><div style="width: 100%;height: 20px; display:flex;border:1px solid pink;"><p style="font-size:10px;margin-left:5px;" id="Vid" >VIDEO:0</p><p style="font-size:10px;margin-left:5px;" id="Img" >IMG:0</p><p style="font-size:10px;margin-left:5px;" id="Ifr" >IFRAME:0</p></div><div id="LinkD" style="color:white;width: 100%;overflow-x:hidden ;"></div></div>`;
    document.body.innerHTML += I;
    document.body.innerHTML += C;
}
//dod();
function nd() {
    var x = document.createElement("div");
    x.style = "width: 50px;height: 50px;background-color: black;border-radius: 15px;position: absolute;top: 40px;right: 20px;color: white;object-fit: contain;padding:1px;z-index:100;";
    x.setAttribute("onclick","DON()");
    var y = document.createElement("div");
    y.id = "HC";
    y.style = "color: white;display:none;position: absolute;width: 100%;height:50%;bottom: 5px;background: black;margin: 0px;left: 0px;overflow-x:hidden ;overflow-y:visible;border-radius:20px;z-index:100;";
    z = document.createElement("button");
    a = document.createElement("button");
    v = document.createElement("button");
    z.textContent = "catch";
    a.textContent = "download";
    v.textContent = "remove links";
    z.style = "color:black; background-color:white;";
    a.style = "color:black;background-color:white;";
    v.style = "color:black;background-color:white;";
    z.setAttribute("onclick","h()");
    a.setAttribute("onclick","downloadFile()");
    v.setAttribute("onclick","rem()");
    e = document.createElement("div");
    q = document.createElement("p");
    w = document.createElement("p");
    r = document.createElement("p");
    k = document.createElement("div");
    q.id = "Vid";
    w.id = "Img";
    r.id = "Ifr";
    k.id = "LinkD";
    e.style = "width: 100%;height: 20px; display:flex;border:1px solid pink;";
    q.style = "font-size:10px;margin-left:5px;";
    w.style = "font-size:10px;margin-left:5px;";
    r.style = "font-size:10px;margin-left:5px;";
    k.style="color:white;width: 100%;overflow-x:hidden ;";
    q.textContent = "VIDEO:0";
    w.textContent = "IMG:0";
    r.textContent = "IFRAME:0";
    document.body.appendChild(x);
    document.body.appendChild(y);
    y.appendChild(z);
    y.appendChild(a);
    y.appendChild(v);
    y.appendChild(e);
    y.appendChild(k);
e.appendChild(q);
e.appendChild(w);
e.appendChild(r);
}
console.log("Rex Capture..,");
console.log("getting......");
console.log("🚧🚧🚧🚧🚧🚧🚧🚧🚧");
console.log("Avalable commands- 1.nd","2.dod");
/*
var scri = document.createElement("script");
scri.src = "/storage/emulated/0/TerbEdit/Source catch/1/bg.js";
document.body.appendChild(scri);
scri.onload = function () {
    nd();
}
*/
