//document.cookie="expires=THU, 03 Feb 2018 00:00:00 UTC; path=/;"
//function ValidatePassKey(tb)
// historyq=[getCookie("historyq")]
// historyq= froma(historyq,0)
//Google Green Google Yellow Google Red Google Blue

googygoo=["#3cba54","#f4c20d","#db3236","#4885ed","#3cba44","#f4c21d","#db3246","#4886ed"]
historyq=[]
mycolour1 = "rgb(228, 236, 232)"
questioncolour = "rgb(144, 199, 169)"
inputcolour = "#a6b6e2"
colss=["rgb(188, 189, 118)","rgb(255, 0, 255)","yellow","green","rgb(238, 161, 74)","rgb(96, 153, 190)","pink"]
score=0
function ValidatePassKey2(id,gop) {
    idd=id.split("input")[1]
    if (gop==null){dop=String(corr[parseInt(idd)+1]).length}else{dop=gop}
    try{
       
    // console.log(document.getElementById("inp"+(parseInt(idd)-1)).value)
    if (document.getElementById("input"+idd).value.length >= dop){ document.getElementById("input" + (parseInt(idd)+1)).focus();}
}
    catch(err){console.log(err)}
  //if (document.getElementById(tb).value.length >= String(corr[idd]).length){ document.getElementById("inp" + (parseInt(idd)+1)).focus();}
}
function ValidatePassKey(id,gop) {
    idd=id.split("inp")[1]
    if (gop==null){dop=String(corr[parseInt(idd)+1]).length}else{dop=gop}
    try{
        console.log(String(corr[parseInt(idd)+1]))
    // console.log(document.getElementById("inp"+(parseInt(idd)-1)).value)
    if (document.getElementById("inp"+idd).value.length >= dop){ document.getElementById("inp" + (parseInt(idd)+1)).focus();}
}
    catch(err){console.log(err.name)}
  //if (document.getElementById(tb).value.length >= String(corr[idd]).length){ document.getElementById("inp" + (parseInt(idd)+1)).focus();}
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function noi(){duse=document.getElementById("divside")
document.getElementById("answer").innerText=""
//duse.removeChild(duse.childNodes[duse.childNodes.length-1])
for(var i=duse.childNodes.length-1;i>0;i--){duse.removeChild(duse.childNodes[i]);}
//console.log(duse.childNodes.length)
}
//for(var i=43;i>0;i--){console.log(i)}
countq=1
function question(dend,sor){
    
    document.getElementById("history").innerHTML = historyq 
    console.log("quest")
    if(countq%2!=0){   noi()
    // vomit= document.getElementById("table").innerText
    // if (vomit.length>26){document.getElementById("divside").innerText="......."}
    if(dend==null || sor==null){
    dividend = getRndInteger(parseInt(document.getElementById("dendrange1").value),parseInt(document.getElementById("dendrange2").value)) ;
    //getRndInteger(200,15000) ;
    divisor = getRndInteger(parseInt(document.getElementById("sorrange1").value),parseInt(document.getElementById("sorrange2").value)) ;
    //getRndInteger(5,151) ;
}else{dividend=parseInt(dend);divisor=parseInt(sor)}
//boxes for dividend
divy= document.createElement("p")
divy.backgroundColor=questioncolour;
divy.innerHTML="_"

divstr=((dividend).toString())
divtake=""
for(var i=0;i<divstr.length;i++){divtake+=divstr[i];divtake+='&nbsp;';}
document.getElementById("dividend").innerHTML=divtake


// = dividend 
document.getElementById("divisor").innerHTML = divisor
document.getElementById("question").innerHTML = dividend + "/"+ divisor ;
historyq.push(dividend + "/"+ divisor) ;

// changed
ans = (dividend/divisor).toFixed(2)
ans3 = (dividend/divisor).toFixed(6)
    okay=((dividend.toString()).length - (ans.length-3))
    if (okay>0 ){
        for(var i=0;i<okay;i++){ans=0+ans;ans3=0+ans3}
    }
    zero=[]
    zer=""
    for(var i=0;i<ans.length;i++){zero.push(zer);zer+="0";}
    ans2=[]
    
    for(var i=0;i<ans.length;i++){if(ans[i]!="."){ans2.push(ans[i])}}
    rem=[]
    for(var i=0;i<(ans2.length+1);i++){
        one=ans3[i]*divisor
        onel=one.length
        countd=0
        divl=dividend.toString().length
        if(i<(divl)){
            tre=one.toString()+zero[(dividend.toString()).length-(i+1)]
            if(tre.length<divl){tre="0"+tre}
        rem.push(tre)}
        else if(i>(dividend.toString()).length){
            rem.push(zero[countd+divl]+one.toString());
    countd+=1 
    
}
    }}
    che=document.getElementById("box").checked
    if(countq%2==0){
       
    document.getElementById("answerbutt").setAttribute("value","question ");
if(che !=true){
    document.getElementById("answerbutt").setAttribute("onclick","answer4()");
    document.getElementById("done").setAttribute("onclick","done()");
}else{document.getElementById("answerbutt").setAttribute("onclick","answer5() ");
document.getElementById("done").setAttribute("onclick","done2()");}
}else{document.getElementById("answerbutt").setAttribute("value","answer");
if(che !=true){
document.getElementById("answerbutt").setAttribute("onclick","answer4()");
document.getElementById("done").setAttribute("onclick","done()");
}else{document.getElementById("answerbutt").setAttribute("onclick","answer5()");
document.getElementById("done").setAttribute("onclick","done2()");}
}
   //countq+=1
   document.body.addEventListener("keydown",function handleKeyDownEvent(e){ if(e.key == 'Backspace'){confirm("Exit?")? window.open('','_self').close():console.log("no")}})  
} 

    function tense(dividend,divisor){
        // changed
        ans = (dividend/divisor).toFixed(2)
        ans3 = (dividend/divisor).toFixed(6)
            okay=((dividend.toString()).length - (ans.length-3))
            if (okay>0 ){
                for(i=0;i<okay;i++){ans=0+ans;ans3=0+ans3}
            }
    
            ans7=[]
            for(i=0;i<ans3.length;i++){if(ans3[i]!="."){ans7.push(ans3[i])}}
    
            n=ans.indexOf(".")
            ten=[]
            ani=[]
            for(i=1;i<ans3.length;i++){ten.push(Math.pow(10,n-i))} 
            ki=dividend
            moo=[]
            coun=1
            counl=1
            for(i=0;i<ans7.length;i++){
                ko= ans7[i]*divisor
                ko*=ten[i]
                if (ten[i]<1){ko=ko.toFixed(coun);coun+=1;}
                ani.push(parseFloat(ko))
                ki-= ko
                if (ten[i]<1){ki=ki.toFixed(counl);counl+=1;}
               // 
                ani.push(parseFloat(ki))
                
    
            }  
           
            ani2=[]
            for(i=0;i<ani.length;i++){ani2.push(ani[i].toString())}
           for(i=0;i<ani.length;i++){popo=ani2[i].indexOf(".");if(popo!=-1){ani2[i]=(ten[popo-1]).toString().substring(1)+ ani2[i];ani2[i]=ani2[i].split(".")[0]+ani2[i].split(".")[1]
           //check
          // 
        }
    }
    nm=[]
    for(var i=0;i<ani.length;i++){ popo= ani2[i].length;if(ani2[i].length <(ten[0]).toString().length){ani2[i]=ten[0].toString().substring(popo)+ani2[i]};
    nm.push((popo))
    ugy = parseFloat(ani2[i])
    if(ugy<divisor&ugy!=0){ani2[i]+="0"}
    }
            //console.log(["ten[0]",ten[0],"len,",(ten[0]).toString().length])
           // return ["ani2len",ani2.length,ani2,nm,"nmlen",nm.length]
            return ani2
            var theans=from(ans3,ans.length) ;
         }
    
    
        // vomit= document.getElementById("divside").innerText
        // console.log( document.getElementById("divside").innerText.length) 
        // document.getElementById("divside").deleteRow(0)
        
        function uttt() {
            var texx= document.createElement("input");
            
            texx.style.width="75";
            texx.style.height="20";
            texx.id="inp"+counte
            
            texx.type = "tel"
            texx.autocomplete="off"
           
            texx.setAttribute("oninput","ValidatePassKey(id)")
            //test
            //texx.style.display = "none"
            //texx.value=tense(dividend,divisor)[counte]
            document.getElementById("div"+counte).appendChild(texx)
            counte+=1
            
          }
          function uttt2() {
            var texx= document.createElement("input");
            
            texx.style.width="75";
            texx.style.height="20";
            texx.id="inp"+counte
            texx.type = "tel"
            texx.autocomplete="off"
            texx.setAttribute("oninput","ValidatePassKey(id)")
            //texx.oninput="ValidatePassKey()"
            
            //test
            //texx.style.display = "none"
            texx.value=tense(dividend,divisor)[counte]
            document.getElementById("div"+counte).appendChild(texx)
            counte+=1
            
          }
          //document.getElementById("div1").innerText
          function utt(){
            console.log("utt")
              answer()
              corr=[]
              var theans=from(ans3,ans.length) ;
              //noi()
              corr.push(theans)
            var inpans= document.createElement("input")
            inpans.style.width="75";
            inpans.style.height="20";  
            inpans.id="inpans"
            
            inpans.type = "tel"
            inpans.autocomplete="off"
            //testing
           //inpans.value=theans
            document.getElementById("answer").appendChild(inpans)
            for(var i=0;i<ans2.length*2;i++){
                corr.push(tense(dividend,divisor)[i])
            uttt()}
            //console.log(["corr",corr])
        }
       
function answer(){
    noi()
    counte = 0
    
    
    
    
       //document.getElementById("answer").innerHTML = ans ;
       document.getElementById("answer").innerHTML = "" ;
        document.getElementById("answer3").innerHTML = ans3  ;
        itm = document.getElementById("divside").lastChild
        colcount=0
        for(var i=0;i<ans2.length*2;i++){
            cln = itm.cloneNode(true);
             // cln.appendChild(texx)
          //cln.innerText=tense(dividend,divisor)[i]
          cln.innerText=""
        cln.id="div"+i
        //console.log(texx)
        
        if(i%2==0){cln.style="border-bottom: 4px solid "+googygoo[colcount]+";";colcount+=1;}
        document.getElementById("divside").appendChild(cln)
        
      //  for(var i=0;i<ans2.length;i++){)}
        //document.getElementById("dividend").replaceWith(texx);
        
        
}
     ;}    

     function answer4(){
        score-=5
        answer()
        corr=[]
        var theans=from(ans3,ans.length) ;
        //noi()
        corr.push(theans)
      var inpans= document.createElement("input")
      inpans.style.width="75";
      inpans.style.height="20";  
      inpans.id="inpans"
      inpans.type = "tel"
      inpans.autocomplete="off"
      //testing
     inpans.value=theans
      document.getElementById("answer").appendChild(inpans)
      for(var i=0;i<ans2.length*2;i++){
          corr.push(tense(dividend,divisor)[i])
      uttt2()}
      //console.log(["corr",corr])
      
      
    }   
     

     function done(){
        console.log("done")
         put=[]
       // console.log(ids)
       
         put.push( document.getElementById("inpans").value)
         for(var i=0;i<ans2.length*2;i++){
            // vooo+=1
             put.push( document.getElementById("inp"+ i).value)
         }
         if(put[0]!=corr[0]){document.getElementById("inpans").style.backgroundColor=mycolour1}else{document.getElementById("inpans").style.backgroundColor=inputcolour}
         for(var i=1;i<put.length;i++){
          if(put[i]!=corr[i]){document.getElementById("inp"+ (i-1)).style.backgroundColor=mycolour1}else{document.getElementById("inp"+ (i-1)).style.backgroundColor=inputcolour}
         }
         //console.log(vooo)
         noose=arraysMatch(corr,put)
         if(noose){alert("Correct");score+=5}else{alert("Wrong");score-=1}
         document.getElementById("score").innerText=score

     }

     function arraysMatch(arr1,arr2){
        if(arr1.length !== arr2.length)return false;
        for(var i=0;i<arr1.length;i++) {
            if (arr1[i]!==arr2[i]) return false;
        }
        return true;
    }
function from(string,index){
    //grab text from a particular index maybe?
    var takefr="" ;for(i=0;i<index;i++){takefr+=string[i]};return takefr
 }
 function froma(array,index){
    //grab item from a particular index maybe?
    var takefr=[] ;for(i=index+1;i<array.length;i++){takefr.push(array[i])};return takefr
 }
     
function hiding(){
   var x = document.getElementById("Main");
   var y = document.getElementById("settings");
    if (x.style.display === "none"){
        x.style.display = "block" ;
        y.style.display = "none" ;
    } else {
        x.style.display = "none"
        y.style.display = "block"
    }
}

function hiding2(){
   var x = document.getElementById("Main");
   var y = document.getElementById("historydiv");
    if (x.style.display === "none"){
        x.style.display = "block" ;
        y.style.display = "none" ;
    } else {
        x.style.display = "none"
        y.style.display = "block"
    }
}

function sumarr(array){
    dad = ""
    for (let index = 0; index < array.length; index++) {
        dad+= array[index];
        po=dad
        
    }return po
}

function arrplaces(array){
    dad = []
    for (let index = 0; index < array.length; index++) {
        for(let jindex = 0; jindex < array[index].length; jindex++){
            dad.push(index) ;
        po=dad}
        
    }return po
}

function loop(){
    ids=[]
    console.log("loop")
    answer()
    ids.push("answer")
    
    corr=[]
var theans=from(ans3,ans.length) ;
//noi()
corr.push(theans)

for(var i=0;i<ans2.length*2;i++){
    ids.push("div"+i)
  corr.push(tense(dividend,divisor)[i])
}
    arp=arrplaces(corr)
    //console.log(arp)
    colocou=0
        for (var j=0;j<arp.length;j++){
       targ= ids[arp[j]]
       
    dinpans2= document.createElement("input")
    dinpans2.id="input"+j
    dinpans2.autocomplete="off"
    dinpans2.type = "tel"
    dinpans2.style.backgroundColor = mycolour1
    //colors
   if(j!=theans.length-3 & j<theans.length ){dinpans2.style.backgroundColor=googygoo[colocou];colocou+=1}
    dinpans2.style.width="15";
    dinpans2.style.height="20"; 
    dinpans2.setAttribute("oninput","ValidatePassKey2(id,1)") 
    //messing with . decimal
    if(j==theans.length-3 & j<theans.length ){dinpans2.setAttribute("oninput","")}
   
    document.getElementById(targ).appendChild(dinpans2)
    }

}

function answer5(){
    score-=5
    arp=arrplaces(corr)
    console.log(ids)
        for (var j=0;j<arp.length;j++){
       targ= ids[arp[j]]
      // console.log(sumarr(corr)[j])
    dinpans2= document.getElementById("input"+j)
    dinpans2.value=sumarr(corr)[j]
   
    }
} 

function done2(){
    forcook=[]
    
    console.log("done2")
    put=""

  
    arp=arrplaces(corr)
    for(var i=0;i<arp.length;i++){
        vooot=document.getElementById("input"+ i).value
        if(vooot!=""){put+= vooot}else{put+="0"}
    }
    dupe=corr[0].length
    console.log(["corr",dupe])
    // changed
    for(var i=dupe;i<put.length;i++){
        if(put[i]!=sumarr(corr)[i]){document.getElementById("input"+ i).style.backgroundColor=mycolour1;}else{document.getElementById("input"+ (i)).style.backgroundColor=inputcolour}
    }
   
    noose=(sumarr(corr)==put)
    if(noose){
        alert(dividend + "/"+ divisor +" = "+ ans + ":  Correct");
        score+=5;
    //countq+=1
    question()
    loop()
}else{alert("Wrong");score-=1}
    document.getElementById("score").innerText=score
    forcook.push(score)
    forcook.push(put)
    setCookie(document.getElementById("question").innerText,forcook)
    mygetarray =document.cookie.split(";")
console.log(mygetarray)
}

function handleKeyDownEvent(e){ if(e.key == 'Backspace'){console.log("murderbot")}}



function answer52(){//fake function
    //score-=5
    arp=arrplaces(corr)
    //console.log(arp)
        for (var j=0;j<arp.length;j++){
       targ= ids[arp[j]]
      // console.log(sumarr(corr)[j])
    dinpans2= document.getElementById("input"+j)
    dinpans2.value=sumarr(corr)[j]
   
    }
    
}


  function setCookie(cname,cvalue){
      expires="expires=THU, 03 Feb 2022 00:00:00 UTC;"
      document.cookie = cname + "=" + cvalue + ";"+expires+"path=/";
  }

  function getCookie(cname){
      var name = cname + "=" ;
      var decodedCookie = decodeURIComponent(document.cookie) ;
      var ca = decodedCookie.split(';') ;
      for (var i = 0;i <ca.length;i++){
          var c = ca[i];
          while (c.charAt(0) == '') {
              c = c.substring(1);
          }if(c.indexOf(name)== 0) {
              return c.substring(name.length,c.length);
          }
      }
      return decodedCookie ;
  }

  function checkCookie(name){
     var cookname = getCookie(name)
     if(cookname!= ""){
         alert("no cookie for you")
     }else{alert("cookie!!!!")}
  }

  function resume() {
   mygetarray =document.cookie.split(";")
   equal= mygetarray[mygetarray.length-1].split("=")
//    divi=[];div.push()
equal2=equal[1].split(",")
   cookdividend=equal[0].split("/")[0]
  cookdevisor= equal[0].split("/")[1]
  cookscore =parseInt(equal2[0])
  cookinputs=equal2[1]
  score=cookscore
  document.getElementById("score").innerText=score
  question(cookdividend,cookdevisor)
  loop()
  console.log("qwertyui")
  console.log(cookinputs)
  for(i=0;i<cookinputs.length;i++){
      if(cookinputs[i]=="0"){document.getElementById("input"+i).value=""}
      else{
      document.getElementById("input"+i).value=cookinputs[i]}
  }
console.log(["qwertyui",cookinputs.length])
  }

  function save(){
    put=""

  
    arp=arrplaces(corr)
    for(var i=0;i<arp.length;i++){
        vooot=document.getElementById("input"+ i).value
        if(vooot!=""){put+= vooot}else{put+="0"}
    }
    forcook=[]
    document.getElementById("score").innerText=score
    forcook.push(score)
    forcook.push(put)
    setCookie(document.getElementById("question").innerText,forcook)
    alert("saved")
  }

  function reset(){
      score=0
      document.getElementById("score").innerText=score
      question()
      loop()
  }