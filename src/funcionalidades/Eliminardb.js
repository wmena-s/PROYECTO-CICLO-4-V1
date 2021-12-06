import Swal from 'sweetalert2';
import Constantes from '../Constantes'

const Eliminardb = async (props) => {
   
        // muestra mensaje de confirmación antes de eliminar
         const resultado = await Swal.fire({
             title: 'Confirmación',
             text: `¿Eliminar ${props.item.nombre}?`,
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
         const respuesta = await fetch(`${Constantes.RUTA_API3}/${props.item._id}`, {
             method: "DELETE",
         });
        
}

export default Eliminardb
