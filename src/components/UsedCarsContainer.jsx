import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCarsStore from "../store/carsStore";
import "../styles/used.css";

const UsedCarsContainers = () => {
  const [autos, setAutos] = useState([]);
  const { usedCars, isLoading, error, getUsedCars } = useCarsStore();
  const navigate = useNavigate();

  useEffect(() => {
    getUsedCars();
    //console.log(usedCars);
  }, []);

  const handleCarDetails = (id) => {
    navigate(`/usados/auto/${id}`);
  };

  function formatCurrency(number) {
    return `$${number.toLocaleString("es-CL")}`;
  }

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card-container">
      {usedCars.map((car) => (
        <div className="card-card" key={car.id}>
          <div className="image-container">
            <img src={car.imagen} alt={`${car.marca} ${car.modelo}`} />
          </div>
          <div className="card-section">
            <h3>{car.marca.toUpperCase()}</h3>
            <p className="modelo">{car.modelo.toUpperCase()}</p>
            <p className="precio">{formatCurrency(car.precio)}</p>
            <div className="card-sub">
              <p>{car.anio}</p>
              <p>{`${car.kilometraje} kms.`}</p>
              <p>{car.caja}</p>
              <p>{car.combustible}</p>
            </div>
          </div>
          <div className="button-container">
            <button onClick={() => handleCarDetails(car.id)}>
              Ver este auto
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsedCarsContainers;
