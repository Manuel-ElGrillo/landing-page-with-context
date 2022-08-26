import React from 'react'
import styles from "../styles/Header.module.css";

const Header = ({dataFromLangProvider}) => {

  const {textLang, handleLang} = dataFromLangProvider;

  return (
    <header className={styles.header}>

      <div className={styles.lang}>

        <button onClick={handleLang} 
                className='mx-3 text-slate-100 bg-sky-400 hover:bg-sky-600 py-1 px-8 rounded'>
                  {textLang.btnTextEN}
        </button>

        <button onClick={handleLang} 
                className='mx-3 text-slate-100 bg-sky-400 hover:bg-sky-600 py-1 px-8 rounded'>
                  {textLang.btnTextES}
        </button>

      </div>

      <div className={styles.mainTitle}>

        <h1 className='text-slate-100 text-5xl my-5'>
          {textLang.mainTitle}
        </h1>

        <p className='text-slate-100 text-xl font-light my-3 bg-transparent'>
          {textLang.mainText}
        </p>

        <button className='border-solid 
                         border-2 
                       border-sky-400 
                         py-2 px-10 
                         text-lg 
                       text-slate-100 
                         hover:border-sky-500
                         hover:text-slate-300
                         rounded'>
          {textLang.ctaBtn}
        </button>

      </div>

    </header>
  )
}

export default Header