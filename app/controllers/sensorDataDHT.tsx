'use client'

import {get,ref,onValue} from 'firebase/database';
import { useEffect,useState } from 'react';
import {database} from '../controllers/database';
//import { updateFirebase } from '../utils/linten';

export function useSensorData() {
    const [sensorData, setSensorData] = useState({ temperatura: 0, humidity: 0 });
    
    useEffect(() => {
        const intervalo = 5000;

    // Llama a updateFirebase con el intervalo especificado
    //updateFirebase(intervalo);// Llama a updateFirebase sin el argumento del intervalo
    
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
    return sensorData;// Retorna los datos para que puedan ser utilizados en el componente que utilice este hook
}