import imgRick from '../assets/Rick.jpg'

function App() {


  return (
   <div className='relative'>
    <div className='w-full h-52 overflow-hidden '>
      <img 
      className='w-full h-full object-cover'
      src={imgRick} alt={`banner_${imgRick}`} />
    </div>

    <h1 className='text-4xl'>Rick and Morty Challenge</h1>




   </div>

  )
}

export default App
