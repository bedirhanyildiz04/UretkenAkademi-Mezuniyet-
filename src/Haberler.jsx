import React, { useState, useEffect } from "react";

const Haberler = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/Haberler.json");

        if (!response.ok) {
          throw new Error(`HTTP hatası! Kod: ${response.status}`);
        }

        const data = await response.json();
        console.log("Alınan veri:", data);
        setNewsData(data);
      } catch (error) {
        console.error("Haberleri getirme hatası:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Haberler</h2>
      <div className="row">
        {newsData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={`Haber Görseli ${item.id}`}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <a
                  href='https://www.meram.bel.tr/haberler'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Detaylar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Haberler;
