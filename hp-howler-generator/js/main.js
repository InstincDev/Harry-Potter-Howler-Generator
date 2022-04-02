
// eventListener and function call
document.getElementById("yell").addEventListener('click', yellAt)
// insert name into DOM

function yellAt(event){
    event.preventDefault();

    document.querySelector('body').style.backgroundColor = '#222f5b';

    document.querySelector('.placeForName').classList.toggle('hidden');

    document.querySelector('.title').style.color = "#727272";

    // get name values and put in vars
    const fname = document.querySelector(".fname").value;
    const mname = document.querySelector(".mname").value;
    const lname = document.querySelector(".lname").value;

    document.querySelector(".name").innerText = `${fname} ${mname} ${lname}`;
   document.querySelector('form').reset(); 
}