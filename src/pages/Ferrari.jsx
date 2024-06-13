const Ferrari = () => {
  return (
    <div>
      <h3 className="col-md-12 text-center text-white"> Modelos destacados</h3>
      <div className="row row-cols-1 row-cols-md-3 ">
        <div className="col mb-3">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/sites/5/2021/05/2021-Ferrari-812-GTS-38.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 1 del card"
            />
            <h5 className="card-title">Ferrari 812 GTS</h5>
            <p>
              <i className="bi bi-calendar3"> 2020</i> |{" "}
              <i className="bi bi-speedometer2"> 15000</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $381.000.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://cdn.motor1.com/images/mgl/0eVzKk/s1/ferrari-roma-spider-cropped.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 2 del card"
            />
            <h5 className="card-title">Ferrari Roma Spider</h5>
            <p>
              <i className="bi bi-calendar3"> 2023</i> |{" "}
              <i className="bi bi-speedometer2"> 100</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $215.990.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/sites/5/2021/05/2022-Ferrari-Portofino-M-2.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 3 del card"
            />
            <h5 className="card-title">Ferrari Portofino M</h5>
            <p>
              <i className="bi bi-calendar3"> 2018</i> |{" "}
              <i className="bi bi-speedometer2"> 7000</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $261.890.000
            </a>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://4kwallpapers.com/images/wallpapers/ferrari-sf90-xx-1920x1080-13169.jpeg"
              className="card-img-top rounded-0"
              alt="Imagen 4 del card"
            />
            <h5 className="card-title">Ferrari SF90 Stradale</h5>
            <p>
              <i className="bi bi-calendar3"> 2021</i> |{" "}
              <i className="bi bi-speedometer2"> 10000</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Híbrido{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $440.990.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/2021/11/2022-Ferrari-812-Competizione-9.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 5 del card"
            />
            <h5 className="card-title">Ferrari 812 Competizione A</h5>
            <p>
              <i className="bi bi-calendar3"> 2022</i> |{" "}
              <i className="bi bi-speedometer2"> 25000</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $550.990.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://cdn.motor1.com/images/mgl/Mkkkrn/s1/oydgybnlje4.jpg"
              className="card-img-top rounded-0"
              alt="Imagen 6 del card"
            />
            <h5 className="card-title">Ferrari Daytona SP3</h5>
            <p>
              <i className="bi bi-calendar3"> 2021</i> |{" "}
              <i className="bi bi-speedometer2"> 2000</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $2.000.580.000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ferrari;
