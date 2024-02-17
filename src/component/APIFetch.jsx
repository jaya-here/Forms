async function fetchData(input)
{
   let results = await fetch(`https://dummyjson.com/products/search?q=${input}`)
   results =  await results.json()
   return results
}

/*//API handling function
async function fetchData(input)
{
   let results = await fetch(`https://dummyjson.com/products/search?q=${input}`)
   results =  await results.json()
   return results
}

function App() {

  const [input, setInput] = useState()
  const [filteredResults, setFilterResults] = useState()

  //function to set the user input based on the input value
  function handleSearchInput(e)
  {
    setInput(e.target.value)
  }

  //function to update the filtered results based on the input
  useEffect(()=>{

  let handleAPI = async ()=>{
    let results = await fetchData(input)
    setFilterResults(results)
  }

  handleAPI()

 
  
  },[input])

  console.log(filteredResults)

  return (
    <>
    <section className='search-unit d-flex'>
        <label htmlFor='search'>Search</label>
        <input id='search' className='' value={input} onChange={handleSearchInput}></input>
    
    </section>
    <main>
    {filteredResults?.products?.map((product)=>{
          return <div style={{border:'1px solid black', padding:'1rem'}}>
            <h3>{product.title}</h3>
            <h4>{product.description}</h4>
            <h5>{product.price}</h5>
          </div>
        })}
    </main>
    </>
  )
}*/