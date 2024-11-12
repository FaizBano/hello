import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div> 
        <ul className='flrx bg-white  ml-3 mr-3 font-bold text-black'>
            <li><Link href={"home"}> Home</Link></li>
           
        </ul>
    </div>
  )
}

export default Header