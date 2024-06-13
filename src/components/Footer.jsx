const Footer = () => {
  return (
    <div className="card bg-black">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>
            <p className="text-white">Call Center +56 12 234 1284</p>
            <p className="text-white">callcenter@vimar.cl</p>
            <p className="text-white">Calle Limache 3847 -- 3865</p>
            <p className="text-white">Viña del Mar</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5 className="text-white">Conócenos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Sucursales
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Derechos del consumidor
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-white">Postventa</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Agenda tu cita al Servicio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Repuestos
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Accesorios
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Mantenciones
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Consulta recall
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-white">Modelos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="ferrari.html" className="nav-link p-0 text-white">
                  Ferrari
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="Lamborghini.html" className="nav-link p-0 text-white">
                  Lamborghini
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="Audi.html" className="nav-link p-0 text-white">
                  Audi
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="Rollsroyce.html" className="nav-link p-0 text-white">
                  Rolls-Royce
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="Porsche.html" className="nav-link p-0 text-white">
                  Porsche
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>

      <div className="col-md-10 offset-md-2 p-2 d-flex">
        <form>
          <h5 className="text-white">Subscribete a nuestros Newsletter</h5>
          <p className="text-white">
            Resumen mensual de las nuevas novedades de nosotros.
          </p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter1"
              type="text"
              className="form-control"
              placeholder="Ingresa tu Email"
            />
            <button className="btn btn-primary" type="button">
              Subscribete
            </button>
          </div>
        </form>
        <div className="offset-md-3 mb-3">
          <h5 className="text-white">Metodo de Pago</h5>
          <img
            alt="Webpay GetNet"
            width="180"
            src="https://www.rosselot.cl/wp-content/themes/rosselot-2022/img/getnet2.svg"
            className="img-fluid"
          />
          <p className="fs-7 d-block my-3 text-white">
            Haga click para pagos por{" "}
            <b>
              compra
              <br /> de vehículos, reservas y trámites.
            </b>
          </p>
          <a
            title="Webpay GetNet Automotriz Rosselot"
            className="btn btn-danger w-100"
            href="https://micrositios.getnet.cl/automotrizrosselot"
          >
            Pagar Aquí
          </a>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className="text-white">
          © 2024 Company, Inc. Todos los derechos reservados.
        </p>
        <ul className="list-unstyled d-flex text-white">
          <h5 className="text-white me-3">Síguenos</h5>
          <li className="ms-3">
            <a className="link-dark" href="#"></a>
            <i className="fab fa-x-twitter fa-2x"></i>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#"></a>
            <i className="fab fa-instagram fa-2x"></i>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#"></a>
            <i className="fab fa-facebook fa-2x"></i>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#"></a>
            <i className="fab fa-whatsapp fa-2x"></i>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#"></a>
            <i className="fab fa-youtube fa-2x"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
