import React from 'react'
import styles from "../styles/CTA.module.css"
import { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const CTA = () => {

  const dataFromLangProvider = useContext(LangContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className={styles.cta}>

      <p className='bg-transparent text-slate-100 text-5xl text-center px-2'>
        {dataFromLangProvider.textLang.ctaText}
      </p>

      <form action="">
        <input type="email" 
               name="" 
               id="" 
               placeholder={dataFromLangProvider.textLang.ctaInputText}
               className='border-2 border-emerald-400 rounded p-3 my-3 w-96'/>
        <button type="submit"
                className='text-slate-200 bg-sky-400 hover:bg-sky-500 w-1/2 py-2 rounded m-auto'
                onClick={handleSubmit}>
          {dataFromLangProvider.textLang.ctaSubmitText}
        </button>
      </form>
      
    </section>
  )
}

export default CTA