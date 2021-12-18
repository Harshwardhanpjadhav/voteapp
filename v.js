document.addEventListener("DOMContentLoaded", function () { 
    
// ------------------------On Submit--------------------------------

    // document.querySelector('.Sub').onclick=function(){

    // var n1 = document.querySelector('.dd1').value;
    // var n2 = document.querySelector('.dd2').value;
    // console.log(n1)
    // document.querySelector(".cd1").innerHTML=n1;
    // document.querySelector(".cd2").innerHTML=n2;
    
    // document.querySelector('.dd1').innerHTML="";
    // document.querySelector('.dd1').innerHTML="";
    // }  

  //------------------ For First Voter -----------------------------


     var count1 = 0;
      document.querySelector("#vf").onclick = function (){
      count1 += 1;
      document.querySelector("#first").innerHTML= count1;
    }


    //--------------- For second Voter -----------------------------


    var count2 = 0;
      document.querySelector("#vs").onclick = function (){
      count2 += 1;
      document.querySelector("#second").innerHTML= count2;
    }


    //-------------------- ON finish -------------------------------


    document.querySelector("#vfi").onclick = function (){
      
      

      if(count1>count2){
        document.querySelector(".result").innerHTML="Candidate 1 Won !!";
      } else{
        document.querySelector(".result").innerHTML="Candidate 2 Won !!";
      }
      if (count1===count2) 
      {
        document.querySelector(".result").innerHTML="Tie";
      }
      
    }

    //---------------------- On Reset ------------------------------


    document.querySelector("#re").onclick = function(){

      count1 = 0;
      count2 = 0;
      document.querySelector("#first").innerHTML= count1;
      document.querySelector("#second").innerHTML= count2;
      document.querySelector(".result").innerHTML="";
      document.querySelector(".info1").innerHTML= "";
      document.querySelector(".info2").innerHTML= "";



    };



    // ---------------------------Show Result ---------------------

    document.querySelector("#sho").onclick= function(){
      document.querySelector(".info1").innerHTML= `candidate 1 votes : ${count1}`;
      document.querySelector(".info2").innerHTML= `candidate 2 votes : ${count2}`;


    }


})