


function addItemsOnLoad() {

    var li=document.createElement("li");
    var ul=document.getElementById("datat");
    var teksti1=localStorage.getItem("tasks");
    var myArray=teksti1.split(",");
    var textnode=document.createTextNode(myArray[0])
    var i=0;
  
    while (i<myArray.length) { 
    ul.appendChild(li);
    li.appendChild(document.createTextNode(myArray[i]));
    
    i++;
    }
    

	

    
 
	
	
	
    



    /*ul.appendChild(li);
	li.appendChild(document.createTextNode(myArray[0]));
    ul.appendChild(li);
	li.appendChild(document.createTextNode(myArray[1]));
*/
	
	
	


	
  
}

//Create a local storage array
var listItems=[];


/*function storeItems() {
	localStorage.setItem("tasks", listItems);
	}
	*/
//Create task -function
function addItem() {

	
	var x = document.createElement("li");
	let button=document.createElement("button");
	var task=document.getElementById("createTask").value;
	var t = document.createTextNode(task);
	var colorChange=document.getElementById("createTask");
	button.innerHTML=("X");


//check input and cancel if there's an issue, add red border on error
	if (task=="") {
		alert("The field must not be empty");
		colorChange.classList.add("error");
		return;
	}
	else if (task.length<2) {
		alert("Too short, minimum is 2 characters");
		colorChange.classList.add("error");
		return
	}
	else if (task.length>50) {
		alert("Too long, maximum is 50 characters");
		colorChange.classList.add("error");
		return;
	}
	else {
//on successful input, add task to list
	x.appendChild(t);
	x.appendChild(button);
	document.getElementById("datat").appendChild(x);
	document.getElementById("createTask").value="";

//save tasks to local storage	
	listItems.push(task);
	localStorage.setItem("tasks", listItems);

//remove red border upon correct input
	colorChange.classList.remove("error");
  	

//Create a remove button for each new task
	
	

	
//Remove button functionality
  button.onclick=function(){
	  button.parentElement.remove()
	  return;

  };
	}

	
}


//debugging tool
function returnValue() {
	alert(localStorage.getItem("tasks"))
}


//mark a task as done/undone and highlight it
var markDone = document.querySelector("ul");
markDone.addEventListener("click", function(ev) {
  if (ev.target.tagName == "LI") {
	ev.target.classList.toggle("done");
  }
});




document.write("testilause, jos ei näy, js ei toimi");
//ul.append(localStorage.getItem("taskObject"));