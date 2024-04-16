import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="quote__section w-full relative bg-white mx-auto px-8 lg:w-4/5"> {/* Estableciendo un ancho específico */}
      <div className="grid grid-cols-4 gap-sm mx-xxs md:grid-cols-12 md:gap-lg md:mx-sm py-lg quote__section__grid grid-flow-dense lg:h-full">
        <figure className="relative overflow-hidden aspect-portrait col-span-full md:col-span-6">
          <Image
            src="/images/robotsito.jpg"
            alt="Kasim Kutay"
            width={3840}
            height={2560}
            layout="responsive"
          />
        </figure>
        <div className="flex flex-col justify-center col-span-full mt-12 md:mt-0 text-dark h-full md:col-span-6 lg:p-8"> {/* Aplicando padding al texto */}
          <div className="max-w-lg"> {/* Estableciendo un ancho máximo para el contenido de texto */}
            <blockquote className="mb-11">
              <div className="font-novoApply styles_richtext__vtvls styles_quote__block__aHUoR">
                <h2>Este proyecto desarrolla un Robot Automatizado con tecnología IoT y sensores para abordar los desafíos del envejecimiento de la población. Ofrece monitoreo continuo de las condiciones ambientales y la frecuencia cardíaca de adultos mayores en sus hogares, con alertas ante posibles emergencias.</h2>
              </div>
            </blockquote>
            <p className="text-dark font-novoApply text-body"></p>
            <p className="text-dark font-novoApply text-body"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
