import {Link} from 'react-router-dom';
import logo from '../api/logo.png';
export function Navigation() {
  return (
    <div className='flex justify-between py-3'> 
        <Link to='/donaciones'>
        <div className='flex items-center'>
          <img src={logo} alt='Logo de la aplicación' className='mr-2 w-35 h-20' />
          <h1 className='font-bold text-3xl mb-4'>DONACIONES WEB</h1>
        </div>        
        </Link>
        <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
        <Link to="/donaciones-create"> Crear donaciones </Link>
        </button>
    </div>
  )
}

