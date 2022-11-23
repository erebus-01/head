import React from 'react'
import { Link } from 'react-router-dom';

interface Item {
  icon: any,
  linkTo: string
}

const ButtonCircleIcon: React.FC<Item> = ({icon, linkTo}) => {
  return (
    <div className="beats-button">
      <Link to = {linkTo}>
        <button className='w-10 h-10 rounded-full flex justify-center items-center'>
          {icon}
        </button>
      </Link>
    </div>
  )
}

export default ButtonCircleIcon