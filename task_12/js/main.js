var value="Red" ;
var color = ["Blue ", "Green", "Red", "Red", "Orange", "Violet", "Violet", "Violet", "Indigo", "Blue ", "Red", "Blue ", "Blue ",  "Yellow "];
color = color.filter(Array => Array !== value) ;
document.write("Removed Red Color :</br>" + color);


