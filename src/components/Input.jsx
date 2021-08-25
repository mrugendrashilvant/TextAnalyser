import React from 'react';


export default function Input(props) {

    return (
        <div className={`container`}>
            <textarea cols="30" rows="10" className={`form-control text-${props.mode==='light' ? 'dark' : 'light'} bg-${props.mode}`} value={props.text} onChange={(e)=>{props.changeText(e)}}></textarea>
        </div>
    )
}
