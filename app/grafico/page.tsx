'use client'


  
import {get,ref,onValue } from 'firebase/database';
import {database} from '../controllers/database';
import { updateFirebase } from '../utils/linten';
import LineChart from '../components/lineChart';
import { useEffect,useState } from 'react';
import React from 'react';

const Data: React.FC=()=>{
  const [sensorData, setSensorData] = useState({ temperatura: 0, humidity: 0 });

    useEffect(() => {
        const fetchData = () => {
            const dbRef = ref(database, 'DHT_112'); // Cambia 'DHT_112' al nodo de tu base de datos que contiene los datos del sensor

            const unsubscribe = onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                // Aquí puedes procesar newData si es necesario
                setSensorData(newData);
            });

            return () => unsubscribe();
        };

        fetchData();
    }, []);
return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
    <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Sensores</h2>
          </div>
          {/* Items */}
              <div className="max-w-xs mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-2x1">

              {/* 1st item */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-white rounded shadow-xl h-60">
                  <div className="absolute top-3 right-2 rounded-full w-15 h-15 p-1 -mt-1 mb-2 flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#6366F1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
                      <path d="M10 9l4 0" />
                      </svg>
                  </div>
                  <p>{sensorData.temperatura|| "Cargando..."}</p> 
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-white rounded shadow-xl h-60 overflow-hidden">
                  <div className="absolute top-3 right-2  rounded-full w-15 h-15 p-1 -mt-1 mb-2 flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet-half-2-filled" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00BCD4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M13.905 2.923l.098 .135l4.92 7.306a7.566 7.566 0 0 1 1.043 3.167l.024 .326c.007 .047 .01 .094 .01 .143l-.002 .06c.056 2.3 -.944 4.582 -2.87 6.14c-2.969 2.402 -7.286 2.402 -10.255 0c-1.904 -1.54 -2.904 -3.787 -2.865 -6.071a1.052 1.052 0 0 1 .013 -.333a7.66 7.66 0 0 1 .913 -3.176l.172 -.302l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686c1.055 -.66 2.446 -.413 3.197 .55zm-2.06 1.107l-.077 .038l-.041 .03l-.037 .036l-.033 .042l-4.863 7.214a5.607 5.607 0 0 0 -.651 1.61h11.723a5.444 5.444 0 0 0 -.49 -1.313l-.141 -.251l-4.891 -7.261a.428 .428 0 0 0 -.5 -.145z" 
                      fill="#00BCD4" />
                      </svg>
                  </div>
                  {sensorData && (
                        <h1 className="text-5xl font-bold leading-snug tracking-tight mb-1">{sensorData.humidity} %</h1>
                    )}
                  
              </div>
              </div> 
            
              </div>
              <div>
              <h1>Dashboard</h1>
              <LineChart />
              </div>
       
    </div>
  </section>

)
}
export default Data;


               

// export default function Grafica() {
//   return (
//     <section className="bg-gradient-to-b from-gray-100 to-white">
//       <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
    
//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//             <div className="py-12 md:py-20">

//             {/* Section header */}
//             <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//                 <h2 className="h2 mb-4">Sensores</h2>
//             </div>
//                 </div>
//                 <div>
//                 <h1>Dashboard</h1>
//                 <LineChart />
//                 </div>
         
//       </div>
//     </section>
//   );
// }
