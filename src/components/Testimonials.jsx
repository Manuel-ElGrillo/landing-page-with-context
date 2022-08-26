import React, {useContext} from 'react'
import Testimonial from './Testimonial'
import { LangContext } from '../context/LangContext'

const Testimonials = () => {

  const dataFromLangProvider = useContext(LangContext);

  return (
    <section className='my-7 container m-auto'>

      <h5 className='text-center text-2xl my-7'>
        {dataFromLangProvider.textLang.testimonialTitle}
      </h5>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

        <Testimonial img={dataFromLangProvider.textLang.testimonial1Img}/>

        <Testimonial img={dataFromLangProvider.textLang.testimonial2Img}/>

        <Testimonial img={dataFromLangProvider.textLang.testimonial3Img}/>

      </div>
        
    </section>
  )
}

export default Testimonials