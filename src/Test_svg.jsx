import {useState, useEffect} from "react"

export default function Test_svg({droisgasvla,
    queshtionnumber,
    ricxvi,
    setricxvi}) {
  
    var ricxviAq = 0;
 
  useEffect(()=>{
     setricxvi(true)
  },[queshtionnumber])
    
    
   useEffect(()=>{
    const circle = document.querySelector(".rgoli");
    const circle2 = document.querySelector(".rgoli_test");
    const circumference = circle.getTotalLength()
    let radiusi = document.querySelector(".rgoli").getAttribute("r")
        if(ricxvi==true){
            const interval = setInterval(() => {
                if(document.body.clientWidth < 768){
                    circle.style.strokeDashoffset = circumference -(ricxviAq / 40) * circumference
                    
                }else{
                    circle.style.strokeDashoffset = circumference -(ricxviAq / 29) * circumference
                    // console.log(circle.style.strokeDashoffset)
                } 
                if(ricxviAq==5){
                    circle.style.stroke= "yellowgreen"
                }else if( ricxviAq== 15){
                    circle.style.stroke= "crimson"
                }else if( ricxviAq > 22){
                    circle.style.stroke= "red"
                }
                ricxviAq++
                // console.log(i)
            }, 1000);
            // if(document.body.clientWidth < 768){
            //     document.querySelector(".rgoli").setAttribute("r", 50)
            //     document.querySelector(".rgoli_test").setAttribute("r", 50)
            // }
            return ()=>clearInterval(interval)        
        }
        
    
    // const interval = setInterval(() => {
    //     if(document.body.clientWidth < 768){
    //         circle.style.strokeDashoffset = circumference -(i / 40) * circumference
            
    //     }else{
    //         circle.style.strokeDashoffset = circumference -(i / 29) * circumference
    //     }
    //     if(i==15){
    //         circle.style.stroke= "yellowgreen"
    //     }else if( i== 22){
    //         circle.style.stroke= "crimson"
    //     }else if( i > 22){
    //         circle.style.stroke= "red"
    //     }
    //     i++
    // }, 1000);
    // if(document.body.clientWidth < 768){
    //     document.querySelector(".rgoli").setAttribute("r", 50)
    //     document.querySelector(".rgoli_test").setAttribute("r", 50)
    // }
    // return ()=>clearInterval(interval)
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
