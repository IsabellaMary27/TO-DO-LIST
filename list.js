var a = 0;
var array = Array();
function add()
{
 array[a] = document.getElementById("text1").value;
 a++;
 document.getElementById("text1").value = "";
}
function display()
{
   var e = "<hr/>";   
   for (var y=0; y<array.length; y++)
   {
     e += "TASK " + (y+1) + " : " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}