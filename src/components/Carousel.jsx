const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://s1.1zoom.me/b5255/992/Ferrari_F8_Tributo_Red_586991_1920x1080.jpg"
            className="d-block w-100"
            alt="Imagen 1 del carrusel"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Ferrari SP48</h5>
            <p>
              {" "}
              Sus líneas tensas y su actitud agresiva lo hacen inmediatamente
              reconocible, gracias también a su afilado frontal proyectado hacia
              adelante.
            </p>
            <a href="ferrari.html" className="btn btn-primary">
              ¡Ver más!
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/originals/30/c1/2c/30c12caf7ca51a5aa639d4928439e62f.jpg"
            className="d-block w-100"
            alt="Imagen 2 del carrusel"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Lamborghini Huracán Evo</h5>
            <p>
              El Lamborghini Huracán es un superdeportivo de diseño aerodinámico
              y tecnología avanzada, inspirado en el átomo de carbono y el ADN
              de la marca italiana.
            </p>
            <a href="Lamborghini.html" className="btn btn-primary">
              ¡Ver más!
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://th.bing.com/th/id/R.403061c96da91f0e6e514fe1629e3066?rik=ekLzd6npkSgzjg&pid=ImgRaw&r=0"
            className="d-block w-100"
            alt="Imagen 3 del carrusel"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Porsche 718</h5>
            <p>
              l Porsche 718 es un automóvil deportivo que combina el espíritu
              deportivo del legendario Porsche 718 con el vehículo deportivo del
              futuro.
            </p>
            <a href="Porsche.html" className="btn btn-primary">
              ¡Ver más!
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://hdqwalls.com/download/audi-r8-v10-tuned-custom-1920x1080.jpg"
            className="d-block w-100"
            alt="Imagen 4 del carrusel"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Audi R8</h5>
            <p>
              El Audi R8 es un automóvil deportivo de alto rendimiento y diseño
              aerodinámico, conocido por su motor central y tracción integral
              quattro.
            </p>
            <a href="Audi.html" className="btn btn-primary">
              ¡Ver más!
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
