import { useState, useEffect } from "react"

export default function Address({isSubmitted, setOverallState}) {

  const [input, setInput] = useState('')

  useEffect(()=>{
    setOverallState((prev)=>{return {...prev, address:input}})
  }, [isSubmitted])

  function handleSubmit(e)
  {
    setInput(e.target.value)
  }

  return (
    <>
    <label>Address</label>
    <input value={input} onChange={handleSubmit}></input>
    </>
  )
}
