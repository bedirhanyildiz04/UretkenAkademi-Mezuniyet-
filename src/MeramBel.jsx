
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MeramBel.css';

function MeramBel() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background-container" style={{ backgroundImage: `url(${getBackgroundImage('background')})` }}>
      <div className={`title-container ${showTitle ? 'fadeInUp' : ''}`}>
        <h1 className="title">Konya'nın Gözde İlçesi Meram</h1>
      </div>
      <div className="merambel-container">
        <LinkToCategory icon={faUser} category="" label="Başkan" index={1} />
        <LinkToCategory icon={faCity} category="about" label="Meram" index={2} />
        <LinkToCategory icon={faBuilding} category="kentsel" label="Kentsel Dönüşüm" index={3} />
        <LinkToCategory icon={faNewspaper} category="haberler" label="Haberler" index={4} />
        <LinkToCategory icon={faPhone} category="contact" label="İletişim" index={5} />
      </div>
    </div>
  );
}

const LinkToCategory = ({ icon, category, label, index }) => (
  <Link to={`/${category}`} className={`merambel-item fadeInLeft delay-${index}`} style={{ backgroundImage: `url(${getBackgroundImage(category)})` }}>
    <FontAwesomeIcon icon={icon} className="icon" />
    <p>{label}</p>
  </Link>
);

const getBackgroundImage = (category) => {
  // Background resimlerini kendi URL'lerinizle değiştirin
  switch (category) {
    case 'background':
      return 'https://i.pinimg.com/originals/2c/a2/f3/2ca2f321a08a2c4677ce83393ff3f87b.jpg';
    case '':
      return 'https://www.meram.bel.tr/upload/medya/Mustafa-Kavu%C5%9F-Yatay_4.jpg';
    case 'about':
      return 'https://i.neredekal.com/i/neredekal/6073818aad45ec7fc62b91b3';
    case 'kentsel':
      return 'https://images.pexels.com/photos/14962024/pexels-photo-14962024/free-photo-of-kent-peyzaj-su-hava.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    case 'haberler':
      return 'https://pic.pikbest.com/best/video_preview_img/1912/686263.jpg!bw700';
    case 'contact':
      return 'https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    default:
      return '';
  }
};

export default MeramBel;
