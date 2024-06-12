const HomeAlterContent = () => {
  return (
    <div className="row mt-4 p-3">
      <div className="col-x1-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div className="card mx-auto h-100">
          <img
            src="https://easycharging.app/assets/img/make-tesla-s-plaid.jpg"
            className="card-img-top"
            alt="Imagen 1 del card"
          />
          <div className="card-body">
            <h5 className="card-title">Autos Eléctricos</h5>
            <p className="card-text">
              ¡Descubre el futuro de la movilidad con los autos eléctricos que
              nos trae Tesla! Experimenta una conducción suave, silenciosa y
              respetuosa con el medio ambiente.
            </p>
            <a href="https://www.tesla.com/es_cl" className="btn btn-primary">
              ¡Conoce más!
            </a>
          </div>
        </div>
      </div>
      <div className="col-x1-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div className="card mx-auto h-100">
          <img
            src="https://cdn.bmwblog.com/wp-content/uploads/2019/12/Rolls-Royce-Phantom-RED-1.jpg"
            className="card-img-top"
            alt="Imagen 2 del card"
          />
          <div className="card-body">
            <h5 className="card-title">Rolls-Royce</h5>
            <p className="card-text">
              ¡Eleva tu experiencia de conducción a nuevas alturas con el último
              modelo de Rolls-Royce! Experimenta el lujo incomparable, la
              artesanía meticulosa y el rendimiento excepcional que solo
              Rolls-Royce puede ofrecer.{" "}
            </p>
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/showroom/cullinan.html"
              className="btn btn-primary"
            >
              ¡Conoce más!
            </a>
          </div>
        </div>
      </div>
      <div className="col-x1-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div className="card mx-auto h-100">
          <img
            src="https://coophoreb.com/wp-content/uploads/2021/07/COOPHOREB1.jpg"
            className="card-img-top"
            alt="Imagen 3 del card"
          />
          <div className="card-body">
            <h5 className="card-title">¡Asegura tu vehículo aquí!</h5>
            <p className="card-text">
              ¡Protege tu inversión y mantén tu tranquilidad asegurando tu
              vehículo hoy mismo! Con nuestra amplia gama de opciones de seguro,
              puedes estar seguro de que tu auto estará cubierto en caso de
              accidentes, robo o daños.
            </p>
            <a
              href="https://coophoreb.com/asegura-tu-vehiculo/"
              className="btn btn-primary"
            >
              ¡Conoce más!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAlterContent;
