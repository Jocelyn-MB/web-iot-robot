import Termometro from '../../../public/temperature.svg'
import Humedad from '../../../public/weather-humidity.svg'
import Humo from '../../../public/fire-alarm.svg'
import FrecuenciaCardiaca from '../../../public/heart-rate1.svg'
import Mobil from '../../../public/mobile.svg'
import Colision from '../../../public/colision.svg'

export default function FeaturesBlocks() {
    return (
      <section className="relative">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Explore las soluciones</h2>
              <p className="text-xl text-gray-600"> El proyecto se centra en el desarrollo de un robot multifuncional equipado con una variedad de sensores avanzados para brindar una experiencia completa y personalizada.</p>
            </div>
  
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
  
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 rounded-full w-14 h-14 p-1 -mt-1 mb-2 flex justify-center items-center">
               <Termometro width="64" height="64" className="text-white" style={{ position: 'relative', left: '5px', top: '0' }} />
              </div>

                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sensor de Temperatura</h4>
                <p className="text-gray-600 text-center">El sensor de temperatura permite al robot monitorear la temperatura ambiente y detectar cambios que podrían indicar riesgos para la salud o condiciones adversas.</p>
              </div>
  
              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 rounded-full w-14 h-14 p-1 -mt-1 mb-2 flex justify-center items-center">
               <Humedad width="64" height="64" className="text-white" style={{ position: 'relative', left: '5px', top: '0' }} />
              </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sensor de Humedad</h4>
                <p className="text-gray-600 text-center">El sensor de humedad proveerá datos sobre los niveles de humedad en el entorno del usuario, lo cual es esencial para prevenir problemas respiratorios y daños a la propiedad.</p>
              </div>
  
              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 rounded-full w-14 h-14 p-1 -mt-1 mb-2 flex justify-center items-center">
               <Humo width="64" height="64" className="text-white" style={{ position: 'relative', left: '5px', top: '0' }} />
              </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sensor de Humo</h4>
                <p className="text-gray-600 text-center">El sensor de humo detectará la presencia de humo en el ambiente, lo que permitirá al robot alertar rápidamente sobre posibles incendios o situaciones peligrosas.</p>
              </div>
  
              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 rounded-full w-14 h-14 p-1 -mt-1 mb-2 flex justify-center items-center">
               <FrecuenciaCardiaca width="64" height="64" className="text-white"  />
              </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sensor de Pulso Cardíaco</h4>
                <p className="text-gray-600 text-center">El sensor de pulso cardíaco medirá la frecuencia cardíaca del usuario, proporcionando información sobre su salud cardiovascular y ayudando a detectar emergencias médicas.</p>
              </div>
  
              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 rounded-full w-14 h-14 p-1 -mt-1 mb-2 flex justify-center items-center">
               <Colision width="64" height="64" className="text-white"  />
              </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Tecnología Anti Colisiones</h4>
                <p className="text-gray-600 text-center">El robot cuenta con tecnología anti colisiones para detectar obstáculos, asegurando una navegación segura y protegiendo al robot, objetos y personas cercanas.</p>
              </div>
  
              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 rounded-full w-14 h-14 p-1 -mt-1 mb-2 flex justify-center items-center">
               <Mobil width="40" height="40" style={{ position: 'relative', left: '3px' }} />
              </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aplicación Móvil Android</h4>
                <p className="text-gray-600 text-center">El robot tiene una aplicación móvil Android para la interacción remota, el monitoreo en tiempo real de los sensores y la recepción de notificaciones sobre eventos.</p>
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }