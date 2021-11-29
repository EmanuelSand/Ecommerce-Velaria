import React from 'react'

function NavBar() {
    return (
        <div>
           <nav>
               <img src="../../../../Imagenes\Logo 03.png" />
               <h3>Velaria</h3>
                <ul className="navFlex">
                  <li>Inicio</li>
                  <li>Indumentaria</li>                     
                  <li>Accesorios</li>
                  <li>Velas</li> 
                  <li>Login | sign up</li>
                </ul>            
              </nav> 
        </div>
    )
}

export default NavBar

