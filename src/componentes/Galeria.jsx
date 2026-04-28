import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './galeria.css';

export default function Galeria() {
  const imagenes = [
    { id: 1, src: '/galeria1.jpg', alt: 'Café de la Plaza' },
    { id: 2, src: '/galeria2.jpg', alt: 'Nuestros Platos' },
    { id: 3, src: '/galeria3.jpg', alt: 'Momentos Especiales' },
    { id: 4, src: '/galeria4.jpg', alt: 'Gastronomía Local' },
    { id: 5, src: '/galeria5.jpg', alt: 'Detalles que Enamoran' },
    { id: 6, src: '/galeria6.jpg', alt: 'El Clásico de San Nicolás' },
  ];

  return (
    <section className="galeria-section" id="galeria">
      <div className="galeria-header">
        <p className="galeria-subtitle">Momentos</p>
        <h2 className="galeria-title">Nuestra Galería</h2>
      </div>

      <div className="galeria-slider-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {imagenes.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="galeria-slide-item">
                <img src={img.src} alt={img.alt} />
                <div className="galeria-slide-overlay">
                    <span>{img.alt}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="galeria-footer">
        <a href="https://instagram.com/elcafedelaplazamitre/" target="_blank" rel="noreferrer" className="insta-button">
          <i className="fi fi-brands-instagram"></i> Ver más en Instagram
        </a>
      </div>
    </section>
  )
}
