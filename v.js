document.addEventListener("DOMContentLoaded", function () { 
    

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
      document.querySelector(".rinfo").innerHTML=`Votes For candidte 1 $(count1)`;
    }

    //---------------------- On Reset ------------------------------


    document.querySelector("#re").onclick = function(){

      count1 = 0;
      count2 = 0;
      document.querySelector("#first").innerHTML= count1;
      document.querySelector("#second").innerHTML= count2;
      document.querySelector(".result").innerHTML="";



    };

})