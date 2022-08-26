import React from 'react'
import Service from './Service'
import { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const Services = () => {

  const dataFromLangProvider = useContext(LangContext);
  
  return (
    <section className='container 
                        mx-auto 
                        my-10'>
        
      <h2 className='text-center text-3xl text-neutral-800 my-10'>
        {dataFromLangProvider.textLang.servicesTitle}
      </h2>

      <div className='grid
                      gap-7
                      grid-cols-1
                      md:grid-cols-2'>

        <Service title={dataFromLangProvider.textLang.service1}
                 img={dataFromLangProvider.textLang.service1Img}
                 alt={dataFromLangProvider.textLang.service1Alt}
                 description={dataFromLangProvider.textLang.serviceDescription}/>

        <Service title={dataFromLangProvider.textLang.service2}
                  img={dataFromLangProvider.textLang.service2Img}
                  alt={dataFromLangProvider.textLang.service2Alt}
                  description={dataFromLangProvider.textLang.serviceDescription}/>

        <Service title={dataFromLangProvider.textLang.service3}
                img={dataFromLangProvider.textLang.service3Img}
                alt={dataFromLangProvider.textLang.service3Alt}
                description={dataFromLangProvider.textLang.serviceDescription}/>

        <Service title={dataFromLangProvider.textLang.service4}
                  img={dataFromLangProvider.textLang.service4Img}
                  alt={dataFromLangProvider.textLang.service4Alt}
                  description={dataFromLangProvider.textLang.serviceDescription}/>

      </div>

    </section>
  )
}

export default Services