document.addEventListener('DOMContentLoaded', function() {
    function filtrarVehiculos() {
        var filtro = document.getElementById('filtro-vehiculo').value;
        var vehiculos = document.querySelectorAll('.vehiculo-item');

        vehiculos.forEach(function(vehiculo) {
            if (filtro === 'todos' || vehiculo.classList.contains(filtro)) {
                vehiculo.style.display = 'block';
            } else {
                vehiculo.style.display = 'none';
            }
        });
    }
 
    filtrarVehiculos();
});
document.addEventListener("DOMContentLoaded", function() {
    const filtroVehiculo = document.getElementById("filtro-vehiculo");
    const filtroYear = document.getElementById("filtro-year");
    const vehiculoItems = document.querySelectorAll(".vehiculo-item");
    const vehiculoLista = document.querySelector(".vehiculo-lista");
    const mensajeSinResultados = document.getElementById("sin-resultados");

    function filtrarVehiculos() {
        const marcaSeleccionada = filtroVehiculo.value;
        const yearSeleccionado = filtroYear.value;

        let hayResultados = false;

        vehiculoItems.forEach(item => {
            const coincideMarca = marcaSeleccionada === "todos" || item.classList.contains(marcaSeleccionada);
            const coincideYear = yearSeleccionado === "todos" || item.getAttribute("data-year") === yearSeleccionado;

            if (coincideMarca && coincideYear) {
                item.parentElement.style.display = "block";
                hayResultados = true;
            } else {
                item.parentElement.style.display = "none";
            }
        });

        if (hayResultados) {
            mensajeSinResultados.style.display = "none";
        } else {
            mensajeSinResultados.style.display = "block";
        }
    }

    filtroVehiculo.addEventListener("change", filtrarVehiculos);
    filtroYear.addEventListener("change", filtrarVehiculos);

    filtrarVehiculos();
});



document.addEventListener("DOMContentLoaded", function() {
    const filtroVehiculo = document.getElementById("filtro-vehiculo");
    const filtroYear = document.getElementById("filtro-year");
    const filtroKilometraje = document.getElementById("filtro-kilometraje");
    const filtroPrecio = document.getElementById("filtro-precio");
    const filtroCombustible = document.querySelectorAll("#filtro-combustible input[type='checkbox']");
    const vehiculoItems = document.querySelectorAll(".vehiculo-item");
    const vehiculoLista = document.querySelector(".vehiculo-lista");
    const mensajeSinResultados = document.getElementById("sin-resultados");

    function filtrarVehiculos() {
        const marcaSeleccionada = filtroVehiculo.value;
        const yearSeleccionado = filtroYear.value;
        const kmSeleccionado = filtroKilometraje.value;
        const precioSeleccionado = filtroPrecio.value;

        let combustiblesSeleccionados = [];
        filtroCombustible.forEach(cb => {
            if (cb.checked) {
                combustiblesSeleccionados.push(cb.value);
            }
        });

        let hayResultados = false;

        vehiculoItems.forEach(item => {
            const coincideMarca = marcaSeleccionada === "todos" || item.classList.contains(marcaSeleccionada);
            const coincideYear = yearSeleccionado === "todos" || item.getAttribute("data-year") === yearSeleccionado;

            let coincideKm = false;
            const kmVehiculo = parseInt(item.getAttribute("data-km"));

            switch (kmSeleccionado) {
                case "0-10000":
                    coincideKm = kmVehiculo >= 0 && kmVehiculo <= 10000;
                    break;
                case "10000-30000":
                    coincideKm = kmVehiculo > 10000 && kmVehiculo <= 30000;
                    break;
                case "30000-50000":
                    coincideKm = kmVehiculo > 30000 && kmVehiculo <= 50000;
                    break;
                case "50000-80000":
                    coincideKm = kmVehiculo > 50000 && kmVehiculo <= 80000;
                    break;
                case "80000-110000":
                    coincideKm = kmVehiculo > 80000 && kmVehiculo <= 110000;
                    break;
                case "todos":
                    coincideKm = true;
                    break;
                default:
                    coincideKm = false;
                    break;
            }

            let coincidePrecio = false;
            const precioVehiculo = parseInt(item.getAttribute("data-precio"));

            switch (precioSeleccionado) {
                case "0-8000000":
                    coincidePrecio = precioVehiculo >= 0 && precioVehiculo <= 8000000;
                    break;
                case "8000000-16000000":
                    coincidePrecio = precioVehiculo > 8000000 && precioVehiculo <= 16000000;
                    break;
                case "16000000-25000000":
                    coincidePrecio = precioVehiculo > 16000000 && precioVehiculo <= 25000000;
                    break;
                case "25000000-34000000":
                    coincidePrecio = precioVehiculo > 25000000 && precioVehiculo <= 34000000;
                    break;
                case "todos":
                    coincidePrecio = true;
                    break;
                default:
                    coincidePrecio = false;
                    break;
            }

            let coincideCombustible = false;
            const combustibleVehiculo = item.querySelector(".fa-gas-pump").classList;

            if (combustiblesSeleccionados.length === 0) {
                coincideCombustible = true; 
            } else {
                combustiblesSeleccionados.forEach(combustible => {
                    switch (combustible) {
                        case "gasolina":
                            if (combustibleVehiculo.contains("bi-gas-pump")) coincideCombustible = true;
                            break;
                        case "diesel":
                            if (combustibleVehiculo.contains("bi-diesel")) coincideCombustible = true;
                            break;
                        case "hibrido":
                            if (combustibleVehiculo.contains("fa-hybrid")) coincideCombustible = true;
                            break;
                        case "electrico":
                            if (combustibleVehiculo.contains("fa-electric")) coincideCombustible = true;
                            break;
                        default:
                            break;
                    }
                });
            }

            if (coincideMarca && coincideYear && coincideKm && coincidePrecio && coincideCombustible) {
                item.parentElement.style.display = "block";
                hayResultados = true;
            } else {
                item.parentElement.style.display = "none";
            }
        });

        if (!hayResultados) {
            mensajeSinResultados.style.display = "block";
        } else {
            mensajeSinResultados.style.display = "none";
        }
    }

    filtroVehiculo.addEventListener("change", filtrarVehiculos);
    filtroYear.addEventListener("change", filtrarVehiculos);
    filtroKilometraje.addEventListener("change", filtrarVehiculos);
    filtroPrecio.addEventListener("change", filtrarVehiculos);
    filtroCombustible.forEach(cb => {
        cb.addEventListener("change", filtrarVehiculos);
    });

    filtrarVehiculos();
});

$(document).ready(function() {
    $('#compramos-autos').click(function(e) {
        e.preventDefault();
        $('#carouselExampleCaptions').hide();
        $('.row.mt-4.p-3').hide();
        $('#formulario-compra').show();
        $('#texto-compramos-autos').show();
    });

    function mostrarFormularioVehiculo() {
        $('#formulario-compra').hide();
        $('#texto-compramos-autos').hide();
        $('#formulario-vehiculo').show();
        $('#texto-detalles-autos').show();
        
    }


    function volverAFormularioCompra() {
        $('#formulario-vehiculo').hide();
        $('#formulario-compra').show();
        $('#texto-compramos-autos').show();
    }

    window.continuarFormulario = function() {

        mostrarFormularioVehiculo();
    };

    window.volverAtras = function() {
        volverAFormularioCompra();
    };
});