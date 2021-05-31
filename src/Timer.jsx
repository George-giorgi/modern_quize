import {useState, useEffect} from 'react'
import useSound from "use-sound"
import wrong from "./sachiro/wrong.mp3"

export default function Timer({queshtionnumber, setdroisgasvla}) {
    const [timer, settimer]= useState(30)
    const [wrongAnswer] = useSound(wrong);
    
    // useEffect(()=>{
    //     if(timer===0){
    //         setdroisgasvla(true)
    //         wrongAnswer()
    //     }
    //   let gio = setTimeout(()=>{
    //         settimer((prev)=>prev-1)
    //     },1000)
    //     return ()=>clearInterval(gio)
    // },[timer])
    // useEffect(()=>{
    //     settimer(30)
    // },[queshtionnumber])
   
    return (
        <div className="timer">
            <p>{timer}</p>
        </div>
    )
}
