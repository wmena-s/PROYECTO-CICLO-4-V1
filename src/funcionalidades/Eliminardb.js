import { useResolvedPath } from 'react-router';
import Swal from 'sweetalert2';
import Constantes from '../Constantes'

const Eliminardb = async (user, number) => {
   
        // muestra mensaje de confirmación antes de eliminar
         const resultado =  await Swal.fire({
             title: 'Confirmación',
             text: `¿Eliminar?`,
             icon: 'question',
             showCancelButton: true,
             confirmButtonColor: '#3298dc',
             cancelButtonColor: '#f14668',
             cancelButtonText: 'No',
             confirmButtonText: 'Sí, eliminar'
         });
        
         if (!resultado.value) {
             return;
         }
         //
         alert(`${number}/${user._id}`)
        await fetch(`${number}/${user._id}`, {
            method: "DELETE",
            
        });

 
        
        
}

export default Eliminardb
