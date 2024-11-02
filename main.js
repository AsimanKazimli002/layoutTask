// Main Div
let mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
document.body.appendChild(mainDiv);

//Header div
let headerDiv = document.createElement("div");
headerDiv.classList.add("headerDiv");
mainDiv.appendChild(headerDiv);

let headerText = document.createElement("span");
headerText.innerText = "<header>";
headerDiv.appendChild(headerText);

//Nav Div
let navDiv = document.createElement("div");
navDiv.classList.add("navDiv");
mainDiv.appendChild(navDiv);

let navText = document.createElement("span");
navText.innerText = "<nav>";
navDiv.appendChild(navText);

//Section Div
let sectionDiv = document.createElement("div");
sectionDiv.classList.add("sectionDiv");
mainDiv.appendChild(sectionDiv);

let sectionText = document.createElement("span");
sectionText.innerText = "<section>";
sectionDiv.appendChild(sectionText);

// function dinamic(parent,tag,classname){
//     const element=document.createElement(tag);
//     element.classList.add(classname);
//     parent.appendChild(element);

// }