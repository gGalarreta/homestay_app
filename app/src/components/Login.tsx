import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import googleIcon from '../images/google.png'
import fbIcon from '../images/facebook.png'
import mailIcon from '../images/mail.png'
import phoneIcon from '../images/phone.png'
import { useState } from 'react'
import { auth, googleProvider } from '../firebase/setup'
import { signInWithPopup } from 'firebase/auth'

interface loginProps {
  // make property optional in typescript
  setLogin?: any
}

const Login = (props: loginProps) => {

  const [email, setEmail] = useState(false)

  const handleMail = () => {
    setEmail(true)
  }

  const handlePhone = () => {
    setEmail(false)
  }

  const handleLogin = () => {
    props.setLogin(false)
  }

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  }

  console.log(auth)

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="p-2 pb-6 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="p-4 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex">
              <h1 onClick={handleLogin} className='cursor-pointer'>X</h1>
              <h3 className="ml-36 text-base font-bold text-gray-900" id="modal-title">Log in or sign up</h3>
            </div>
            <hr className='mt-4'/>
            <h1 className='ml-5 mt-4 font-semibold text-2xl'>
              Welcome to Airbnb clone
              </h1>
            {email ? 
              <input type="text" className="ml-5 mt-3 border boder-spacing-1 text-gray-900 text-sm rounded-lg border-black block w-11/12 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Email" required />
              :
              <PhoneInput placeholder='Phone number' inputStyle={{width: '465px', height: '50px', fontSize: '17px'}} containerStyle={{marginTop: '15px', marginLeft: '20px'}}/>
            }
            {email && <input type="password" className="ml-5 mt-3 border boder-spacing-1 text-gray-900 text-sm rounded-lg border-black block w-11/12 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none" placeholder="Password" required />}
            <h1 className='ml-5 text-xs w-11/12 mt-2'>
              we will call or text you to confirm your number.Standard message and data rates apply. Privacy policy
              </h1>
            <button className="ml-5 mt-3 bg-rose-600 h-12 text-white font-bold py-2 px-4 rounded w-11/12">
              {email ? 'Agree and Continue' : 'Continue'}
            </button>
            <h1 className='text-center mt-3'>or</h1>
            <div  onClick={googleSignin} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-xl border-black'>
              <img src={googleIcon} className='w-8 h-8 ml-3'/>
              <h1 className='ml-24'>Continue with Google</h1>
            </div>
            <div className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black'>
              <img src={fbIcon} className='w-8 h-8 ml-3'/>
              <h1 className='ml-24'>Continue with Facebook</h1>
            </div>
            {email ? 
              <div onClick={handlePhone} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black'>
                <img src={phoneIcon} className='w-8 h-8 ml-3'/>
                <h1 className='ml-24'>Continue with Phone number</h1>
              </div>
              : 
              <div onClick={handleMail} className='cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black'>
                <img src={mailIcon} className='w-8 h-8 ml-3'/>
                <h1 className='ml-24'>Continue with Email</h1>
              </div> 
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login