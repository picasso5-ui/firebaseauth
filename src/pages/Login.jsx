import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../firebase/config'

const Login = () => {

  
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [loading,setLoading] = useState(false)


 const navigate = useNavigate()

 const LoginUser = (e) =>{
   e.preventDefault()
   setLoading(true);

   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
 
    const user = userCredential.user;
    setLoading(false)
    toast.success("Login Successful...")
    navigate('/')

  })
  .catch((error) => {
    setLoading(false)
    toast.error(error.message)
  });
 }
  return (
    <div className='form-parent'>
    {loading ? <p>loading ...</p> :(
      <div>
      <h2 className='text-center'>Login</h2>
      <form className='form' onSubmit={LoginUser}>
       <input 
       type="email"
        placeholder="Enter Your email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
       <input 
       type="password" 
       required
       placeholder="Enter Your password"
       value={password}
     onChange={(e)=>setPassword(e.target.value)}
        />
       <button type='submit'>Login</button>
      </form>
      </div>
       
    )}
    </div>
  )
}

export default Login
