import { useState, useEffect } from 'react';
import Errores from './Errores';

const Formulario = ({pacientes , setPacientes , paciente , setPaciente}) => {

    const [nombre , setNombre] = useState('');
    const [propietario , setPropietario] = useState('');
    const [correo , setCorreo] = useState('');
    const [fecha , setFecha] = useState('');
    const [sintomas , setSintomas] = useState('');

    const [error , setError] = useState(false);


    const fechaMinAlta = new Date().toISOString().substring(0,10);

    useEffect( () => {
        
        /* comprobar que un objeto no este vacio */

        if(Object.keys(paciente).length > 0) {
            
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setCorreo(paciente.correo);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }

    }, [paciente])
    

    const generarId = () => {

        const ramdon = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return ramdon + fecha;
    }

    const submitHandle = e => {
        
        e.preventDefault();

        //validacion de formulario

        if( [nombre , propietario , correo , fecha , sintomas].includes('') ) {
            setError(true);
            return;
        }

        setError(false);

        /* objeto de pacientes */

        const objetoPaciente = {
            nombre,
            propietario,
            correo,
            fecha,
            sintomas,
            
        }

        if(paciente.id) {
            // actualizar un registro
            objetoPaciente.id = paciente.id;
            const PacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );

            setPacientes(PacientesActualizados);

            /* Limpiando el objeto cuando se le da editar */
            setPaciente({});


        } else {
            // crear un nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes , objetoPaciente]);
        }

        

        setNombre('');
        setPropietario('');
        setCorreo('');
        setFecha('');
        setSintomas('');

    }
 
    return (
        
        <div className=" md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-500 font-bold">Administralos</span>
            </p>

            <form onSubmit={submitHandle} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
    
                {error && <Errores>Todos los campo son obligatorios</Errores>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
                    <input 
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                        id="mascota"
                        value={nombre}
                        onChange = { e => setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
                    <input 
                        type="text" 
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                        id="propietario"
                        value={propietario}
                        onChange = { e => setPropietario(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electronico</label>
                    <input 
                        type="email" 
                        placeholder="Correo electronico"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                        id="email"
                        value={correo}
                        onChange = { e => setCorreo(e.target.value) }
                        
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                    <input 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-700 rounded-md"
                        id="alta"
                        value={fecha}
                        min ={fechaMinAlta}
                        onChange = { e => setFecha(e.target.value) }
                    />
                </div>

                
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 rounded-md" 
                        name="sintomas" 
                        id="sintomas"
                        placeholder="Describe sus sintomas"
                        value={sintomas}
                        onChange = { e => setSintomas(e.target.value) }
                    />
                    
                </div>

            
                <input 
                type="submit" 
                className="bg-indigo-600 text-white p-3 uppercase font-bold w-full rounded-md cursor-pointer hover:bg-indigo-700 transition-all" 
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } 
                />



            </form>
        </div>

     );
}
 
export default Formulario;