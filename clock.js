// HTML CSS JSResult Skip Results Iframe
// EDIT ON
function currentTime() {
  let date = new Date(); 
  let Hour = date.getHours();
  let minytes = date.getMinutes();
  let siconds = date.getSeconds();
  let session = "AM";

  if(Hour === 0){
      Hour = 12;
  }
  if(Hour > 12){
      Hour = Hour - 12;
      session = "PM";
   }

   Hour = (Hour < 10) ? "0" + Hour : Hour;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = Hour + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();