import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${document.body.style.backgroundColor==="white"?"dark":"light" || props.mode==="light"?"white":"dark"} bg-${document.body.style.backgroundColor==="white"?"dark":"light" || props.mode==="light"?"light":"dark"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{props.aboutText}</Link>

            </li>
          </ul>

          <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{ height: "25px", width: "30px" }} onClick={() => { props.toggleMode("primary") || props.clrbtns()}} ></div>
            <div className="bg-success rounded mx-2" style={{ height: "25px", width: "30px" }} onClick={() => { props.toggleMode("success") || props.clrbtns()}}></div>
            <div className="bg-danger rounded mx-2" style={{ height: "25px", width: "30px" }} onClick={() => { props.toggleMode("danger") || props.clrbtns()}}></div>
            <div className="bg-warning rounded mx-2" style={{ height: "25px", width: "30px" }} onClick={() => { props.toggleMode("warning") || props.clrbtns()}}></div>


          </div>

          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => { props.toggleMode(null) }} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

// Navbar.defaultProps={
//     title:"Title Here",
//     aboutText:"About Text"
// }