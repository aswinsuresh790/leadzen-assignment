import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import {BsChevronLeft,BsChevronRight} from  'react-icons/bs'



const Footer = (props) => {
    const{pageNumbers,totalPages ,currentPage,setCurrentPage}=props
    

  

  return (
    <div>
        <footer>
        <div>
  <span style={{cursor:'pointer'}} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}><BsChevronLeft/></span>
  {/* when click this arrow can move backward   */}
  {pageNumbers.map(number => (
    <button style={{backgroundColor:currentPage === number ? '#DF2C0E' : 'white',color:currentPage === number ? 'white' : 'black', border:'transparent',padding:'3px 8px', marginLeft:'10px',fontSize:'1.2rem'}} key={number} onClick={() => setCurrentPage(number)} className={currentPage === number ? 'selected' : '' }>
      {number}
    </button>   
    //Total  no of page can  change the page   
  ))}
  <span  style={{cursor:'pointer'}} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}><BsChevronRight/></span>
 {/* when click this arrow can move forward   */}
</div>
</footer>
    </div>
  )
}

export default Footer
