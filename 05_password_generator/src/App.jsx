import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState('');


  // useRef() hook

  const Passwordref = useRef(null);

  const passwordGenerator = useCallback( () =>{

    let password = "" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;

    if(numAllowed){
      str += "0123456789" ;
    }

    if(charAllowed){
      str += "!@#$%^&*()_+[]{}/?<>:|";
    }

    for(let i = 1 ; i <= length ; i++){

      let char = Math.floor(Math.random()*str.length + 1) ;

      password += str.charAt(char);

    }

    setPassword(password);


  }, [length , numAllowed , charAllowed , setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    Passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]
  );


  useEffect( () =>{
    passwordGenerator();
  },[length , numAllowed , charAllowed , passwordGenerator]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-8 py-6 text-orange-800 bg-gray-800'>
        <h1 className='text-white text-center p-4 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            ref={Passwordref}
            readOnly
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-500 text-white px-3 py-2 shrink-0 cursor-pointer hover:bg-blue-700'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" min={6} max={75} value={length} 
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-white px-2'>Length: {length}</label>
          </div>

          <div>
            <input 
              type="checkbox" 
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => { setNumAllowed( (prev) => !prev )}}
            />
            <label htmlFor="numberInput" className='px-2 py-2 text-white'>Number</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => { setCharAllowed( (prev) => !prev )}}
            />
            <label htmlFor="characterInput" className='px-2 py-2 text-white' >Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
