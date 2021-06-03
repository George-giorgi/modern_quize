import { Fragment, useState } from "react"
import "../CSS_M/shescvla.css"

export default function Shesvla({handlecklick,
    changehandler,
    saxeli,
    xma,
    setxma
}) {

    const [volclas, setvolclas] = useState(false)
    let xmiscklick = () =>{
        setxma(!xma)
        setvolclas(!volclas)
    }
    return (
        <Fragment>  
        <div className ="shesvla">
            <h2 className={volclas? "onvolume" : "offvolume"}>Sound</h2>
            <label className="switch">
                <input onClick={xmiscklick}  type="checkbox" checked={xma} />
                <span className="slider round"></span>
            </label> 
            <h3>{saxeli}</h3>
            <input 
            onChange={(e)=>changehandler(e)}
            autoFocus="true" className="inp" type="text" placeholder="enter your name"   />
            <button 
            onClick={handlecklick}
            >start</button>
        </div>
        </Fragment>
    )
}
