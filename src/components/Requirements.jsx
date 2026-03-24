import { Option } from 'lucide-react'
import * as check from './checks'
import { useState } from 'react'

export default function Requirements(props){

  const allChecked = props.options.every(option => option )

  return(
    <>
      {
        !allChecked ? 
        
        <div className='transition-all duration-300'>
          <h1>Password Requirements</h1>
          <form className="flex flex-col gap-2 p-4 border w-full rounded-lg">
            
            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="length" checked={props.options.at(0)} readOnly/>
              <label htmlFor="length" className="text-sm">At least 8 characters</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="uCase"  checked={props.options.at(1)} readOnly/>
              <label htmlFor="uCase" className="text-sm">Contains uppercase character</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="lCase"  checked={props.options.at(2)} readOnly/>
              <label htmlFor="lCase" className="text-sm">Contains lowercase character</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="digits"  checked={props.options.at(3)} readOnly/>
              <label htmlFor="digits" className="text-sm">Contains a digit</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="validations" id="special"  checked={props.options.at(4)} readOnly/>
              <label htmlFor="special" className="text-sm">Contains a special character</label>
            </div>
          </form>
        </div>
        :
        <div className='w-full h-20 flex flex-col gap-4 p-2 items-center justify-center transition-all duration-300'>
          <p className='text-emerald-400 font-bold leading-1 text-3xl'>Success!!</p>
          <p>Your Password is: <span className='font-bold'>{props.password}</span></p>
        </div>
      }
    </>
  )
}