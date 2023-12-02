import React from 'react';
import '../css/footer.css'

const Footer = () => {
  const redesSociales = [
    { nombre: "Facebook" ,icono:'fa-facebook', url: 'https://www.facebook.com/tu-restaurante' },
    { nombre: 'Twitter',icono:'fa-instagram', url: 'https://twitter.com/tu-restaurante' },
    { nombre: 'Instagram',icono:'fa-twitter', url: 'https://www.instagram.com/tu-restaurante' },
    { nombre: 'Whatsapp',icono:'fa-whatsapp', url: 'https://www.whatsapp.com/tu-restaurante' },
  ];

  return (
    <footer className="footer">
      <p>Síguenos en redes sociales:</p>
      <ul className="redes-css">
        {redesSociales.map((redesSociales, index) => (
          <li key={index}>
            <a href={redesSociales.url} target="_blank" rel="redes sociales"> 
            <i className={`fa ${redesSociales.icono} fa-2x  text-light`}aria-hidden="true"></i>
            
              {/* {redesSociales.name} */}
            </a>
          </li>
        ))}
      </ul>
      <p>&copy; {new Date().getFullYear()} El Rincon del Sabor. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;

