import NameInput from "./NameInput";
// As React is globally imported, the usual named importing needs to be destructured from it instead.
const { useState } = React;


const synth = window.speechSynthesis;


function mollyWeasley(){
    
    document.querySelector('.placeForName').classList.toggle('hidden');
    document.querySelector('body').style.backgroundColor = '#222f5b'
    document.querySelector('.title').style.color = "#727272";
    let yell = document.querySelector('.placeForName').innerText;
    document.querySelector('form').reset();
    let yellThis = new SpeechSynthesisUtterance(yell);

  synth.speak(yellThis);
  
}

function App(){
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    
 
    const handleSubmit = e =>{
        e.preventDefault()
       
             mollyWeasley()
    }
   
    function fullName(){

    }
    return(
        <div>
            <h1 className='title'>HP Howler Generator</h1>
            <form onSubmit={handleSubmit}>
                <NameInput name= {"First_Name"} value= {firstName} setValue={setFirstName}/>
                <NameInput name= {"Middle_Name"} value= {middleName} setValue={setMiddleName}/>
                <NameInput name= {"Last_Name"} value= {lastName} setValue={setLastName}/>
                <button type="submit" id="yell" value="yell">Yell</button>
            </form>
            

            <section className="placeForName hidden">
                <h1 className="name">{`${firstName} ${middleName} ${lastName}`}</h1>

                <p>HOW DARE YOU STEAL THAT CAR! I AM ABSOLUTELY DISGUSTED! YOUR FATHER'S NOW FACING AN INQUIRY AT WORK AND IT'S ENTIRELY YOUR FAULT! IF YOU PUT ANOTHER TOE OUT OF LINE WE'LL BRING YOU STRAIGHT HOME!</p>
                <p>Oh, and <span>InstincDev</span> dear, congratulations on making this Howler. Your father and I are so proud.</p>
            </section>
        </div>

)}

export default App
