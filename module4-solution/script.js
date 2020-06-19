var name= prompt("Enter  Name:"); 
// var name = ["yakov", "john", "smith","jabin"];
// namec=name[0].split("");
// namec=name[1].split("");
// namec=name[2].split("");
// namec=name[3].split("");

// for (var index = 0; index < name.length; index++) {
    
var namec=name.split("");
if (namec[0]=="J" || namec[0]=="j") {
    console.log("Goodby  "+name);
    
} else {
    console.log("Hello  "+name);
    // document.getElementById(name).innerHTML="Hello"+name;
}