import React from 'react'
import notfound from '../images/404.jpg';
function NotFound() {
  return (
    <div style={{background:`url(${notfound})`,backgroundSize:"contain", height:"100vh", objectFit:"cover",backgroundPosition:"center",width:'100%'}}>
    </div>
  )
}

export default NotFound
