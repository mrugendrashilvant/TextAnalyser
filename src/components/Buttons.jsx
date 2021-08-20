import React from 'react';
import Button from './Button';

export default function Buttons(props) {
    return (
        <div className="container-fluid">
            <Button onClick={props.tolc} name="To LowerCase" type={`btn btn-${props.mode==='light' ? 'primary' : 'light'} m-3`}/>
            <Button onClick={props.touc} name="To UpperCase" type={`btn btn-${props.mode==='light' ? 'primary' : 'light'} m-3`}/>
            <Button onClick={props.clearText} name="Clear Text" type={`btn btn-${props.mode==='light' ? 'danger' : 'outline-danger'} m-3`}/>
        </div>
    )
}
