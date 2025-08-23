import React from 'react'
import { useParams } from 'react-router-dom'

const SpecificJobDetails = () => {
  const { id } = useParams();
  return (
    <div>SpecificJobDetails: { id }</div>
  )
}

export default SpecificJobDetails