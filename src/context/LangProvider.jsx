import { LangContext } from "./LangContext";
import { useState } from "react";
import service1Img from "../assets/img/service-1.jpg";
import service2Img from "../assets/img/service-2.jpg";
import service3Img from "../assets/img/service-3.jpg";
import service4Img from "../assets/img/service-4.jpg";
import testimonial1Img from "../assets/img/portrait-1.jpg";
import testimonial2Img from "../assets/img/portrait-2.jpg";
import testimonial3Img from "../assets/img/portrait-3.jpg";

export const LangProvider = ({children}) => {

    const lang = {
        en: {
          btnTextEN: "English",
          btnTextES: "Spanish",
          mainTitle: "The optimal residential construction  service for you",
          mainText: "We know how important it is to take care of your home",
          ctaBtn: "Contact us",
          servicesTitle: "Our renovation services",
          service1: "Bathroom renovation",
          service1Img,
          service1Alt: "Bathroom service",
          serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra quam quis maximus imperdiet. Donec turpis turpis, posuere vitae tellus eu, ultrices maximus odio. Curabitur augue eros, elementum sed metus non, scelerisque luctus ex. Duis ac diam nulla. Pellentesque suscipit metus ut est pulvinar congue.",
          service2: "Kitchen renovation",
          service2Img,
          service2Alt: "Kitchen renovation",
          service3: "Room addition",
          service3Img,
          service3Alt: "Room additions",
          service4: "Free project estimations",
          service4Img,
          service4Alt: "Free projects estimations",
          ctaText: "Join to our monthly newsletter!",
          ctaInputText: "Your email addres",
          ctaSubmitText: "Join",
          testimonialTitle: "Testimonials",
          testimonial1Img,
          testimonial2Img,
          testimonial3Img,
          whyTitle: "Why choose us",
          whyText: "The prices of our renovation services are adapted according to the client's needs. We have the flexibility, materials and ideas to carry out any design.",
          footerText: "All rights reserved",
        },
        es: {
          btnTextEN: "Ingl??s",
          btnTextES: "Espa??ol",
          mainTitle: "El mejor plan de renovaci??n residencial para ti",
          mainText: "Sabemos lo importante que es mantener tu hogar",
          ctaBtn: "Cont??ctanos",
          servicesTitle: "Nuestros servicios de renovaci??n",
          service1: "Renovaci??n de ba??os",
          service1Img,
          service1Alt: "Remodelaci??n de ba??os",
          serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra quam quis maximus imperdiet. Donec turpis turpis, posuere vitae tellus eu, ultrices maximus odio. Curabitur augue eros, elementum sed metus non, scelerisque luctus ex. Duis ac diam nulla. Pellentesque suscipit metus ut est pulvinar congue.",
          service2: "Renovaci??n de cocinas",
          service2Img,
          service2Alt: "Renovaci??n de cocinas",
          service3: "Expansi??n de habitaciones",
          service3Img,
          service3Alt: "Expansi??n de habitaciones",
          service4: "Asesor??as gratuitas",
          service4Img,
          service4Alt: "Asesoramiento gratis",
          ctaText: "????nete a nuestro bolet??n mensual!",
          ctaInputText: "Indica tu direcci??n de correo",
          ctaSubmitText: "Unirme",
          testimonialTitle: "Testimonios",
          testimonial1Img,
          testimonial2Img,
          testimonial3Img,
          whyTitle: "??Por qu?? elegirnos?",
          whyText: "Los precios de nuestros servicios de remodelaci??n se adaptan seg??n la necesidad del cliente. Poseemos la flexibilidad, los materiales y las ideas para llevar a cabo cualquier dise??o.",
          footerText: "Todos los derechos reservados",
        },
    }

  const [textLang, setTextLang] = useState(lang.en);

  const handleLang = (e) => {
    if (e.target.innerText === "English" || e.target.innerText === "Ingl??s") {
      setTextLang(lang.en);
    } else {
      setTextLang(lang.es);
    }
  }

  const dataFromLangProvider = {lang, textLang, handleLang}
    
  return (
    <LangContext.Provider value={dataFromLangProvider}>
        {children}
    </LangContext.Provider>
  )
}

