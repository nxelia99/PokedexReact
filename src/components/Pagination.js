import React from 'react'

const Pagination = (props) => {
  return (
    <div  className='d-flex flex-row'>
        <button className='mx-3'><i class='bx bx-left-arrow-circle' ></i></button>
        <div className='align-center mb-1 fs-5'>1 de 100</div>
        <button className='mx-3'><i class='bx bx-right-arrow-circle'></i></button>
    </div>
  )
}

export default Pagination;