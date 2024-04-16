import { ref, set } from 'firebase/database';
import { database } from '../controllers/database';

function random(min, max, precision = 0) {
    const value = Math.random() * (max - min) + min;
    return parseFloat(value.toFixed(precision));
}

function updateFirebase(interval) {
    const temperatura = random(0, 50, 1);
    const humedad = random(20, 90);

    const json = {
        "DHT_112": {
            "humidity": humedad,
            "temperatura": temperatura
        }
    };

    set(ref(database, '/'), json)
        .then(() => {
            console.log("Datos actualizados en Firebase:", json);
        })
        .catch((error) => {
            console.error("Error al actualizar los datos en Firebase:", error);
        });

    // Vuelve a llamar a updateFirebase con el intervalo especificado
    setTimeout(() => updateFirebase(interval), interval);
}

export { updateFirebase };
