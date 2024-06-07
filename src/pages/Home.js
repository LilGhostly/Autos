export default function Home() {
  const home = document.createElement("home");
  home.innerHTML = `
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://s1.1zoom.me/b5255/992/Ferrari_F8_Tributo_Red_586991_1920x1080.jpg" class="d-block w-100" alt="Imagen 1 del carrusel">
            <div class="carousel-caption d-none d-md-block">
              <h5>Ferrari SP48</h5>
              <p> Sus líneas tensas y su actitud agresiva lo hacen inmediatamente reconocible, gracias también a su afilado frontal proyectado hacia adelante.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.pinimg.com/originals/30/c1/2c/30c12caf7ca51a5aa639d4928439e62f.jpg" class="d-block w-100" alt="Imagen 2 del carrusel">
            <div class="carousel-caption d-none d-md-block">
              <h5>Lamborghini Huracán Evo</h5>
              <p>El Lamborghini Huracán es un superdeportivo de diseño aerodinámico y tecnología avanzada, inspirado en el átomo de carbono y el ADN de la marca italiana.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://th.bing.com/th/id/R.403061c96da91f0e6e514fe1629e3066?rik=ekLzd6npkSgzjg&pid=ImgRaw&r=0" class="d-block w-100" alt="Imagen 3 del carrusel">
            <div class="carousel-caption d-none d-md-block">
              <h5>Porsche 718</h5>
              <p>l Porsche 718 es un automóvil deportivo que combina el espíritu deportivo del legendario Porsche 718 con el vehículo deportivo del futuro.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://hdqwalls.com/download/audi-r8-v10-tuned-custom-1920x1080.jpg" class="d-block w-100" alt="Imagen 4 del carrusel">
            <div class="carousel-caption d-none d-md-block">
              <h5>Fourth slide label</h5>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    <div class="row mt-4 p-3">
        <div class="col-x1-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card mx-auto h-100">
                <img src="https://easycharging.app/assets/img/make-tesla-s-plaid.jpg" class="card-img-top"  alt="Imagen 1 del card">
                <div class="card-body">
                  <h5 class="card-title">Autos Eléctricos</h5>
                  <p class="card-text">¡Descubre el futuro de la movilidad con los autos eléctricos que nos trae Tesla! Experimenta una conducción suave, silenciosa y respetuosa con el medio ambiente.</p>
                  <a href="#" class="btn btn-primary">¡Conoce más!</a>
                </div>
              </div>
        </div>
        <div class="col-x1-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card mx-auto h-100">
                <img src="https://cdn.bmwblog.com/wp-content/uploads/2019/12/Rolls-Royce-Phantom-RED-1.jpg" class="card-img-top" alt="Imagen 2 del card">
                <div class="card-body">
                  <h5 class="card-title">Rolls-Royce</h5>
                  <p class="card-text">¡Eleva tu experiencia de conducción a nuevas alturas con el último modelo de Rolls-Royce! Experimenta el lujo incomparable, la artesanía meticulosa y el rendimiento excepcional que solo Rolls-Royce puede ofrecer. </p>
                  <a href="#" class="btn btn-primary">¡Conoce más!</a>
                </div>
              </div>
        </div>
        <div class="col-x1-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="card mx-auto h-100">
                <img src="https://coophoreb.com/wp-content/uploads/2021/07/COOPHOREB1.jpg" class="card-img-top" alt="Imagen 3 del card">
                <div class="card-body">
                  <h5 class="card-title">¡Asegura tu vehículo aquí!</h5>
                  <p class="card-text">¡Protege tu inversión y mantén tu tranquilidad asegurando tu vehículo hoy mismo! Con nuestra amplia gama de opciones de seguro, puedes estar seguro de que tu auto estará cubierto en caso de accidentes, robo o daños.</p>
                  <a href="#" class="btn btn-primary">¡Conoce más!</a>
                </div>
              </div>
        </div>
    </div>
    <div class="card bg-black">
        <div class="container">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
              <div class="col mb-3">
                <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                  <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                </a>
                <p class="text-white">Call Center +56 12 234 1284</p>
                <p class="text-white">callcenter@vimar.cl</p>
                <p class="text-white">Calle Limache 3847 -- 3865</p>
                <p class="text-white">Viña del Mar</p>
                
              </div>
          
              <div class="col mb-3">
          
              </div>
          
              <div class="col mb-3">
                <h5 class="text-white">Conócenos</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Sucursales</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Derechos del consumidor</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Preguntas frecuentes</a></li>
                </ul>
              </div>
          
              <div class="col mb-3">
                <h5 class="text-white">Postventa</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Agenda tu cita al Servicio</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Repuestos</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Accesorios</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Mantenciones</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Consulta recall</a></li>
                </ul>
              </div>
          
              <div class="col mb-3">
                <h5 class="text-white">Modelos</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="ferrari.html" class="nav-link p-0 text-white">Ferrari</a></li>
                  <li class="nav-item mb-2"><a href="Lamborghini.html" class="nav-link p-0 text-white">Lamborghini</a></li>
                  <li class="nav-item mb-2"><a href="Audi.html" class="nav-link p-0 text-white">Audi</a></li>
                  <li class="nav-item mb-2"><a href="Rollsroyce.html" class="nav-link p-0 text-white">Rolls-Royce</a></li>
                  <li class="nav-item mb-2"><a href="Porsche.html" class="nav-link p-0 text-white">Porsche</a></li>
                  <li class="nav-item mb-2"><a href="Kia.html" class="nav-link p-0 text-white">Kia</a></li>
                  <li class="nav-item mb-2"><a href="Chevrolet.html" class="nav-link p-0 text-white">Chevrolet</a></li>
                </ul>
              </div>
            </footer>
          </div>

    <div class="col-md-10 offset-md-2 p-2 d-flex">
        <form>
            <h5 class="text-white">Subscribete a nuestros Newsletter</h5>
            <p class="text-white">Resumen mensual de las nuevas novedades de nosotros.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Ingresa tu Email">
                <button class="btn btn-primary" type="button">Subscribete</button>
            </div>
        </form>
        <div class="offset-md-3 mb-3">
            <h5 class="text-white">Metodo de Pago</h5>
            <img alt="Webpay GetNet" width="180" src="https://www.rosselot.cl/wp-content/themes/rosselot-2022/img/getnet2.svg" class="img-fluid">
            <p class="fs-7 d-block my-3 text-white">Haga click para pagos por <b>compra<br> de vehículos, reservas y trámites.</b></p>
            <a title="Webpay GetNet Automotriz Rosselot" class="btn btn-danger w-100" href="https://micrositios.getnet.cl/automotrizrosselot">Pagar Aquí</a>
        </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p class="text-white">© 2024 Company, Inc. Todos los derechos reservados.</p>
        <ul class="list-unstyled d-flex text-white">
            <h5 class="text-white me-3">Síguenos</h5>
            <li class="ms-3"><a class="link-dark" href="#"></a><i class="fab fa-x-twitter fa-2x"></i></li>
            <li class="ms-3"><a class="link-dark" href="#"></a><i class="fab fa-instagram fa-2x"></i></li>
            <li class="ms-3"><a class="link-dark" href="#"></a><i class="fab fa-facebook fa-2x"></i></li>
            <li class="ms-3"><a class="link-dark" href="#"></a><i class="fab fa-whatsapp fa-2x"></i></li>
            <li class="ms-3"><a class="link-dark" href="#"></a><i class="fab fa-youtube fa-2x"></i></li>
        </ul>
    </div>
  </div>
    `;
  return home;
}
