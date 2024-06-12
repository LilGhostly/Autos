import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCarsStore from "../store/carsStore";

const CarDetails = () => {
  const { id } = useParams();
  const { usedCars } = useCarsStore();
  const [car, setCar] = useState({});

  useEffect(() => {
    const selectedCar = usedCars.find((car) => car.id === parseInt(id));
    setCar(selectedCar);
  }, []);

  return (
    <div>
      <p>{car.marca}</p>
    </div>
  );
};

export default CarDetails;
