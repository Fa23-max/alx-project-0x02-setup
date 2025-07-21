import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Link href={"/about"}>About</Link><br></br>
    <Link href={"/home"}>home</Link>
    <Link href={"/posts"}>Posts</Link>
    </div>
    
      
  )
}

export default Header