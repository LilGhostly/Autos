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
        // Ocultar mensajes de error al mostrar el primer formulario
        $('.invalid-feedback').hide();
    });

    function mostrarFormularioVehiculo() {
        // Validar campos antes de continuar
        var rut = $('#rut').val().trim();
        var nombre = $('#nombre').val().trim();
        var email = $('#email').val().trim();
        var telefono = $('#telefono').val().trim();

        // Ocultar todos los mensajes de error previamente mostrados
        $('.invalid-feedback').hide();

        // Validar Rut
        if (!validarRut(rut)) {
            $('#rut').next('.invalid-feedback').show();
            return;
        }

        if (nombre === '') {
            $('#nombre').next('.invalid-feedback').show();
            return;
        }
        if (email === '') {
            $('#email').next('.invalid-feedback').show();
            return;
        }
        if (telefono === '') {
            $('#telefono').next('.invalid-feedback').show();
            return;
        }
        if (telefono.length !== 8) {
            $('#telefono').next('.invalid-feedback').show();
            return;
        }

        // Si todos los campos están llenos, continuar
        $('#formulario-compra').hide();
        $('#texto-compramos-autos').hide();
        $('#formulario-detalle').show();
        $('#texto-detalles-autos').show();
    }

    function volverAFormularioCompra() {
        $('#formulario-detalle').hide();
        $('#formulario-compra').show();
        $('#texto-compramos-autos').show();
        $('#texto-detalles-autos').hide();
        // Ocultar mensajes de error al volver al primer formulario
        $('.invalid-feedback').hide();
    }

    // Función para validar el Rut
    function validarRut(rut) {
        // Validar formato "11.111.111-1"
        return /^(\d{2})\.(\d{3})\.(\d{3})-(\d{1})$/.test(rut);
    }

    // Función para validar el formato de la patente XX-XX-XX o xx-xx-xx
    function validarPatente(patente) {
        return /^[a-zA-Z\d]{2}-[a-zA-Z\d]{2}-[a-zA-Z\d]{2}$/.test(patente);
    }

    // Función para continuar el formulario
    window.continuarFormulario = function() {
        mostrarFormularioVehiculo();
    };

    // Función para volver atrás
    window.volverAtras = function() {
        volverAFormularioCompra();
    };

    // Función para finalizar el formulario de detalles del auto
    window.finalizarFormulario = function() {
        var patente = $('#patente').val().trim();
        var ano = $('#ano').val().trim();
        var marca = $('#marca').val().trim();
        var modelo = $('#modelo').val().trim();
        var kilometraje = $('#kilometraje').val().trim();
        var mensaje = $('#mensaje').val().trim();
        var termsChecked = $('#terms-checkbox').prop('checked');

        // Ocultar todos los mensajes de error previamente mostrados
        $('.invalid-feedback').hide();

        // Validar campos antes de finalizar
        var validacionCorrecta = true;

        if (patente === '' || !validarPatente(patente)) {
            $('#patente').next('.invalid-feedback').show();
            validacionCorrecta = false;
        }

        // Validar año
        if (ano === '') {
            $('#ano').next('.invalid-feedback').show();
            validacionCorrecta = false;
        } else if (!(/^\d{4}$/.test(ano))) {
            // Asegurar que el año tenga 4 dígitos numéricos
            $('#ano').next('.invalid-feedback').text('El año debe ser un número de 4 dígitos.').show();
            validacionCorrecta = false;
        }

        if (marca === '') {
            $('#marca').next('.invalid-feedback').show();
            validacionCorrecta = false;
        }

        if (modelo === '') {
            $('#modelo').next('.invalid-feedback').show();
            validacionCorrecta = false;
        }

        if (kilometraje === '') {
            $('#kilometraje').next('.invalid-feedback').show();
            validacionCorrecta = false;
        } else if (parseInt(kilometraje) > 120000) {
            $('#kilometraje').next('.invalid-feedback').text('Excede el límite de 120.000 km.').show();
            validacionCorrecta = false;
        }

        if (mensaje.length > 0 && mensaje.length < 10) {
            $('#mensaje').next('.invalid-feedback').show();
            validacionCorrecta = false;
        }

        if (!termsChecked) {
            $('#terms-form .invalid-feedback').show(); // Mostrar mensaje de error de términos y condiciones
            validacionCorrecta = false;
        }

        // Si todos los campos están llenos, finalizar formulario
        if (validacionCorrecta) {
            alert('Formulario enviado correctamente, en breve recibirás un correo electrónico mostrando los detalles. Serás redirigido a la página principal.');
            // Redirigir a la página principal
            window.location.href = 'index.html';
        }
    };
});