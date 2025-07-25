import React from 'react'
import { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/Auth';
import {login , logout} from './store/AuthSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      console.log("Current user data:", userData); // Debug log
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .catch((error) => {
      console.log("Error getting current user:", error); // Debug log
      dispatch(logout());
    })
    .finally(() => {
      setLoading(false);
    })
  },[])

  return (
    !loading ? ( 
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block '>

          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />

        </div>
      </div>
    ) : null
  )
}

export default App
