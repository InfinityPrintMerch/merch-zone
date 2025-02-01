function actualizarContador() {
            const fechaLimite = new Date('February 15, 2025 00:00:00').getTime();
            const ahora = new Date().getTime();
            const diferencia = fechaLimite - ahora;

            if (diferencia > 0) {
                const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
                document.getElementById('contador').innerText = `${dias}d ${horas}h ${minutos}m`;
            } else {
                document.getElementById('contador').innerText = "¡Oferta finalizada!";
            }
        }
        setInterval(actualizarContador, 1000);
        actualizarContador();
