var name= prompt("Enter your Name:");
 var namec=name.split("")
if (namec[0]=="J" || namec[0]=="j") {
    document.write("Goodby  "+name);
    
} else {
    document.write("Hello  "+name);
    // document.getElementById(name).innerHTML="Hello"+name;
    
    
}