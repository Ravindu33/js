localStorage.setItem("ttttt",0);
async function send(i) {
el_len = document.querySelectorAll("video").length;
el_c = el_len-1;
if(i<=el_c) {
elm = document.querySelectorAll("video");
el =elm[i]; 
ii = i+1;
C = localStorage.getItem("User");
tB = localStorage.getItem("Btoken");
Url = el.src;
dat = {
chat_id:C,
video:Url
}
 settings = {
  async: true,
  crossDomain: true,
  url: 'https://api.telegram.org/bot'+tB+'/sendVideo',
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
  processData: false,
  data:JSON.stringify(dat)
};

$.ajax(settings).done(function (response) {
r = JSON.stringify(response);
  console.log(r);
  res =response["ok"];
  if(res==true) {
      document.getElementById("Div").innerHTML += ii+"done.";
      send(ii);
  }else if(res==false) {
      document.getElementById("Div").innerHTML += ii+"err";
      send(ii);
  }
});
}
}


function start() {
    a = document.createElement("div");
    b = document.createElement("div");
    c = document.createElement("input");
    d = document.createElement("input");
    e = document.createElement("Button");
    f = document.createElement("Button");
    a.style = "position:fixed;top:50px;right:50px;background:;width: 50px;height: 50px;border-radius:50%;border: 2px solid black;box-shadow: 0px 0px 0px 1px;";
    a.id = "widget";
    b.id = "Div";
    c.id = "User";
    c.placeholder="userId of tg";
    d.id = "token";
    d.placeholder = "bot token";
    e.id = "suB";
    e.textContent ="Submit";
    e.setAttribute("onclick","sub()");
    a.setAttribute("onclick","Don()");
    f.textContent = "catch";
    f.setAttribute("onclick","send(0)");
    b.style = "position: fixed;bottom: 0px;width: 90%;left:0px;height: 200px;background:#000000;color:white;display:none;border:3px solid white;";
    c.style = "";
    document.body.appendChild(a);
    document.body.appendChild(b);
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    b.appendChild(f);
}
function Don() {
    x = Number(localStorage.getItem("ttttt"));
    switch (x) {
        case  0:
            localStorage.setItem("ttttt",1);
            document.getElementById("Div").style.display = "block";
            break;
        case 1:
        localStorage.setItem("ttttt",0);
        document.getElementById("Div").style.display = "none";
            break;
            
      }
}
function sub() {
 U=   document.getElementById("User").value;
 T=  document.getElementById("token").value;
 if(U!=null && T!=null) {
     localStorage.setItem("User",U);
 localStorage.setItem("Btoken",T);
 document.getElementById("Div").innerHTML += "now im reddydone.";
 
 }
 
 }



