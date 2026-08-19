/* ==========================================
   TRAVELSMART
   RECOMENDADOR INTELIGENTE
========================================== */


const formulario =

    document.getElementById("travelForm");


const resultado =

    document.getElementById("resultado");



/* ==========================================
   FORMULARIO
========================================== */


formulario.addEventListener(

    "submit",

    function(event) {


        event.preventDefault();



        /* ================================
           DATOS
        ================================= */


        const nombre =

            document

                .getElementById("nombre")

                .value

                .trim();


        const presupuesto =

            Number(

                document

                    .getElementById("presupuesto")

                    .value

            );


        const personas =

            Number(

                document

                    .getElementById("personas")

                    .value

            );


        const tiempo =

            Number(

                document

                    .getElementById("tiempo")

                    .value

            );


        const dias =

            Number(

                document

                    .getElementById("dias")

                    .value

            );


        const turismo =

            document

                .getElementById("turismo")

                .value;



        /* ================================
           VALIDACIÓN
        ================================= */


        if (

            nombre === "" ||

            presupuesto <= 0 ||

            personas <= 0 ||

            tiempo <= 0 ||

            dias <= 0 ||

            turismo === ""

        ) {


            resultado.innerHTML = `

                <h3>

                    ⚠️ Datos incompletos

                </h3>


                <p>

                    Por favor completa todos

                    los campos correctamente.

                </p>

            `;


            return;

        }



        /* ================================
           DESTINO SEGÚN PRESUPUESTO
        ================================= */


        let destino;


        if (presupuesto <= 3000) {


            destino =

                "Destino local";


        }

        else if (presupuesto <= 8000) {


            destino =

                "Pueblo Mágico o destino regional";


        }

        else {


            destino =

                "Destino internacional";

        }



        /* ================================
           TRANSPORTE
        ================================= */


        let transporte;


        if (tiempo <= 2) {


            transporte =

                "Avión";


        }

        else if (tiempo <= 4) {


            transporte =

                "Autobús o avión económico";


        }

        else {


            transporte =

                "Autobús";

        }



        /* ================================
           VARIABLES DE TURISMO
        ================================= */


        let tipoTurismo;

        let lugares;

        let imagenPrincipal;



        /* ================================
           PLAYA
        ================================= */


        if (turismo === "playa") {


            tipoTurismo = "Playa";


            lugares = [

                "Cancún, Quintana Roo",

                "Puerto Escondido, Oaxaca",

                "Mazatlán, Sinaloa"

            ];


            imagenPrincipal =

                "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85";

        }



        /* ================================
           AVENTURA
        ================================= */


        else if (turismo === "aventura") {


            tipoTurismo = "Aventura";


            lugares = [

                "Barrancas del Cobre, Chihuahua",

                "Huasteca Potosina, San Luis Potosí",

                "Peña de Bernal, Querétaro"

            ];


            imagenPrincipal =

                "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85";

        }



        /* ================================
           RELIGIÓN
        ================================= */


        else if (turismo === "religion") {


            tipoTurismo = "Religión";


            lugares = [

                "Basílica de Guadalupe, Ciudad de México",

                "San Juan de los Lagos, Jalisco",

                "Cristo Rey, Guanajuato"

            ];


            imagenPrincipal =

                "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1200&q=85";

        }



        /* ================================
           NEGOCIOS
        ================================= */


        else if (turismo === "negocios") {


            tipoTurismo = "Negocios";


            lugares = [

                "Ciudad de México",

                "Monterrey, Nuevo León",

                "Guadalajara, Jalisco"

            ];


            imagenPrincipal =

                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85";

        }



        /* ================================
           RELAJACIÓN
        ================================= */


        else {


            tipoTurismo = "Relajación";


            lugares = [

                "Tepoztlán, Morelos",

                "Valle de Bravo, Estado de México",

                "Bacalar, Quintana Roo"

            ];


            imagenPrincipal =

                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85";

        }



        /* ================================
           CREAR LISTA
        ================================= */


        let listaLugares = "";


        lugares.forEach(

            function(lugar) {


                listaLugares += `

                    <li>

                        📍 ${lugar}

                    </li>

                `;

            }

        );



        /* ================================
           MOSTRAR RESULTADO
        ================================= */


        resultado.innerHTML = `


            <span class="eyebrow">

                ✨ RECOMENDACIÓN PERSONALIZADA

            </span>


            <h3>

                ¡Hola, ${nombre}! 🌎

            </h3>


            <p>

                Hemos analizado tus preferencias

                y encontramos una experiencia

                que puede adaptarse a tu viaje.

            </p>



            <img

                class="result-image"

                src="${imagenPrincipal}"

                alt="${tipoTurismo}"

            >



            <ul>


                <li>

                    👥

                    <strong>

                        Número de viajeros:

                    </strong>

                    ${personas}

                </li>


                <li>

                    📅

                    <strong>

                        Duración:

                    </strong>

                    ${dias} días

                </li>


                <li>

                    💰

                    <strong>

                        Presupuesto:

                    </strong>

                    $${presupuesto.toLocaleString(
                        "es-MX"
                    )} MXN

                </li>


                <li>

                    🎯

                    <strong>

                        Tipo de turismo:

                    </strong>

                    ${tipoTurismo}

                </li>


                <li>

                    🧭

                    <strong>

                        Destino recomendado:

                    </strong>

                    ${destino}

                </li>


                <li>

                    ✈️

                    <strong>

                        Transporte:

                    </strong>

                    ${transporte}

                </li>


            </ul>



            <br>


            <h3>

                📍 Lugares sugeridos

            </h3>


            <ul>

                ${listaLugares}

            </ul>


            <p style="margin-top:25px;">

                ✨

                ¡Tu próxima aventura comienza

                con TravelSmart!

            </p>


        `;



        /* ================================
           DESPLAZAMIENTO
        ================================= */


        resultado.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });


    }

);
