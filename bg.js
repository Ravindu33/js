
var x = document.getElementById("feed-video-element");
Ic = `<svg xmlns="http://www.w3.org/2000/svg"height="24px" style="position:fixed;top:50px;right:60px;" onclick ="ON()" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
`;

function go() {
document.body.innerHTML += Ic;
di = `<div id="Cc" style="display:none;background-color:black;color:white;width: 100%;height: 50%; position:fixed;bottom:0px;left:0px;border:2px solid pink;border-radius:10px;"></div>`;
document.body.innerHTML += di;
}


    
x.addEventListener("loadeddata",function () {a
    s = x.src;
    console.log(s);
    p = `<p>${s}</p></br>`;
    document.getElementById("Cc").innerHTML+=p;
})
localStorage.setItem("I",0);
function ON() {
i=Number(localStorage.getItem("I"));
console.log("o");
    switch (i) {
        case 0:
       i = 1;
      document.getElementById("Cc").style.display = "block";
      localStorage.setItem("I",1);
      console.log("on");
        break;
        case 1:
        i=0;
        document.getElementById("Cc").style.display = "none";
        localStorage.setItem("I",0);
        console.log("off");
        break;
    }
}
