// Home.js
import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

function Home() {
  const imgUrl = "https://baskanprofil.com/assets/images/baskan/42-meram.jpg";
  const img1Url = "https://www.cagdas-insaat.com.tr/tr/dimg/referans/30606276512716431183Meram-belediyesi-vektorel-cizim-logo.jpg";
  const video1Url = "https://www.youtube.com/embed/Eer48hinLY0";
  const video2Url = "https://www.youtube.com/embed/TSLfO61ntT4";

  return (
    <div className="home-container">
      <div
        className="row align-items-center background-row"
        style={{
          backgroundImage: `url(${img1Url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "0",
          margin: "0",
          minHeight: "100vh",
          minWidth: "auto",
          borderRadius: "0px",
        }}
      >
        <div className="col-sm-3">
          <img src={imgUrl} alt="" className="cover-image img-fluid" />
        </div>
        <div className="col-sm bio-section">
          <p className="bio">
            <b>
              Öğrenim hayatına Ali İhsan Dayıoğlugil İlkokulu'nda başlayan
              Mustafa KAVUŞ, orta ve lise öğrenimini ise Konya İmam Hatip
              Lisesi’nde bitirdi. 1995 yılında kazandığı Ankara Üniversitesi
              Siyasal Bilgiler Fakültesi İşletme Bölümü’nü başarıyla
              tamamlamasının ardından Selçuk Üniversitesi Yönetim Organizasyon
              Ana Bilim Dalı’nda yüksek lisans eğitimi aldı. Mustafa KAVUŞ,
              eğitim hayatının yanı sıra küçük yaştan itibaren iş hayatı
              tecrübesi kazanmaya çalıştı. Tekstil, yayınevi ve gıda
              sektörlerinde işletmecilik ve yöneticilik yaptı. Tüm bu
              çalışmalarının yanında siyasete de ilgi duyan Mustafa KAVUŞ, AK
              Parti ile başladığı siyasi yaşamında 2001-2003 yılları arasında AK
              Parti İl Gençlik Kolları Kurucu Teşkilatlanma Başkanı olarak görev
              yaptı. Siyasi tecrübesini 2003-2005 yıllarında İl Teşkilatı
              Yönetim Kurulu Üyesi olarak sürdüren KAVUŞ, 2011 genel
              seçimlerinde milletvekili aday adayı oldu. 2004 yılında Konya
              Büyükşehir Belediyesi Başkanlık danışmanlığına getirilen KAVUŞ,
              2006’da Teftiş Kurulu Müfettişliği’ne atandı. 2009 yılında
              getirildiği Teftiş Kurulu Başkanlığını 2018 yılına kadar sürdürdü.
              Çevre ve Şehircilik Bakanlığı’nda Bakan Müşaviri olarak görev
              yapmakta iken aday adaylığı başvurusu için istifa etti. 31 Mart
              2019 yerel seçimlerinde Meram Belediye Başkanı seçilen Mustafa
              KAVUŞ evli ve iki çocuk babasıdır. Birlikte Yönetiyoruz Mustafa
              KAVUŞ Meram Belediye Başkanı
            </b>
          </p>
        </div>
      </div>

      <div className="video-section background-row">
        {" "}
        <div className="row">
          <div className="col-md-6">
            <p className="head">
              Yoğun çalışma temposuyla 2022 yılını geride bırakıyoruz.
            </p>
            <div className="video-wrapper">
              <iframe
                title="video1"
                width="100%"
                height="315"
                src={video1Url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <p className="head">"Gönüllerimiz bir, Meramımız Bir..."</p>
            <div>.</div>
            <div className="video-wrapper">
              <iframe
                title="video2"
                width="100%"
                height="315"
                src={video2Url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
