import { useState } from 'react'
import GerberaImg from './assets/gerbera.jpg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let tagline = "Fresh flower deliered daily"
  let flower={
    name:"Gerbera",
    color:"Red",
    price:2.5,
    description:"A vibrant red Gerbera flower, perfect for any occasion,"
  }

  return (
    <>
      <h1>Transflower Store</h1>
      <hr/>
      <h3 className="read-the-docs">
        {tagline}
      </h3>
      <div className='flower-card'>
        <h2>{flower.name}</h2>
        <img src={GerberaImg} alt={flower.name} className='flower-image' height={200} width={150}></img>
        <p>Color:${flower.color}</p>
        <p>Price:${flower.price.toFixed(2)}</p>
        <p>{flower.description}</p>
        <button onClick={()=>setCount(count+1)}>
          Add to Cart({count})
        </button>
      </div>
   
    </>
  )
}

export default App
