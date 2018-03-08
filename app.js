var derpyThings = ["Das One Breeze", 7, false, "Skrrrrr"];
var derpyBestPriend = "Russell";

derpyThings.pop();
derpyThings.push(derpyBestPriend);

var i;
function derpster() {
  for (i=0; i<derpyThings.length; i++){
  var node = document.createElement("LI");
      var arr = document.createTextNode(derpyThings[i])
      document.getElementById("fourth").appendChild(node);
      node.appendChild(arr);
  }
}
derpster(derpyThings);

var idekAnymore = {
  me1 : "Jarren";
  me2 : "Give";
  me3 : "Up";
}

document.getElementById("fourth").append(idekAnymore.me1);
document.getElementById("fourth").append(idekAnymore.me2);
document.getElementById("fourth").append(idekAnymore.me3);