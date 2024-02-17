import { useState, useEffect } from "react"

export default function Personal({isSubmitted, setOverallState}) {

  const [input, setInput] = useState('')


  useEffect(()=>{
    setOverallState((prev)=>{return {...prev, personal:input}})
  }, [isSubmitted])

  function handleSubmit(e)
  {
    setInput(e.target.value)
  }

  return (
    <>
    <label>Personal</label>
    <input value={input} onChange={handleSubmit}></input>
    </>
  )
}
