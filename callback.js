function greeting(callback, name) {
  //    return console.log(typeof callback);
  callback(name);
}
 
function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetingNight(name) {
  console.log("Good Night", name);
}


greeting(greetingHandler, "Yasin Arafat");
greeting(greetingHandler, "Jhanker Vai")
greeting(greetingNight, "Jhanker Vai")