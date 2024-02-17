import React, { useEffect } from 'react'

export default function useSearch() {
  const [input, setInput] = useState()
  const [filteredResults, setFilterResults] = useState()

  //function to set the user input based on the input value
  handleSearchInput(e)
  {
    setInput(e.target.value)
  }

  //function to update the filtered results based on the input
  useEffect(()=>{

  setFilterResults(results)
  
  },[input])

  return (
    <div>useSearch</div>
  )
}
