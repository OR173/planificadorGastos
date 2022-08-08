import {useState} from "react";

import Mensaje from './Mensaje.jsx'


function nuevoPresupuesto({presupuesto, setPresupuesto}) {   

    const [mensaje, setMensaje] = useState ('')
    
    const handlePresupuesto = (event) => {
        event.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje('no es un presupuesto valido');
        }else{
            setMensaje('si es un presupest');
        }
    }
    
    return( <>

    <div className="contenedor-presupuesto contenedor sombra">
        <form   onSubmit = {handlePresupuesto} 
                className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                    className="nuevo-presupuesto" 
                    type='text'
                    value={presupuesto}
                    onChange={ e => setPresupuesto(e.target.value) }

                />
            </div>
            <input 
                type='submit'
                value='añadir'
            />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            
        </form>
    </div>


</> )}  export default nuevoPresupuesto;  