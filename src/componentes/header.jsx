import NuevoPresupuesto from '../componentes/nuevoPresupuesto.jsx'


function header({presupuesto, setPresupuesto}) {   return( <>

          <header>
            
            <h1>Planificador de Gastos</h1>

            <NuevoPresupuesto
                presupuesto = { presupuesto }
                setPresupuesto = { setPresupuesto }
            />
            
            </header>


</> )}  export default header;  