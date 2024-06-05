import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='Contacto'>
        <h2 className='TittleForm'>contacto</h2>
        <form action="POST">
            <div className='FormGroup'>
                <input type="text" id='name' placeholder='Nombre' />
                <input type="text" id='surname' placeholder='Apellido' />
                <input type="email" id='email' placeholder='ejemplo@email.com' />
                <input type="number" id='number' placeholder='telefono' />
            </div>
            <button className='ButtonForm'>ENVIAR</button>
        </form>
    </div>
  )
}

export default Contacto