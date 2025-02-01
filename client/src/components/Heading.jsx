import React from 'react'

const Heading = ({heading}) => {
  return (
      <h2 className='text-center text-black font-semibold py-5 text-2xl md:text-3xl lg:text-4xl border-b-yellow-500'>
        <span className='text-yellow-400'>{heading.slice(0,1)}</span>{heading.slice(1)}</h2>
  )
}

export default Heading;
