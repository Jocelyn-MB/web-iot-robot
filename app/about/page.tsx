
import "../globals.css";
import React from 'react';
import Image from 'next/image';
import AcercaDe from '@/public/images/homeeAcerdade.png';

export default function ContactForm() {
  return (
    <section className="relative">
    <div className=" px-0 sm:px-0">

      {/* Hero content */}
      <div className="pt-32 pb-12 md:pt-20 md:pb-10">

        {/* Section Introduccion*/}
        <div className="grid grid-cols-4 gap-sm mx-xxs md:grid-cols-12 md:gap-lg md:mx-sm py-lg quote__section__grid grid-flow-dense lg:h-full  pb-14">
          {/* Imagen */}
            <figure className="relative overflow-hidden aspect-portrait col-span-full md:col-span-6">
              <Image
                src="/images/homeeAcerdade.png"
                alt="Proyecto Homme"
                width={3840}
                height={2560}
                layout="responsive"
              />
            </figure>
              {/* Texto */}
              <div className="relative flex flex-col justify-center p-6 col-span-full md:mt-0 md:col-span-6 lg:p-8"> {/* Aplicando padding al texto */}
                <div className="max-w-lg">
                  {/* Título */}
                  <div className="text-center md:text-left mb-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 text-right bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" data-aos="zoom-y-out">ROBOT AUTOMATIZADO PARA CUIDADO Y MONITOREO DE ADULTOS MAYORES</h1>
                  </div>
                  {/* Texto */}
                  <blockquote className="mb-11">
                    <div className="font-novoApply styles_richtext__vtvls styles_quote__block__aHUoR text-right">
                      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 pb-4">Integradora II</h4>
                      <h2>Tecnologías de la Información Área Desarrollo de Software Multiplataforma</h2>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Section Desarrollo*/}
            <div className="grid grid-cols-4 gap-sm mx-xxs md:grid-cols-12 md:gap-lg md:mx-sm py-lg quote__section__grid grid-flow-dense lg:h-full pt-14 pb-14">
            {/* Problematica */}
            <div className="relative flex flex-col justify-center p-6 col-span-full md:mt-0 md:col-span-4 lg:p-8"> {/* Aplicando padding al texto */}
                  <div className="max-w-lg">
                    {/* Título */}
                    <div className="text-center md:text-left mb-6">
                      <h1 className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4 text-right bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" data-aos="zoom-y-out">Problematíca</h1>
                    </div>
                    {/* Texto */}
                    <blockquote className="mb-11">
                      <div className="font-novoApply styles_richtext__vtvls styles_quote__block__aHUoR text-right pl-11">
                        <h2>La distancia y la falta de supervisión hacen difícil cuidar a los adultos mayores. La soledad afecta su salud mental. La propuesta de un Robot Automatizado busca solucionar esto con tecnología IoT y sensores, mejorando su calidad de vida y tranquilizando a familiares y cuidadores.</h2>
                      </div>
                    </blockquote>
                  </div>
                </div>
              {/* Imagen */}
              <figure className="relative overflow-hidden aspect-portrait col-span-full md:col-span-4 pr-6 pl-6">
                <Image
                  src="/images/hommeAlcance.jpg"
                  alt="Proyecto Homme"
                  width={3840}
                  height={2560}
                  layout="responsive"
                />
              </figure>
                {/* Alcance */}
                <div className="relative flex flex-col justify-center p-6 col-span-full md:mt-0 md:col-span-4 lg:p-8"> {/* Aplicando padding al texto */}
                  <div className="max-w-lg">
                    {/* Título */}
                    <div className="text-center md:text-left mb-6 ">
                      <h1 className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" data-aos="zoom-y-out">Alcance</h1>
                    </div>
                    {/* Texto */}
                    <blockquote className="mb-11">
                      <div className="font-novoApply styles_richtext__vtvls styles_quote__block__aHUoR text-left pr-11">
                        <h2>El proyecto consiste en crear un Robot Automatizado para el cuidado de adultos mayores en San Juan del Río. Esto implica diseñar, construir e integrar sensores y tecnología IoT en el robot, así como programar sistemas en ESP32. También se establecerá una conexión con una plataforma en la nube para el monitoreo remoto del robot</h2>
                      </div>
                    </blockquote>
                  </div>
              </div>     
            </div>
            
        {/* Section Vinil */}
        <div className="grid md:grid-cols-12 max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-14 text-center">
        {/* Imagen */}
        <figure className="relative overflow-hidden aspect-portrait col-span-full md:col-start-3 md:col-span-8 text-center ">
          <Image
            src="/images/Vinil .jpg"
            alt="Proyecto Homme"
            width={3840}
            height={2560}
            layout="responsive"
          />
        </figure>
      </div>

         {/* Video */}
         <div className="grid md:grid-cols-12 max-w-6xl mx-auto px-4 sm:px-6 pb-14 text-center">
                {/* Título */}
                <div className="text-center md:text-left mb-6 ">
                      <h1 className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4 text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" data-aos="zoom-y-out">Video</h1>
                    </div>
                <div className="relative overflow-hidden aspect-portrait col-span-full md:col-start-3 md:col-span-8 text-center">
                  {/* Video */}
                  <video width="100%" controls>
                    <source src="/videos/VideoHomme.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </div>
    </div>
  </div>
</section>
  );
}