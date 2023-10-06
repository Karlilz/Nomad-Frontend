import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthenticatorRoute = (props) => {
    const navigate = useNavigate ()
    if (!props.user) {navigate ('/login')}
  return (
    <div>
        {props.children}
    </div>
  ) 
}

export default AuthenticatorRoute