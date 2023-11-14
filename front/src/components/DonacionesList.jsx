
// import { useEffect, useState } from 'react';
// import { getAllDonaciones } from '../api/tasks.api';

// export function DonacionesList() {

  
//    const [donaciones, setDonaciones] = useState([]);

//   useEffect(() => {
//     async function loadDonaciones(){
//       const res = await getAllDonaciones();
//       setDonaciones(res.data);
//     }
    
//     loadDonaciones();
//   }, []);

//   return <div>
//     {donaciones.map(donacion => (
//         <div key={donacion.id}>
//             <h1>{donacion.title}</h1>
//             <p>{donacion.description}</p>
//         </div>
//     ))}
//   </div>;
// }
    
import React, { useEffect, useState } from 'react';
import { getAllDonaciones } from '../api/tasks.api';
import {DonacionesCard} from '../components/DonacionesCard'

export function DonacionesList() {
  const [donaciones, setDonaciones] = useState([]);

  useEffect(() => {
    async function loadDonaciones() {
      try {
        const res = await getAllDonaciones();
        setDonaciones(res.data);
      } catch (error) {
        console.error('Error al cargar donaciones:', error);
      }
    }

    loadDonaciones();
  }, []);

  return (
    <div className='grid grid-cols-3 gap-3'>
      {donaciones.map(donacion => (
        <DonacionesCard key={donacion.ID_Donacion}donacion={donacion} />
        
      ))}
    </div>
  );
}

