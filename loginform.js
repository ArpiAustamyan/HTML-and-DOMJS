var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'style.css'; 

var first = document.createElement("div");
first.className="first";
var form =document.createElement("form");

var h1=document.createElement("h1");
h1.innerHTML="Sign In";

var div = document.createElement("div");
div.className="second";
var username=document.createElement("label");
var password=document.createElement("label");
username.innerHTML="Username";
password.innerHTML="Password";

var usernameinput=document.createElement("input");
var passwordinput=document.createElement("input");

var firstdiv=document.createElement("div");
var seconddiv=document.createElement("div");

firstdiv.appendChild(username);
firstdiv.appendChild(document.createElement("br"));
firstdiv.appendChild(usernameinput);
seconddiv.appendChild(password);
seconddiv.appendChild(document.createElement("br"));
seconddiv.appendChild(passwordinput);

div.appendChild(firstdiv);
div.appendChild(seconddiv);

var buttons=document.createElement("div");
buttons.className="buttons";
var signin=document.createElement("button");
var register=document.createElement("button");

signin.innerHTML="Sign In";
register.innerHTML="Register";

var firstbuttondiv=document.createElement("div");
var secondbuttondiv=document.createElement("div");

firstbuttondiv.appendChild(signin);
secondbuttondiv.appendChild(register);

buttons.appendChild(firstbuttondiv);
buttons.appendChild(secondbuttondiv);

form.appendChild(h1)
form.appendChild(div);
form.appendChild(buttons);

first.appendChild(form);

document.body.appendChild(first);