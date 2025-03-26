import { useState } from 'react'


function App() {
  const [color, setColor] = useState('#98FF98')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor : color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl border-2 border-black'>

            <button 
            onClick = {() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black' 
            style={{backgroundColor : 'red'}}>
              Red
            </button>
            <button 
            onClick = {() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black' 
            style={{backgroundColor : 'green'}}>
              Green
            </button>
            <button 
            onClick = {() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black' 
            style={{backgroundColor : 'blue'}}>
              Blue
            </button>
            <button 
            onClick = {() => setColor('white')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg border-2 border-black' 
            style={{backgroundColor : 'white'}}>
              White
            </button>
            <button 
            onClick = {() => setColor('yellow')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg border-2 border-black' 
            style={{backgroundColor : 'yellow'}}>
              Yellow
            </button>
            <button 
            onClick = {() => setColor('orange')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black' 
            style={{backgroundColor : 'orange'}}>
              Orange
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
