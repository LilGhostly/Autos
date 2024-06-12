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
  return (
    <div className="card-container">
      {usedCars.map((car) => (
        <div className="card" key={car.id}>
          <div>
            <img src="" alt="imagen" />
          </div>
          <div>
            <h3>{car.marca}</h3>
            <p>{car.modelo}</p>
            <p>{car.precio}</p>
            <div className="card-section">
              <p>{car.anio}</p>
              <p>{car.kilometraje}</p>
              <p>{car.caja}</p>
              <p>{car.combustible}</p>
            </div>
          </div>
          <div>
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
