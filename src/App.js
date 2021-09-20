import './app.css'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import {useSelector} from 'react-redux'
import {selectUser} from './features/user/userSlice'
import Login from './components/Login'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import {login, logout} from './features/user/userSlice'

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      console.log('the auth user is', authUser)
      if(authUser){
        // user is logged 
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
       
      } else{
        //user is logged out 
        dispatch(logout())
      }
    })
    
    
  }, [dispatch])

  return (
    //BEM naming convention 
    <div className='app'>
      {user?(
        <>
         <Sidebar/>
         <Chat/>
         </>

      ):<Login/>}
   
     
    </div>
  )
}

export default App
