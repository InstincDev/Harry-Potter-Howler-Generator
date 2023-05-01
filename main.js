
// // eventListener and function call
// document.getElementById("yell").addEventListener('click', yellAt)
// // insert name into DOM

// function yellAt(event){
//     event.preventDefault();

//     document.querySelector('body').style.backgroundColor = '#222f5b';

//     document.querySelector('.placeForName').classList.toggle('hidden');

//     document.querySelector('.title').style.color = "#727272";

//     // get name values and put in vars
//     const fname = document.querySelector(".fname").value;
//     const mname = document.querySelector(".mname").value;
//     const lname = document.querySelector(".lname").value;

//     document.querySelector(".name").innerText = `${fname} ${mname} ${lname}`;
//    document.querySelector('form').reset(); 
// }

const synth = window.speechSynthesis;
// document.getElementById("yell").addEventListener('click', mollyWeasley)

function mollyWeasley(){
    let fname = document.querySelector("First name").value;
    let mname = document.querySelector("Middle Name").value;
    let lname = document.querySelector("Last Name").value;

    document.querySelector('.placeForName').classList.toggle('hidden');
    document.querySelector('body').style.backgroundColor = '#222f5b'
    document.querySelector('.title').style.color = "#727272";
    document.querySelector('.name').innerText = `${fname} ${mname} ${lname}`;
    let yell = document.querySelector('.placeForName').innerText;
    document.querySelector('form').reset();
    let yellThis = new SpeechSynthesisUtterance(yell);

  synth.speak(yellThis);
}