import {useState, useEffect} from "react"

export default function Test_svg({droisgasvla,
    queshtionnumber,
    ricxvi,
    setricxvi}) {
  
//  var ricxviAq = 0;
 
  useEffect(()=>{
     setricxvi(true)
  },[queshtionnumber])
    
    
   useEffect(()=>{
    const circle = document.querySelector(".rgoli");
    const circle2 = document.querySelector(".rgoli_test");
    const circumference = circle.getTotalLength()
    let radiusi = document.querySelector(".rgoli").getAttribute("r")

    var ricxviAq = 0;
        if(ricxvi==true){
           
            const interval = setInterval(() => {
              
                circle.style.strokeDashoffset = circumference -(ricxviAq / 29) * circumference
                if(ricxviAq==5){
                    circle.style.stroke= "yellowgreen"
                }else if( ricxviAq== 15){
                    circle.style.stroke= "crimson"
                }else if( ricxviAq > 22){
                    circle.style.stroke= "red"
                }
                ricxviAq++
            }, 1000);
           
            return ()=>clearInterval(interval)        
        }

   },)

    return (
        <div className="svg_blok">
            <svg className="svg" width ="200" height="200">
                <circle className="rgoli_test" cx="100" cy="100" r="70"
                 stroke="white"
                 strokeWidth="7px"
                 />
                <circle className="rgoli" cx="100" cy="100" r="70"
                 stroke="green"
                 strokeWidth="8px"
                 />
                 
            </svg>
          
        </div>
    )
}
