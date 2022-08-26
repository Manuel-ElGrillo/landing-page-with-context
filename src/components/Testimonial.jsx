import React from 'react'

const Testimonial = ({img}) => {
  return (
    <div className='hover:bg-slate-200 p-3 rounded transition-all'>

      <img src={img}
           alt="Costumer"
           className="w-52 h-52 m-auto rounded-full"/>

      <p className='text-center italic font-light  my-3 bg-transparent'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsa unde perferendis consequuntur assumenda earum deserunt, facere veritatis voluptatem iusto quas, quo, omnis nesciunt ullam doloribus repudiandae praesentium? Veritatis quo.
      </p>

    </div>
  )
}

export default Testimonial