var addpic=document.getElementById('addimg');
var input=document.getElementById('input');
var list=document.getElementById('list');

addpic.addEventListener('click',function() {
	if(input.value != ""){
		var newElement=document.createElement("LI");
		var textValue=document.createTextNode(input.value);
		var del=document.createTextNode("X");
		var newDivElement=document.createElement("DIV"); // treba nam za X;
		newDivElement.appendChild(del);
		newDivElement.setAttribute('class','deleteItem');

		// newElement je <li> tag koji se sastoji to TextNode-a i <div> taga 
		newElement.appendChild(textValue);  
		newElement.appendChild(newDivElement);  
		list.appendChild(newElement);
		newElement.setAttribute('class','newItem');

		input.value = "";
	}
	else
		alert("Unesite nesto !");
});

document.addEventListener('keypress', function(e){
	if(e.code=="Enter"){
		var newElement=document.createElement("LI");
		var textValue=document.createTextNode(input.value);
		var del=document.createTextNode("X");
		var newDivElement=document.createElement("DIV"); 

		newDivElement.appendChild(del);
		newDivElement.setAttribute('class','deleteItem');
		newElement.appendChild(textValue);  
		newElement.appendChild(newDivElement);  
		list.appendChild(newElement);
		newElement.setAttribute('class','newItem');

		input.value = "";
	}
});


document.addEventListener('click', function(e){
//	console.log(e.target);
	if(e.target.className == 'newItem'){
		e.target.setAttribute('class','clicked');
	}
	else if(e.target.className == 'clicked')
		e.target.setAttribute('class','newItem');
	else if(e.target.className == 'deleteItem')
		e.target.parentElement.remove();
});











