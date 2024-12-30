import Link from 'next/link'
import {  ShoppingCartIcon } from 'lucide-react'

const Menu = () => {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href="/signin" className='flex items-center header-button'>
        Hello, sign in
        
        </Link>
        <Link href="cart" className='header-button'>
        <div className='flex items-end'>
        <ShoppingCartIcon className="h-8 w-8"/>
  cart

        </div>
        </Link>
      </nav>
    </div>
  )
}

export default Menu
