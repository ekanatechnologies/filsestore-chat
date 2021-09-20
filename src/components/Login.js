import { Button } from '@material-ui/core'
import './Login.css'
import  {auth, provider } from '../firebase'


function Login() {
    const signIn=()=>{ 
        auth.signInWithPopup(provider).then((result)=> {
            const  user = result.user;
            console.log(user)
            // ...
          }).catch((error)=>
          error.message)     }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="data:image/png;base64,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" alt="" />
                
            </div>
            <Button onClick={signIn}> Sign in</Button>
            
        </div>
    )
}

export default Login
