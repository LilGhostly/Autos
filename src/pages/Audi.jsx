const Audi = () => {
  return (
    <div>
      <h3 className="col-md-12 text-center text-white"> Modelos destacados</h3>
      <div className="row row-cols-1 row-cols-md-3 ">
        <div className="col mb-3">
          <div className="card text-center rounded-0">
            <img
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_05a99b23df054e0eb2c93b3885eaa13e.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 1 del card"
            />
            <h5 className="card-title">Audi A3 Sedán</h5>
            <p>
              <i className="bi bi-calendar3"> 2020</i> |{" "}
              <i className="bi bi-speedometer2"> 2.0L TFSI</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Bencina{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $31.509.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_70a1283f9b774d42bde83b983bf522aa.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 2 del card"
            />
            <h5 className="card-title">Audi-tron Sportback</h5>
            <p>
              <i className="bi bi-calendar3"> 2023</i> |{" "}
              <i className="bi bi-speedometer2"> 2.2L TFSI</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Bencina{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $81.772.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_d9d3aee36bb2403aaec9e657e65ed2fc.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 3 del card"
            />
            <h5 className="card-title">Audi S3 Sedán</h5>
            <p>
              <i className="bi bi-calendar3"> 2018</i> |{" "}
              <i className="bi bi-speedometer2"> 2.0L TFSI</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Bencina{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $235.229.000
            </a>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_331e021e61354e769067bb21f2626685.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 4 del card"
            />
            <h5 className="card-title">Audi A1 Sportback</h5>
            <p>
              <i className="bi bi-calendar3"> 2021</i> |{" "}
              <i className="bi bi-speedometer2"> 35 TFSI Aut Sport</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Híbrido{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $29.855.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_d71cdaceff82463c893d1d117fc2802d.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 5 del card"
            />
            <h5 className="card-title">Audi e-tron GT</h5>
            <p>
              <i className="bi bi-calendar3"> 2022</i> |{" "}
              <i className="bi bi-speedometer2"> RS</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $134.609.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_43a8259e73504efbbe6dc167a9c09cc5.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 6 del card"
            />
            <h5 className="card-title">Audi Q7</h5>
            <p>
              <i className="bi bi-calendar3"> 2021</i> |{" "}
              <i className="bi bi-speedometer2"> 55 TFSI</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $90.960.000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audi;
