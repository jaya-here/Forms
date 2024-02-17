import { useState, useEffect } from "react"

export default function Skill({isSubmitted, setOverallState}) {

  const [input, setInput] = useState('')

  useEffect(()=>{
    setOverallState((prev)=>{return {...prev, skill:input}})
  }, [isSubmitted])

  function handleSubmit(e)
  {
    setInput(e.target.value)
  }

  return (
    <>
    <label>Skill</label>
    <input value={input} onChange={handleSubmit}></input>
    </>
  )
}
