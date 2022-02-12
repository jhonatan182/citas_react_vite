
const Paciente = ({paciente , setPaciente , eliminarPaciente}) => {

    const {nombre , propietario , correo , fecha , sintomas , id} = paciente;

    const handleEliminar = () => {

        const respuesta = confirm('Estas seguro que quieres eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id);
        }

    }

    return (             
    
    <div className="bg-white shadow-md m-3 px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {''}
            <span className="font-normal normal-case">{correo}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="w-80 flex justify-between">
            
            <button 
                type="button"
                className="rounded-md py-2 px-10 text-white font-bold uppercase bg-indigo-600 hover:bg-indigo-700 "
                onClick={ () => setPaciente(paciente) }
                >Editar</button>

            <button 
                type="button"
                className="rounded-md py-2 px-10 text-white font-bold uppercase bg-red-600 hover:bg-red-700 "
                onClick={ handleEliminar }
            >Eliminar</button>
        </div>
    </div> 
    );
}
 
export default Paciente;