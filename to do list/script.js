'use strict';

window.onload = loadTasks;

let elements = [];

function loadTasks() {
  if (JSON.parse(localStorage.getItem('elements')) != null)
    elements = JSON.parse(localStorage.getItem('elements'));
    console.log(elements);
    display();
}

function addElement() {
    if (document.querySelector('.add-text').value.trim() != '') {
        elements.push(document.querySelector('.add-text').value.trim());
    if (localStorage.getItem('elements') == null) {
        localStorage.setItem('elements', JSON.stringify(elements));
    } else {
        localStorage.setItem('elements', JSON.stringify(elements));
    }   
        display();
        document.querySelector('.add-text').value = '';
    }
}

function display() {
    document.querySelector('.list').innerHTML = '';
    for (let i = 0; i < elements.length; i++)
      document.querySelector('.list').innerHTML +=
        "<center><div class='element'>" +
        elements[i] +
        "<img class='tick' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdrNL09nOpjjqaL2btv2RrLQFh-drL61VGsoO6AghWQxe_PDH&usqp=CAU' onclick='strike(" +
        i +
        ")'><img class='dustbin' src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del(" +
        i +
        ")'></div></center><br>";
  }

function del(item) {
        elements.splice(item, 1);
    if (localStorage.getItem('elements') == null) {
        localStorage.setItem('elements', JSON.stringify(elements));
    } else {
        localStorage.setItem('elements', JSON.stringify(elements));
    }
    display();
}

function strike(item) {
    if (elements[item].includes("<strike>")) {
      elements[item] = elements[item].replace("<strike>", "");
    } else {
      elements[item] = "<strike>" + elements[item] + "</strike>";
    }
    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    display(); 
}