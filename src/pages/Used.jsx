import UsedCarsContainers from "../components/UsedCarsContainer";
import UsedFilter from "../components/UsedFilter";
import "../styles/used.css";

const Used = () => {
  return (
    <div className="used-container">
      <UsedFilter />
      <UsedCarsContainers />
    </div>
  );
};

export default Used;
