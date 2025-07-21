import { type ButtonProps } from '@/interfaces'
import React from 'react'

const Button:React.FC<ButtonProps> = ({size,shape}) => {
  return (
    <button className={`${size} ${shape} `} >jose</button>
  )
}

export default Button