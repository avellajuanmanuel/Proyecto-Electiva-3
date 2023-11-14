import {useNavigate} from 'react-router-dom';

export function DonacionesCard({donacion}) {

  const navigate = useNavigate()

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

      onClick={() => {
        navigate('/donaciones/' + donacion.ID_Donacion);
      }}
    
    
    
    >
          <h1 className='font-bold upppercase'>{donacion.Cantidad}</h1>
          <p className='text-slate-400'>{donacion.Tipo_de_Donacion}</p>
          <p>{donacion.ID_Donacion}</p>
          <p>{donacion.Fecha}</p>
          


         
        </div>

  )
}

