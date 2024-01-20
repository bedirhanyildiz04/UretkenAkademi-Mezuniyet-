// About.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

// Resim URL'leri
const img1 = "https://www.meram.bel.tr/upload/medya/1-7_110.jpg";
const img2 = "https://www.meram.bel.tr/upload/medya/7_92.jpg";
const img3 = "https://www.meram.bel.tr/upload/medya/4_111.jpg";

function About() {
  return (
    <>
      <div className="container text-center" id="meram">
        <div className="location-link">
          <NavLink
            to="https://maps.app.goo.gl/p8zBjJKJGuQWwPrF7"
            className="map-link btn btn-primary"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            <span className="ms-2">Konum Bilgisi</span>
          </NavLink>
        </div>     
        <h5>
          Saklı Cennet Meram Konya’nın güneybatı kısmında yer alan “Bağ-ı Meram”
          huzur dolu atmosferi ile sizi içine çekecek. Ankara-Konya,
          Isparta-Konya, Antalya-Konya, Mersin-Konya ve Adana-Konya olmak üzere
          beş önemli yolun geçtiği merkezde yer alan Meram ilçesi, doğal
          güzellikleriyle Konya’nın pastoral yönünü vurguluyor. Evliya
          Çelebi’nin Seyahatnamesi’nde Meram ilçesi: “Peçevi şehrinin baruthane
          Mesiresi, Kırım’ın Sudak bağı, İstanbul’un yüz yetmiş beşten fazla
          bahçe ve gülistanları, Tebriz’in Şah-ı Cihan Bağı, Konya’nın Meram
          mesiresinin yanında bir çemenzar bile değildir.’’ olarak geçmektedir.
        </h5>
        <h5>
          Selçuklular’ın gücü ve estetik algısını, günümüze kavuşturan Tarihi
          Meram Köprüsü, ilçenin günümüze ulaşan nadide eserlerinden bir tanesi.
          Sadece mimâri yapıtlarıyla değil tabiat güzellikleriyle de dikkat
          çeken Meram’da; gül bahçeleri ve mesire alanları gibi sit bölgeleri de
          gezginlerin uğrak yeridir. Güzelliğini ilk günkü gibi koruyan Meram’ın
          Toplam yüzölçümü bin 949 km²dir. İlçe; farklı deneyimler yaşamak
          isteyen ziyaretçileri için de tarihî hamam, sulak alanları ve kır
          yaşamı gibi çekici alanlar sunuyor.
        </h5>
        <div className="row">
          <div className="col-md-4">
            <NavLink
              to="https://www.meram.bel.tr/proje/yenice-parki"
              className="nav-link"
            >
              <div className="card big" style={{ width: "18rem" }}>
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p style={{ color: "black", textDecoration: "underline" }}>
                    Akıllı Atık Yönetim Sistemi
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-4">
            <NavLink
              to="https://www.meram.bel.tr/haber/2023-un-en-gozdesi-kizlar-kayasi"
              className="nav-link"
            >
              <div className="card big" style={{ width: "18rem" }}>
                <img src={img2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p style={{ color: "black", textDecoration: "underline" }}>
                    Kızlar Kayası
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-4">
            <NavLink
              to="https://www.meram.bel.tr/haber/meram-bagi-baharla-birlikte-kapilarini-yeni-sezon-icin-acti"
              className="nav-link"
            >
              <div className="card big" style={{ width: "18rem" }}>
                <img src={img3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p style={{ color: "black", textDecoration: "underline" }}>
                    Meram Bağları
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div id="gallery-link" className="text-center">
        <NavLink to="/gallery" className="nav-link">
          <p>
            <strong>Diğer fotoğraflar için galeriye gidin</strong>
          </p>
        </NavLink>
      </div>
    </>
  );
}

export default About;
