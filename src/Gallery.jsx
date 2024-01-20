// Gallery.js
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './Gallery.css';

const images = [
  "https://i.pinimg.com/originals/af/d2/04/afd2047218c6fe9526489831cd154b0c.jpg",
  "https://lh5.googleusercontent.com/p/AF1QipNnuhGoSrXJZ5ZUVxeOYl6eQWu-sdAiYFwvxqc6",
  "https://cdn.saraymedya.com/news/13961.jpg",
  "https://www.meram.bel.tr/upload/medya/DJI_0007.jpg",
  "https://fastly.4sqi.net/img/general/600x600/52892898_ApHfu_8fxJqQNY_ffdDLnAmRrT1O8Fr6qUhTcs_4Fec.jpg",
  "https://panel.yenimeram.com.tr/public/tinymce/files/2023/may%C4%B1s/30%20may%C4%B1s/7_92.jpg",
  "https://www.yenikonya.com.tr/uploads/2023/07/21/f203bfd5_big.jpg",
  "https://i.neredekal.com/i/neredekal/6073818aad45ec7fc62b91b3",
  "https://konyakultur.gov.tr/images/uploads/images/Meram-ba__lari.jpg",
  "https://cdn.gokonya.com/other/1-20200519233631.jpg",
  "https://cdn.konyaninsesi.com.tr/other/2023/04/26/aw878237-04.jpg",
  "https://cdn.iha.com.tr/Contents/images/2019/52/3148474.jpg"
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  return (
    <div className="gallery-container">
      <h2 className="text-center">Galeri</h2>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} onClick={() => openModal(index)}>
            <img
              className="d-block w-100 img-fluid"
              src={image}
              alt={`Resim ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Modal open={open} onClose={closeModal} center>
        {selectedImage !== null && (
          <img
            className="modal-img"
            src={images[selectedImage]}
            alt={`Resim ${selectedImage + 1}`}
          />
        )}
      </Modal>
    </div>
  );
}

export default Gallery;
