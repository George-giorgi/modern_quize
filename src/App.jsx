import {useState, useEffect, Fragment} from "react"


import "./reset.scss"
import "./app.scss"
import "./global.scss"
import Timer from "./Timer"
import Trivia from "./Trivia"
import Shesvla from "./Shesvla"


function App() {
  const [queshtionnumber, setquestionnumber] = useState(1)

  const [droisgasvla, setdroisgasvla] = useState(false)
  const [earn, setearn]= useState("$ 0")
  const [name, setname] = useState(true)

  const [clas, setclas] = useState(false)

  const[saxeli, setsaxeli] = useState("")
 
  let handlecklick =()=>{
    setname(false)
    setclas(true)
  }

  let changehandler =(e)=>{
      setsaxeli(e.target.value)
      
  }
  
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid =
  [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1.000" },
    { id: 6, amount: "$ 2.000" },
    { id: 7, amount: "$ 4.000" },
    { id: 8, amount: "$ 8.000" },
    { id: 9, amount: "$ 16.000" },
    { id: 10, amount: "$ 32.000" },
    { id: 11, amount: "$ 64.000" },
    { id: 12, amount: "$ 125.000" },
    { id: 13, amount: "$ 250.000" },
    { id: 14, amount: "$ 500.000" },
    { id: 15, amount: "$ 1.000.000" },
  ].reverse()
  
  useEffect(()=>{
    if(queshtionnumber>1){
      const gio = moneyPyramid.find((m)=> m.id=== queshtionnumber-1).amount
      setearn(gio)
    }
  },[queshtionnumber,moneyPyramid ])
  
  return (
    <div className={clas? "app cda" : "app"}>
       {
         name? (<Shesvla 
          saxeli={saxeli}
          changehandler={changehandler}
          handlecklick={handlecklick}/>):
         (
           <Fragment>
                     
      <div className="main_left">
        {
          droisgasvla? 
         ( <h1 className ="earnn">you earn {earn}</h1>):
         (
           <>
            <div className="saxeli_timeri">
            <h1></h1>
            <div className="main_Timer">
                <Timer 
                setdroisgasvla={setdroisgasvla}
                queshtionnumber={queshtionnumber}
                />
            </div>
          </div>
          <div className="kitxva_pasuxi">
            <Trivia
            data={data}
            queshtionnumber={queshtionnumber}
            setquestionnumber={setquestionnumber}
            setdroisgasvla={setdroisgasvla}
            />
          </div>
          </>
         )
        }
        
      </div>
      <div className="main_right anime_right">
        {
          moneyPyramid.map((item)=>{
            return(
              <Fragment key={item.id}>
              <div className="tablo">
                <div className ={
                  queshtionnumber > 1 && queshtionnumber-1 ===item.id? 
                  "tablo_shida earn":
                  "tablo_shida"
                  }>
                 <span className ="nomeri">{item.id}</span>
                 <span className = "mosagebi">{item.amount}</span>
                </div>
            </div>
            </Fragment>
            )
          })
        }
        
      </div>

           </Fragment>
         )
       }

    </div>
  );
}

export default App;
