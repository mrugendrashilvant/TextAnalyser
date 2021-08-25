import React from 'react'

export default function Header(props) {
  return (
    <div className={`m-3 text-${props.mode==='light' ? 'dark' : 'light'}`} style={myHeader}>
      <h1 >{props.title}</h1>
      <div className="form-check form-switch">
        <input className="form-check-input btn-lg" onChange={()=>{props.setMode()}} type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlhtmlFor="flexSwitchCheckDefault">Toggle DarkMode</label>
      </div>
    </div>
  )
}

const myHeader = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  padding: "14px 28px",
  fontWeight: "lighter",
}
