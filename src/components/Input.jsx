import { Eye, EyeOff } from 'lucide-react'
import * as Checks from './checks'
import { useState } from 'react'

export default function Inputs(props){
  
  return (
    <>
      <div className="flex items-center content-end border rounded-lg gap-2">
        <input name="password" className="h-8 px-4 outline-0" 
          placeholder="Enter your passowrd" value={props.password} onChange={props.handleChange}
          type={props.showPassword ? 'text' : 'password'}
        />
        {props.showPassword ? 
          <Eye className='mr-2' onClick={props.toggleShowPassword} size={16}/> 
          :
          <EyeOff className='mr-2' onClick={props.toggleShowPassword}size={16}/>
        }
      </div>
    </>
  )
}