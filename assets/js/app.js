
function Show() {
    var value = parseInt(document.getElementById("mbl").value);
    var x = value;
    var value = parseInt(document.getElementById("faz").value);
    var y = value;
    var value = parseInt(document.getElementById("mdt").value);
    var z = value;
    var count = 0;
    var text = document.getElementById("msg")

   if (y*=x) {
       y/=100
       y+=x
       y/=z
        text.innerHTML = `Monthly payment:${Math.floor(y)}AZN `
   }
  
    
}