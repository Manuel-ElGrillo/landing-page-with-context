import React from 'react'

const Service = ({title, img, alt, description}) => {

  return (
    <div className='grid place-items-center'>

      <img src={img} 
           alt={alt} 
           className="rounded-xl"/>

      <h3 className='text-xl my-3'>
        {title}
      </h3>

      <p className='text-center font-light text-lg'>
        {description}
      </p>

    </div>
  )
}

export default Service