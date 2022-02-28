//set global variables
var i=0;
var j=0;
var k=0;
var o=0;
var p=0;
var listItems=[];
window.localStorage.removeItem("isItDone");
var ul=document.getElementById("datat");
if (localStorage.getItem("tasks") === null) {
    removeItems()
  }
var teksti1=localStorage.getItem("tasks");
var myArray=teksti1.split(",");
//Check for conditions and create a local storage array
if (myArray[0]=="") {
    myArray.shift();
}
for (var l=0; l<myArray.length; l++) {
    listItems.push(myArray[l]);
}

function addItemsOnLoad() {
    var button=document.createElement("button");
    var x=document.createElement("li")
    
    button.innerHTML=("X");
    x.numberValue=i;
    const listElement=document.querySelector("ul");
    var text1=document.createTextNode(myArray[i])
    if (myArray != "") {
	listElement.append(x);
    
    x.id=i;
    
	x.appendChild(text1);
    
    i++
    if (x.textContent!=""){
	x.appendChild(button);
    x.classList=("li");
    }
}

    button.onclick=function(){
        button.parentElement.remove()
        delete listItems[x.numberValue];
        localStorage.setItem("tasks", listItems);
        
	};
}
	
function appendMultiple() {
	for (var j=0; j<myArray.length; j++) {
	addItemsOnLoad();
    //isDone();
    setDone();
	};
}

//Create task -function
function addItem() {

	var button=document.createElement("button");
    button.innerHTML=("X");
	var x = document.createElement("li");
	var task=document.getElementById("createTask").value;
	var t = document.createTextNode(task);
	var colorChange=document.getElementById("createTask");
    x.numberValue=i;
    


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
    
    listItems.push(task);

//on successful input, add task to list
	x.appendChild(t);
    x.classList=("li");

//Create a remove button for each new task
	x.appendChild(button);
	
	i++;
	document.getElementById("datat").appendChild(x);
	document.getElementById("createTask").value="";

//remove red border upon correct input
	colorChange.classList.remove("error");


	
//Remove button functionality
button.onclick=function(){
    button.parentElement.remove()
    button.remove();
    delete listItems[x.numberValue];
    localStorage.setItem("tasks", listItems);
    
};
    
};
//save tasks to local storage	

localStorage.setItem("tasks", listItems);
}	

function setDone() {
    element1=document.getElementById(o);
    element1.classList=("done");
    o++
    }

    doneList=[];

function saveDone() {
    var p=0;
    ele1=document.getElementsByTagName("li");
    for (p=0; p<myArray.length; p++) {
    if (ele1.classList="done") {
        doneList.push(1);
    }
    else if (ele1.classList="li") {
        doneList.push(2);
    }
        }
        console.log(doneList);
}



localStorage.setItem("tasks", listItems);



function removeItems() {
	listItems=[];
	localStorage.removeItem("tasks");
	localStorage.setItem("tasks", listItems);
	ul.innerHTML="";
}


//mark a task as done/undone and highlight it
var markDone = document.querySelector("ul");
markDone.addEventListener("click", function(ev) {
  if (ev.target.tagName == "LI") {
	ev.target.classList.toggle("done");
  }
}


)



/*function isDone() {
    var isItDone=todo.classList;
    alert(isItDone);
    }

function setDone() {
    var l=0;
    var todo=document.getElementById(l);
}
*/
function clearRed() {
    var form=document.getElementById("createTask");
    form.classList.add(".textArea");
}
document.write("testilause, jos ei näy, js ei toimi");
//ul.append(localStorage.getItem("taskObject"));