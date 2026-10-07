import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
        {/* <a></a>tags reloads the whole page... so use link component of react */}
        <Link to={props.link} className={props.class || "btn btn-success"}>{props.text}</Link>
    </>
  )
}

export default Button
