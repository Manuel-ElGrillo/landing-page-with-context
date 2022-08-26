import React, {useContext} from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

const Footer = () => {

  const dataFromLangContext = useContext(LangContext);

  return (
    <footer className='py-10'>

      <div className='flex justify-center gap-3'>

        <Link to={"/"}>
          <FaInstagram color='rgb(148 163 184)' size={"2rem"} />
        </Link>

        <Link to={"/"}>
          <FaFacebook color='rgb(148 163 184)' size={"2rem"} />
        </Link>

        <Link to={"/"}>
          <FaPinterest color='rgb(148 163 184)' size={"2rem"} />
        </Link>

        <Link to={"/"}>
          <FaTwitter color='rgb(148 163 184)' size={"2rem"} />
        </Link>

        <Link to={"/"}>
          <FaLinkedin color='rgb(148 163 184)' size={"2rem"} />
        </Link>

        <Link to={"/"}>
          <FaPhone color='rgb(148 163 184)' size={"2rem"} />
        </Link>

      </div>

      <p className='text-center text-neutral-900 py-3'>
         &copy;{dataFromLangContext.textLang.footerText}
      </p>

    </footer>
  )
}

export default Footer