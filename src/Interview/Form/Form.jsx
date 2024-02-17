import React, { useEffect, useState } from 'react'
import Personal from './Personal'
import Address from './Address'
import Skill from './Skill'

export default function Form() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [overallState, setOverallState] = useState({
    personal:'',
    address:'',
    skill:''
  })

  function handleSubmit()
  {
    setIsSubmitted(true)
  }

  useEffect(()=>{
    if (overallState.personal !== '' &&
    overallState.address !== '' &&
    overallState.skill !== '')
    {
        console.log(overallState)
    }
  }, [overallState])

  console.log(overallState)

  return (
    <> 
        <Personal isSubmitted={isSubmitted} setOverallState={setOverallState}></Personal>
        <Address isSubmitted={isSubmitted} setOverallState={setOverallState}></Address>
        <Skill isSubmitted={isSubmitted} setOverallState={setOverallState}></Skill>
        <button onClick={handleSubmit}>Click</button>
    </>
  )
}
