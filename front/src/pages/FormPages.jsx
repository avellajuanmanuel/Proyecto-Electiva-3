// import {useForm} from 'react-hook-form';

// export function FormPages() {

//   const {register, handleSubmit} = useForm();

//   const onSubmit = handleSubmit(data => {
//     console.log(data)
//   })

//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="title" />
//           {...register("title", { required: true})}
          
//           <input type="text" placeholder="apellido" />
//           {...register("apellido", { required: true})}  
           
//           <textarea rows="3"
//           placeholder="Description"
//           {...register("description", { required: true})}
//           ></textarea>


//           <button>Guardar</button>

        

//         </form>
//       </div>
//     )
//   }


import {useForm} from 'react-hook-form';
import {createDonacion, deleteDonacion} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {toast} from 'react-hot-toast'

export function FormPages() {

  const {register, handleSubmit, formState: {
    errors
  }} = useForm();
  const navigate = useNavigate();
  const params = useParams()
  console.log(params) 

  const onSubmit = handleSubmit(async (data) => {
    await createDonacion(data);
    toast.success('Donación creada', {
      position: "bottom-rigth",
      style: {
        background: "#101010",
        color: "#fff",
      }

    })
    navigate("/donaciones");
    
  });

  // const onSubmit = handleSubmit(async data => {
  //    if (params.id) {
  //     console.log('Actualizando')
  //    } else {
  //     navigate("/donaciones");
  //    }

    
  // });

  useEffect(() => {
    if (params.id) {
      console.log('Obteniendo datos')
    }
  }, [])
  

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input type="date" placeholder="fecha" {...register("Fecha", { required: true})}
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
       {errors.title && <span> This field required</span>}

       <input type="text" placeholder="tipo de donación" {...register("Tipo_de_Donacion", { required: true})}
       className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
{errors['tipo de donación'] && <span> Este campo es requerido</span>}


       <input type="number" placeholder="cantidad" {...register("Cantidad", { required: true})}
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
       {errors.title && <span> This field required</span>}
        

        {/* <input type="text" placeholder="apellido" {...register("apellido", { required: true})} />  */}
        
        {/* <textarea rows="3" placeholder="Description" {...register("description", { required: true})}></textarea>
      {errors.description && <span> This field required</span>} */}


        <button
          className=' bg-indigo-500 p-3 rounded-lg block w-full mt-3'
        
        >Guardar</button>
      </form>

      
        {params.id && (
        <div className='flex justify-end'>
          <button
        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
         onClick={async () => {

         
          const accepted = window.confirm('Estas seguro?')
          if (accepted) {
            await deleteDonacion(params.id)
            toast.success('Donación eliminada', {
              position: "bottom-rigth",
              style: {
                background: "#101010",
                color: "#fff",
              }
        
            })
            navigate("/donaciones");
            
            
            
          }
         }} 

        
        >
        Eliminar
        </button>
        </div>
      

      /* <button>
        Eliminar
      </button> */
      )}
    </div>
  )
}

  
