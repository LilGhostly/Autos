import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCarsStore from "../store/carsStore";
import "../styles/used.css";

const CarDetails = () => {
  const { id } = useParams();
  const { usedCars } = useCarsStore();
  const [car, setCar] = useState({});

  useEffect(() => {
    const selectedCar = usedCars.find((car) => car.id === parseInt(id));
    setCar(selectedCar);
  }, [id, usedCars]);


  return (
    <div className="car-details">
      <img src={car.imagen} alt={car.marca} />
      <div className="details">
        <p className="marca">{car.marca}</p>
        <p>Modelo: {car.modelo}</p>
        <p>Versión: {car.version}</p>
        <p>Año: {car.anio}</p>
        <p>Kilometraje: {car.kilometraje}</p>
        <p>Tipo de Combustible: {car.tipo_combustible}</p>
        <p>Caja: {car.caja}</p>
        <p>Precio: {car.precio}</p>
      </div>
    </div>
  );
};

export default CarDetails;


