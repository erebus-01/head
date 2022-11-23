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
        <button className='w-10 relative h-10 rounded-full flex justify-center items-center'>
          {icon}
          <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full bg-interactive text-inverse dark:border-gray-900">20</div>
        </button>
      </Link>
    </div>
  )
}


export default ButtonCart