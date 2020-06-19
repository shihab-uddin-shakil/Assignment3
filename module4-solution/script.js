// var name= prompt("Enter  Name:"); 
var names=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for (var name in names){
	if (names[name].startsWith("J")||names[name].startsWith("j")){
		console.log("Good Bye "+names[name]);
	}
	else{
		console.log("Hello "+names[name]);
	}
}
