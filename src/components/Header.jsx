import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar style={{height:"60px",background:"black",color:"white"}}>
        <Container>
         <h3 className='text-light'>Ecommerce</h3>
        <div id='ex4'>
          <span className='p1 fa-stack fa-2x has-badge' data-count={1}>
          <i className="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
        </Container>
      </Navbar>
     
    </>
  )
}

export default Header
