import React from 'react'

export default function Shesvla({handlecklick,changehandler,saxeli}) {
    return (
        <div className ="shesvla">
            <h3>{saxeli}</h3>
            <input 
            onChange={(e)=>changehandler(e)}
            autoFocus="true" className="inp" type="text" placeholder="enter your name"   />
            <button 
            onClick={handlecklick}
            >start</button>
        </div>
    )
}
