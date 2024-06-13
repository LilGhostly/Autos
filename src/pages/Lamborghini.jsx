const Lamborghini = () => {
  return (
    <div>
      <h3 className="col-md-12 text-center text-white"> Modelos destacados</h3>
      <div className="row row-cols-1 row-cols-md-3 ">
        <div className="col mb-3">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/sites/11/2020/11/2021-Lamborghini-Huraca%CC%81n-STO-2.jpg?fit=around%7C875:492"
              className="card-img-top rounded-0"
              alt="Imagen 1 del card"
            />
            <h5 className="card-title">Lamborghini Huracán</h5>
            <p>
              <i className="bi bi-calendar3"> 2021</i> |{" "}
              <i className="bi bi-speedometer2"> 18 mpg</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $190.990.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/2023/01/2023-Lamborghini-Huracan-Tecnica-6.jpg?fit=around%7C875:492"
              className="card-img-top rounded-0"
              alt="Imagen 2 del card"
            />
            <h5 className="card-title">Lamborghini Huracán</h5>
            <p>
              <i className="bi bi-calendar3"> 2024</i> |{" "}
              <i className="bi bi-speedometer2"> MSR</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $196.000.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/2022/10/2023-Lamborghini-Urus-Performante-31.jpg?fit=around%7C875:492"
              className="card-img-top rounded-0"
              alt="Imagen 3 del card"
            />
            <h5 className="card-title">Lamborghini Urus</h5>
            <p>
              <i className="bi bi-calendar3"> 2023</i> |{" "}
              <i className="bi bi-speedometer2"> MRSR</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $210.990.000
            </a>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/2023/03/037-2024-lamborghini-revuelto.jpg?fit=around%7C875:492"
              className="card-img-top rounded-0"
              alt="Imagen 4 del card"
            />
            <h5 className="card-title">Lamborghini Revuelto</h5>
            <p>
              <i className="bi bi-calendar3"> 2024</i> |{" "}
              <i className="bi bi-speedometer2"> "PVP RMSR"</i> |{" "}
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
              src="https://www.motortrend.com/uploads/2022/02/2022-Lamborghini-Aventador_533458.jpg?fit=around%7C875:492"
              className="card-img-top rounded-0"
              alt="Imagen 5 del card"
            />
            <h5 className="card-title">Lamborghini Aventador</h5>
            <p>
              <i className="bi bi-calendar3"> 2022</i> |{" "}
              <i className="bi bi-speedometer2"> 780@8,500</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $449.000.000
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card text-center rounded-0">
            <img
              src="https://www.motortrend.com/uploads/2023/02/2024-Lamborghini-Invencible-1.jpg?w=512&width=512&q=75&format=webp"
              className="card-img-top rounded-0"
              alt="Imagen 6 del card"
            />
            <h5 className="card-title">Lamborghini Invencible</h5>
            <p>
              <i className="bi bi-calendar3"> 2024</i> |{" "}
              <i className="bi bi-speedometer2"> V12</i> |{" "}
              <i className="fa-solid fa-gas-pump"></i> Petroleo{" "}
            </p>
            <a href="#" className="btn btn-secondary rounded-0">
              $1.990.990.000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lamborghini;
