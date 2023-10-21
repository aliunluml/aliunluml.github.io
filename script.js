var d = new Date();
var y = d.getFullYear();
document.getElementById("copy_year").innerHTML = y.toString();
function toggleDarkMode() {
   var b = document.body;
   b.classList.toggle("dark-mode");
   var e = document.getElementById("dark_mode_button")
   if (e.innerHTML === "Light mode"){
     e.innerHTML ="Dark mode";
   }
   else{
     e.innerHTML ="Light mode";
   }
}

const sizes = ["smaller","initial","larger"];

function changeFontsize(button){
   document.body.style.fontSize=sizes[parseInt(button.value)];
   
   if(button.id=="small_font_button"){
      if (button.value==="1"){
         document.getElementById("large_font_button").value="2";
         button.value="0";
      }
      else{
         document.getElementById("large_font_button").value="1";
      }
   }
   else{
      if (button.value==="1"){
         document.getElementById("small_font_button").value="0";
         button.value="2";
      }
      else{
         document.getElementById("small_font_button").value="1";
      }
   }
}
