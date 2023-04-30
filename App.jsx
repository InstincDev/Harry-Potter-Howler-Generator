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
    const [userName, setUserName] = useState("")

 
    const handleSubmit = e =>{
        e.preventDefault()
        
        const first = e.target.First_Name.value;
        const middle = e.target.Middle_Name.value;
        const last = e.target.Last_Name.value;

        setUserName(`${first} ${middle} ${last}`)

       
             
    }
   
    function fullName(){

    }
    return(
        <div>
            <h1 className='title'>HP Howler Generator</h1>
            <form onSubmit={handleSubmit}>
                <NameInput name= {"First_Name"} fullName={fullName}/>
                <NameInput name= {"Middle_Name"}/>
                <NameInput name= {"Last_Name"}/>
                <button type="submit" id="yell" value="yell">Yell</button>
            </form>
            

            <section className="placeForName hidden">
                <h1 className="name">{userName}</h1>

                <p>HOW DARE YOU STEAL THAT CAR! I AM ABSOLUTELY DISGUSTED! YOUR FATHER'S NOW FACING AN INQUIRY AT WORK AND IT'S ENTIRELY YOUR FAULT! IF YOU PUT ANOTHER TOE OUT OF LINE WE'LL BRING YOU STRAIGHT HOME!</p>
                <p>Oh, and <span>InstincDev</span> dear, congratulations on making this Howler. Your father and I are so proud.</p>
            </section>
        </div>

)}

export default App
