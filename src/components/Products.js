import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products() {
    const navigate=useNavigate()
  return (
    <button onClick={()=>navigate('order-summery')}>order</button>
  )
}

export default Products