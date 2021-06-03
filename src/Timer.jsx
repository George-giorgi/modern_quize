import {useState, useEffect} from 'react'
import useSound from "use-sound"
import wrong from "./sachiro/wrong.mp3"




export default function Timer({queshtionnumber, setdroisgasvla,xma}) {
    const [timer, settimer]= useState(30)
    const [wrongAnswer] = useSound(wrong);
    
    useEffect(()=>{
        if(timer===0){
            setdroisgasvla(true)
            if(xma){
                wrongAnswer()
            }
           
        }
      let gio = setTimeout(()=>{
            settimer((prev)=>prev-1)
        },1000)
        console.log("dont worry be happy ))")
        return ()=>clearInterval(gio)
    },[timer])
    useEffect(()=>{
        settimer(30)
    },[queshtionnumber])

    
    return (
        <div className="timer">
            <p className="cipri">
                {timer}
            </p>
            
        </div>
    )
}
