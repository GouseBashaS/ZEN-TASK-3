//For the given JSON iterate over all for loops(for,forin,for of,for each)?
var json = [{
    "id" : "Kamal", 
    "qtn"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task 3",
    "mail": "kamal07@gmail.com"
},
{
    "id" : "Rajini", 
    "qtn"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task 3",
    "mail": "rajini12@gmail.com"
}];
//for loop
console.log("*** FOR LOOP ***")
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.qtn);
    console.log(obj.task);
    console.log(obj.mail);

}
//for In
console.log("*** FOR IN ***")
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  console.log(json[key].task);
 
}
}
//for Of
console.log("*** FOR OF ***")
let text = "";
for (let x of json[key].id) {
 text += x; 
}
console.log(text);
//for Each
console.log("*** FOR EACH ***")
json.forEach(function(obj) { console.log(obj.mail); });
json.forEach(function(obj) { console.log(obj.id); });
console.log("*".repeat(80));