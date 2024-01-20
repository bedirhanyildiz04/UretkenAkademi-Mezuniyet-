import React from 'react'
import './Contact.css'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, } from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* <div id="container">

        <a href="https://www.facebook.com/Meram.Belediyesi/?locale=tr_TR"><FaFacebook size="60" /></a>
        <a href="https://www.instagram.com/meram.belediyesi/" style={{marginLeft:'50px',marginRight:'50px'}}  ><FaInstagram size="60" className='instagram' /></a>
        <a href="https://twitter.com/MeramBelediyesi"><FaTwitter size="60" /></a>
        <a href="https://www.meram.bel.tr/istek-sikayet" style={{marginLeft:'50px'}} ><FaPhone size="60" /><p style={{marginLeft:'400px',fontSize:'30px'}} > <h4 style={{fontSize:'15px'}} >MERAM BELEDİYESİ ÇÖZÜM MERKEZİ</h4> 444 3 042</p></a>
      </div> */}

      <div className='row' >
        <div className='col' ><p style={{ color: 'white' }} >1</p > <p style={{ color: 'white' }} >1</p> <p style={{ color: 'white' }} >1</p> <p style={{ color: 'white' }} >1</p>    <p style={{ color: 'white' }} >1</p > <p style={{ color: 'white' }} >1</p><p style={{ color: 'white' }} >1</p> <p style={{ color: 'white' }} >1</p> <h2 style={{marginLeft:'280px'}} >Sosyal Medya Hesapları</h2>
      <a href="https://www.facebook.com/Meram.Belediyesi/?locale=tr_TR" style={{marginLeft:'300px'}} ><FaFacebook size="60" /></a>
      <a href="https://www.instagram.com/meram.belediyesi/" style={{ marginLeft: '50px', marginRight: '50px' }}  ><FaInstagram size="60" className='instagram' /></a>
      <a href="https://twitter.com/MeramBelediyesi"><FaTwitter size="60" /></a> </div>
        <div className='col' ><p style={{ color: 'white' }} >1</p  ><p style={{ color: 'white' }} >1</p> <p style={{ color: 'white' }} >1</p> <p style={{ color: 'white' }} >1</p > <p style={{ color: 'white' }} >1</p ><p style={{ color: 'white' }} >1</p> <p style={{ color: 'white' }} >1</p><p style={{ color: 'white' }} >1</p> <h2>Meram Belediyesi Çözüm Merkezi</h2> <a href="https://www.meram.bel.tr/istek-sikayet" style={{ marginLeft: '160px',fontSize:'30px' }} ><FaPhone size="60" /> 444 3 042 </a></div>
      </div>
      {/* <FaBeer size="60" color='red' />
      <FaFacebook size="60" color='red' /> */} 


    </>
  )
}

export default Contact