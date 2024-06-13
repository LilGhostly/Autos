import { useEffect, useState } from "react";
import "../styles/used.css";
import useCarsStore from "../store/carsStore";
import { getBrands } from "../scripts/usedCars";

const UsedFilter = () => {
  const { usedCars, updateUsedCars, getFilterBrand, getUsedCars } =
    useCarsStore();
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    if (brand === "todas") {
      getUsedCars();
    } else {
      const data = { brand: brand };
      //console.log(brand);
      getFilterBrand(data);
    }
  };

  useEffect(() => {
    const getB = async () => {
      const brands = await getBrands();
      setBrands(brands);
      //console.log(brands);
    };
    getB();
  }, []);

  useEffect(() => {
    const results = usedCars.filter((car) => car.marca === selectedBrand);
    //console.log(usedCars);
    updateUsedCars(results);
  }, [selectedBrand]);
  return (
    <div className="filter-container">
      <h4>Filtro de Autos</h4>
      <form>
        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <select
            className="form-control"
            id="marca"
            onChange={handleBrandChange}
          >
            <option value="todas">Todas</option>
            {brands.map((brand) => (
              <option value={brand.marca} key={brand.marca}>
                {brand.marca}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="año-desde">Año Desde</label>
          <select className="form-control" id="año-desde">
            <option>Desde</option>
            {/* Opciones dinámicas */}
          </select>
          <label htmlFor="año-hasta">Año Hasta</label>
          <select className="form-control" id="año-hasta">
            <option>Hasta</option>
            {/* Opciones dinámicas */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="kilometraje">Kilometraje</label>
          <select className="form-control" id="kilometraje">
            <option>Seleccione rango</option>
            {/* Opciones dinámicas */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <select className="form-control" id="precio">
            <option>Seleccione rango</option>
            {/* Opciones dinámicas */}
          </select>
        </div>

        <div className="form-group">
          <label>Transmisión</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="transmision-automatica"
            />
            <label
              className="form-check-label"
              htmlFor="transmision-automatica"
            >
              Automática
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="transmision-mecanica"
            />
            <label className="form-check-label" htmlFor="transmision-mecanica">
              Mecánica
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Combustible</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="combustible-gasolina"
            />
            <label className="form-check-label" htmlFor="combustible-gasolina">
              Gasolina
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="combustible-diesel"
            />
            <label className="form-check-label" htmlFor="combustible-diesel">
              Diesel
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="combustible-hibrido"
            />
            <label className="form-check-label" htmlFor="combustible-hibrido">
              Híbrido
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="combustible-electrico"
            />
            <label className="form-check-label" htmlFor="combustible-electrico">
              Eléctrico
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default UsedFilter;
