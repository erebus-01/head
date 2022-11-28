import React from 'react'
import { Link } from 'react-router-dom';

interface Item {
  icon: any,
  linkTo: string
}

const ButtonCart: React.FC<Item> = ({icon, linkTo}) => {
  return (
    <div className="beats-button">
      <Link to = {linkTo}>
        <button className='w-10 relative h-10 md:w-5 md:h-5 rounded-full flex justify-center items-center'>
          {icon}
          <div className="inline-flex absolute -top-2 -right-2 md:w-5 md:h-5 justify-center items-center w-6 h-6 bg-red-500 rounded-full bg-interactive dark:border-gray-900">
            <span className='text-inverse font-bold text-[1em] md:text-[0.75em]'>20</span>
          </div>
        </button>
      </Link>
    </div>
  )
}


export default ButtonCart