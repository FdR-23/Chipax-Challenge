import { AllExercise } from '../api/fetchAllExercise'
import { useState } from 'react'
import Loading from '../components/Loading.jsx'
import Navbar from '../components/Navbar'
function App() {

  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(undefined)

  console.log(data)
  const handleClick = () => {
    AllExercise()
      .then((data) =>
        setData(data),
        setLoading(true))
      .then(() => setLoading(false))
  }

  return (
    <div className='relative m-auto flex flex-col items-center  justify-cente'>
      <Navbar />

      <button disabled={loading ? true : false} onClick={() => handleClick()}
        className={`${loading ? 'bg-slate-600' : 'bg-slate-600/50'} m-4 px-6 py-2
                 text-white text-lg font-semibold 
                  rounded-full hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 `}>
        Run Test
      </button>

      <div className={`${!loading ? 'hidden' : 'block mt-20'}`}>
        <Loading />
      </div>

      <div className={`${loading === undefined ? 'hidden' : 'block'} 
      w-full m-auto mt-2 max-w-screen-lg overflow-hidden p-4 rounded-md`}>
        <div className={`${loading ? 'hidden' : 'grid grid-cols-2 bg-slate-200'}`}>
          <div className='grid col-span-1 p-2'>
            {data && data.map((element, index) =>
              element.exercise_name === 'Episode locations' ?
                <div key={index} className='w-96'>
                  <p className='font-bold'>
                    <span className='text-xl font-semibold' >Exercise Name: </span>
                    {element.exercise_name}
                  </p>
                  <p className='font-semibold'>
                    <span className='text-xl font-bold'>Time: </span>
                    {element.time}
                  </p>
                  <div className=' flex flex-col'>
                    <span className='text-xl font-semibold'>Results:</span>
                    {element.results.map((e, i) =>
                      <div key={i} className='py-2 pl-4'>
                        <p className='font-semibold'>
                          <span className=' font-bold'>Name: </span> {e.name}</p>
                        <p className='font-semibold'>
                          <span className='font-bold'>Episode: </span> {e.episode}</p>

                        <span className='font-bold'>Locations: </span> <br />
                        <div className=' whitespace-pre-line pl-4'>{JSON.stringify(e.locations)}</div>
                      </div>

                    )}
                  </div>
                </div> : undefined
            )}
          </div>

          <div className='grid col-span-1 p-2 '>
            {data && data.map((element, index) =>
              element.exercise_name === "Char counter" ?
                <div key={index} className='w-96 space-y-2'>
                  <p className='font-bold'>
                    <span className='text-xl font-semibold'>Exercise Name: </span>
                    {element.exercise_name}
                  </p>
                  <p className='font-semibold'>
                    <span className='text-xl font-bold'>Time: </span>
                    {element.time}
                  </p>

                  <div className=' flex flex-col'>
                    <span className='text-xl font-semibold'>Results:</span>
                    {element.results.map((e, i) =>
                      <div key={i} className='py-2 pl-4'>
                        <p className='font-bold'>
                          <span className=' font-semibold'>Char:
                          </span>
                          &quot; {e.char} &quot;
                        </p>
                        <p className='font-bold'>
                          <span className='font-semibold'>Resource:
                          </span>
                          &quot; {e.resource} &quot;
                        </p>
                        <p className='font-bold'>
                          <span className='font-semibold'>Count:
                          </span> {e.count}
                        </p>

                      </div>

                    )}
                  </div>
                </div> : undefined
            )}



          </div>

        </div>
      </div>




    </div>



  )
}

export default App
