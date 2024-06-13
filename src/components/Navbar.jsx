import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Autos del mar
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  onClick={() => navigate("./usados")}
                >
                  Autos Usados
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Autos Nuevos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/nuevos/ferrari")}
                    >
                      Ferrari
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/nuevos/lamborghini")}
                    >
                      Lamborghini
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/nuevos/porsche")}
                    >
                      Porsche
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/nuevos/audi")}
                    >
                      Audi
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/nuevos/rolls-royce")}
                    >
                      Rolls-Royce
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  id="compramos-autos"
                  className="nav-link text-white"
                  aria-disabled="true"
                  href="#"
                >
                  Compramos tus autos
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
