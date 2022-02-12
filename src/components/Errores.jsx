const Errores = ({children}) => {

    return ( 
         
        <div 
            className="bg-red-800 text-center font-bold rounded-md text-white p-3 uppercase mb-5">
            <p>{ children }</p>
        </div>
        
     );
}
 
export default Errores;