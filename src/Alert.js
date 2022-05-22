import React, { useEffect } from 'react'

const Alert = ({msg, type, removeShowAlert, list }) => {

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      removeShowAlert()
    },3000)
    return ()=> clearTimeout(timeOut)
  },[list])

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
