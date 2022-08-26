import React, {useContext} from 'react';
import { LangContext } from '../context/LangContext';

const Why = () => {

  const dataFromLangContext = useContext(LangContext);

  return (
    <section className='w-full h-auto bg-neutral-800 py-10'>

      <div className='container m-auto bg-transparent'>
        <p className='bg-transparent text-slate-100 font-extrabold text-6xl py-3 ml-20'>
          {dataFromLangContext.textLang.whyTitle}
        </p>

        <strong className='bg-transparent text-slate-100 text-3xl font-thin leading-relaxed'>
          {dataFromLangContext.textLang.whyText}
        </strong>
      </div>

    </section>
  )
}

export default Why