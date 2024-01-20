import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Kentsel.css";

function Kentsel() {
  const projects = [
    {
      title: "Fahrunnisa Mah Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      image: "https://www.meram.bel.tr/upload/medya/fahrunnisaevleri11.jpg",
      description: "Meram Belediyesi’nin ilçe genelinde yürüttüğü kentsel dönüşüm çalışmaları kapsamında kurulmasına öncülük ettiği Fahrünnisa Evleri...",
      link: "https://www.meram.bel.tr/proje/fahrunnisa-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    {
      title: "Turgutreis Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      image: "https://www.meram.bel.tr/upload/medya/turgutreis-evleri.jpg",
      description: "Meram Belediyesi'nin en büyük kentsel dönüşüm alanı içinde bulunan Turgutreis evleri, yükselen değer ve cazibe merkezi Aymanas...",
      link: "https://www.meram.bel.tr/proje/turgutreis-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    {
      title: "Uluırmak Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      image: "https://www.meram.bel.tr/upload/medya/14112018102126879.jpg",
      description: "Meram Belediyesi öncülüğünde başlanan Uluırmak Evleri 2+1, 3+1 ve 4+1 daire seçenekleri sunarken, 1650 araçlık kapalı otopark ve...",
      link: "https://www.meram.bel.tr/proje/uluirmak-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
    {
      title: "Aymanas Mah. Kentsel Dönüşüm Kat Karşılığı Konut Yapımı",
      image: "https://www.meram.bel.tr/upload/medya/3062021111248259.jpg",
      description: "Meram Belediyesi öncülüğünde başlanan Aymanas Evlerinde toplamda 448 adet konut 2+1, 3+1 daire seçenekleri sunarken, 34 ticari alan, 452...",
      link: "https://www.meram.bel.tr/proje/aymanas-mah-kentsel-donusum-kat-karsiligi-konut-yapimi",
    },
  ];

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleProjectChange = (index) => {
    setCurrentProject(projects[index]);
  };

  return (
    <div className="kentsel">
      <div className="carousel">
        <div className="carousel-arrow left" onClick={() => handleProjectChange((projects.indexOf(currentProject) + projects.length - 1) % projects.length)}>
          &lt;
        </div>

        <Card className="kentsel-card">
          <Card.Img variant="top" src={currentProject.image} alt={currentProject.title} />
          <Card.Body>
            <Card.Title>{currentProject.title}</Card.Title>
            <Card.Text>{currentProject.description}</Card.Text>
            <NavLink to={currentProject.link} className="card-link">
              Detaylar
            </NavLink>
          </Card.Body>
        </Card>

        <div className="carousel-arrow right" onClick={() => handleProjectChange((projects.indexOf(currentProject) + 1) % projects.length)}>
          &gt;
        </div>
      </div>

      <div className="carousel-navigation">
        {projects.map((project, index) => (
          <span key={index} onClick={() => handleProjectChange(index)} className={`carousel-dot ${index === projects.indexOf(currentProject) ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

export default Kentsel;
