/* atobb() and bbtoa() use without symbols*/
function atobb(arg) {
y = arg;
x = arg.length;
//console.log(x);
  var   i;
    for (i = 0; i < x; i++) {
        var z = y[i];
       var g;
        if(z == "A") {
           g+="AAGV" ;
        }else if(z == "B") {
            g+="UAHJ";
        }else if(z == "C") {
            g +="L1SJ";
        }else if(z == "D") {
            g+="ODBW";
        }else if(z == "E") {
            g+="IEBD";
        }else if(z == "F") {
            g+="WUAH";
        }else if(z == "G") {
            g+="QIDH";
        }else if(z == "H") {
            g+="PDHR";
        }else if(z == "I") {
            g+="BSUE";
        }else if(z == "J") {
            g+="WYAH";
        }else if(z == "K") {
            g+="UDNE";
        }else if(z == "L") {
            g+="YBEJ";
        }else if(z == "M") {
            g+="BRUS";
        }else if(z == "N") {
            g+="IFJE";
        }else if(z == "O") {
            g+="NRGB";
        }else if(z == "P") {
            g+="XHWB";
        }else if(z == "Q") {
            g+="AJEH";
        }else if(z == "R") {
            g+="ZGEJ";
        }else if(z == "S") {
            g+="MWID";
        }else if(z == "T") {
            g+="LWUR";
        }else if(z == "U") {
            g+="EJFV";
        }else if(z == "V") {
            g+="OFJA";
        }else if(z == "W") {
            g+="YENS";
        }else if(z == "X") {
            g+="4USN";
        }else if(z == "Y") {
            g+="YS53";
        }else if(z == "Z") {
            g+="JWB8";
        }else if(z == "a") {
            g+="SHh7";
        }else if(z == "b") {
            g+="hGj8";
        }else if(z == "c") {
            g+="haj&";
        }else if(z == "d") {
            g+="Ha7&";
        }else if(z == "e") {
            g+="kUa*";
        }else if(z == "f") {
            g+="enU7";
        }else if(z == "g") {
           g+="aHu9"; 
        }else if(z == "h") {
            g+="qsUu";
        }else if(z == "i") {
            g+="ewBu";
        }else if(z == "j") {
            g+="ak4J";
        }else if(z == "k") {
            g+="4jab";
        }else if(z == "l") {
            g+="sb8J";
        }else if(z == "m") {
            g+="wkrm";
        }else if(z == "n") {
            g+="wi*i";
        }else if(z == "o") {
           g+="jej*"; 
        }else if(z == "p") {
            g+="aj1A";
        }else if(z == "q") {
            g+="eAj9";
        }else if(z == "r") {
            g+="0aJv";
        }else if(z == "s") {
           g+="2ahJ"; 
        }else if(z == "t") {
           g+="Aje1"; 
        }else if(z == "u") {
           g+="eHh8"; 
        }else if(z == "v") {
           g+="whH7"; 
        }else if(z == "w") {
           g+="tvwJ";
        }else if(z == "x") {
            g+="vHe7";
        }else if(z == "y") {
            g+="whH6";
        }else if(z == "z") {
            g+="eh8h";
        }else if(z == "1") {
            g+="sggj";
        }else if(z == "2") {
            g+="sonn";
        }else if(z == "3") {
            g+="winn";
        }else if(z == "4") {
            g+="qohh";
        }else if(z == "5") {
           g+="wijj"; 
        }else if(z == "6") {
            g+="wojj";
        }else if(z == "7") {
          g+="ihhj";  
        }else if(z == "8") {
            g+="addc";
        }else if(z == "9") {
            g+="0hbk";
        }else if(z == "0") {
            g+="kfhk";
        }else if(z == " ") {
            g+="Sspx";
        }else{
        console.error("I cant encrypt symbols.");
        break;
        }
        
        if(i ==x-1) {
        a = g.slice(9);
            return a
        }
    }
    
}
function bbtoa(arg) {
    y = arg.match(/.{1,4}/g);
x =y .length;
//console.log(x);
  var   i;
  var g;
  for (i = 0; i < x; i++) {
      z=y[i];
    //  console.log(z);
      if(z=="AAGV") {
         g+="A" ;
      }else if(z=="UAHJ") {
         g+="B"; 
      }else if(z=="L1SJ") {
         g+="C" ;
      }else if(z=="ODBW") {
         g+="D" ;
      }else if(z=="IEBD") {
         g+="E" ;
      }else if(z=="WUAH") {
         g+="F" ;
      }else if(z=="QIDH") {
         g+="G" ;
      }else if(z=="PDHR") {
         g+="H" ;
      }else if(z=="BSUE") {
         g+="I" ;
      }else if(z=="WYAH") {
         g+="J"; 
      }else if(z=="UDNE") {
         g+="K" ;
      }else if(z=="YBEJ") {
         g+="L" ;
      }else if(z=="BRUS") {
         g+="M" ;
      }else if(z=="IFJE") {
         g+="N" ;
      }else if(z=="NRGB") {
         g+="O" ;
      }else if(z=="XHWB") {
         g+="P" ;
      }else if(z=="AJEH") {
         g+="Q"; 
      }else if(z=="ZGEJ") {
         g+="R" ;
      }else if(z=="MWID") {
         g+="S"; 
      }else if(z=="LWUR") {
         g+="T" ;
      }else if(z=="EJFV") {
         g+="U" ;
      }else if(z=="OFJA") {
         g+="V" ;
      }else if(z=="YENS") {
         g+="W"; 
      }else if(z=="4USN") {
         g+="X" ;
      }else if(z=="YS53") {
         g+="Y" ;
      }else if(z=="JWB8") {
         g+="Z"; 
      }else if(z=="SHh7") {
         g+="a" ;
      }else if(z=="hGj8") {
         g+="b" ;
      }else if(z=="haj&") {
         g+="c" ;
      }else if(z=="Ha7&") {
         g+="d" ;
      }else if(z=="kUa*") {
         g+="e"; 
      }else if(z=="enU7") {
         g+="f" ;
      }else if(z=="aHu9") {
         g+="g" ;
      }else if(z=="qsUu") {
         g+="h" ;
      }else if(z=="ewBu") {
         g+="i" ;
      }else if(z=="ak4J") {
         g+="j" ;
      }else if(z=="4jab") {
         g+="k" ;
      }else if(z=="sb8J") {
         g+="l"; 
      }else if(z=="wkrm") {
         g+="m" ;
      }else if(z=="wi*i") {
         g+="n" ;
      }else if(z=="jej*") {
         g+="o" ;
      }else if(z=="aj1A") {
         g+="p" ;
      }else if(z=="eAj9") {
         g+="q" ;
      }else if(z=="0aJv") {
         g+="r" ;
      }else if(z=="2ahJ") {
         g+="s" ;
      }else if(z=="Aje1") {
         g+="t" ;
      }else if(z=="eHh8") {
         g+="u"; 
      }else if (z=="whH7") {
         g+="v" ;
      }else if(z=="tvwJ") {
         g+="w" ;
      }else if(z=="vHe7") {
         g+="x" ;
      }else if(z=="whH6") {
         g+="y" ;
      }else if(z=="eh8h") {
         g+="z"; 
      }else if(z=="sggj") {
         g+="1" ;
      }else if(z=="sonn") {
         g+="2" ;
      }else if(z=="winn") {
         g+="3" ;
      }else if(z=="qohh") {
         g+="4" ;
      }else if(z=="wijj") {
         g+="5"; 
      }else if(z=="wojj") {
         g+="6" ;
      }else if(z=="ihhj") {
         g+="7"; 
      }else if(z=="addc") {
         g+="8" ;
      }else if(z=="0hbk") {
         g+="9" ;
      }else if(z=="kfhk") {
         g+="0" ;
      }else if(z=="Sspx") {
         g+=" " ;
      }else {
          console.error("I cant encrypt symbols.");
        break;
      }
   //   console.log(g);
      if(i ==x-1) {
        a = g.slice(9);
            return a
        }
  }
}

