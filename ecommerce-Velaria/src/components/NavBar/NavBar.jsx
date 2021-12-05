import React from 'react'


function NavBar() {
    return <>
        <div>
          <img src="../../../Imagenes/Logo 03.png" />
           <nav>
               <h3>Velaria</h3>
                <ul>
                  <li>Inicio</li>
                  <li>Indumentaria</li>                     
                  <li>Accesorios</li>
                  <li>Velas</li> 
                  <li>Login | sign up</li>
                </ul>            
                <CartWidget />
              </nav> 
        </div>
        </>
    
}

export default NavBar

