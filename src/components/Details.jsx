import React from 'react'

export default function Details(props) {
    return (
        <div className={`m-3 list-group list-group-flush`}>
            <p className={`fs-3 fw-light list-group-item text-${props.mode==='light' ? 'dark' : 'light'} bg-${props.mode}`}><strong>Total Word: </strong>{props.words}</p>
            <p className={`fs-3 fw-light list-group-item text-${props.mode==='light' ? 'dark' : 'light'} bg-${props.mode}`}><strong>Total Characters: </strong>{props.chars}</p>
        </div>
    )
}
