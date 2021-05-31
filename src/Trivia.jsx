import {useState, useEffect, Fragment} from "react"
import useSound from "use-sound"

import play from "./sachiro/play.mp3";
import correct from "./sachiro/correct.mp3";
import wrong from "./sachiro/wrong.mp3"

import "./reset.scss"
import "./app.scss"

export default function Trivia({
    data,
    queshtionnumber,
    setquestionnumber,
    setdroisgasvla,
}) {
    const [clasname, setclasname] = useState(null) //archevis
    const [itemunic, setitemunic]= useState(null)  // itemebis gansxvaveba
    const [queshtion, setquestion] = useState(null)

    const [chartva , setchartva] = useState(true) //tavidan gatishva
                                                  // qvevit chartvla
  
    //
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    const [initial, setinitial] = useState(0)

    useEffect(()=>{
       !chartva ? setchartva(true): console.log(queshtionnumber)
    },[queshtionnumber])
    console.log(queshtionnumber)
//   useEffect(()=>{
//     letsPlay() 
//   },[letsPlay])
    
    const delay = (duration, callbak)=>{
         setTimeout(()=>{
            callbak()
         },duration)
    }

    const hadleactive =(a, text)=>{
        if(a.text === text){
            setchartva(!chartva)
        }
        
        setitemunic(a)
        setclasname("pasuxi active")
        delay(2000, ()=> setclasname(a.correct?"pasuxi  correct" :"pasuxi  wrong"))
        
        delay(4000, ()=>{
            if(a.correct){
                correctAnswer()
                delay(2000, ()=>setquestionnumber((prev)=>prev+1))
            }else{
                wrongAnswer()
                delay(2000, ()=>{
                    setdroisgasvla(true)
                })
               
            }
        })
    }
    useEffect(()=>{
        setquestion(data[queshtionnumber-1])
    },[queshtionnumber, data])

   
    return (
        <div className="trivia">
            <div className="kitxva">
                <p className ="main_kitxva">
                    {queshtion?.question}
                </p>
            </div>
            <div className="pasuxebi">
                {
                 queshtion?.answers.map((items)=>{
                     return(
                        <Fragment key ={items.text}>
                           <button disabled={!chartva}
                           className= {itemunic===items? clasname : "pasuxi anime "}
                            onClick ={()=>hadleactive(items, items.text)}
                            // onClick ={()=>meorecklick(items)}
                            >{items.text}
                            
                            </button>
                            
                        </Fragment>
                     )
                 })
                }
               
            </div>
            
        </div>
    )
}
