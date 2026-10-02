import React from 'react'

const Button = (props) => {
  return (
    <>
        {/* <a></a>tags reloads the whole page... so use link component of react */}
        <a href="" className={props.class || "btn btn-success"}>{props.text}</a>
    </>
  )
}

export default Button
