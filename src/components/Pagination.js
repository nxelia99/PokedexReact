import React from 'react'

const Pagination = (props) => {
  const {onLeftClick, onRightClick, page, totalPages} = props;

  return (
    <div  className='d-flex flex-row'>
        <button className='mx-3' onClick={onLeftClick}><i className='bx bx-left-arrow-circle' ></i></button>
        <div className='align-center mb-1 fs-5'>{page} de {totalPages}</div>
        <button className='mx-3' onClick={onRightClick}><i className='bx bx-right-arrow-circle'></i></button>
    </div>
  )
}

export default Pagination;