// Datos simulados de gestores (empresas)
const gestores = [
    {
        "id": 1,
        "nombre": "Reciclajes Santiago Ltda.",
        "empresa_tipo": {
            "id": 1,
            "nombre": "Reciclador de Base",
            "codigo": "R",
            "icono": {
                "FontAwesome": "fa-recycle"
            },
            "color": {
                "Tailwind": "bg-green-100",
                "css": "rgb(220 252 231)"
            }
        },
        "activo": true
    },
    {
        "id": 2,
        "nombre": "Consultora financiera Ltda.",
        "empresa_tipo": {
            "id": 2,
            "nombre": "Valorizador",
            "codigo": "V",
            "icono": {
                "FontAwesome": "fa-industry"
            },
            "color": {
                "Tailwind": "bg-blue-100",
                "css": "#eff6ff"
            }
        },
        "activo": true
    },
    {
        "id": 3,
        "nombre": "Consultores Asociados S.A.",
        "empresa_tipo": {
            "id": 3,
            "nombre": "Consultor",
            "codigo": "C",
            "icono": {
                "FontAwesome": "fa-user-tie"
            },
            "color": {
                "Tailwind": "bg-gray-100",
                "css": "#f3f4f6"
            },
            "activo": true
        }
    },
    {
        "id": 4,
        "nombre": "Transporte Express Ltda.",
        "empresa_tipo": {
            "id": 4,
            "nombre": "Transportista",
            "codigo": "T",
            "icono": {
                "FontAwesome": "fa-truck"
            },
            "color": {
                "Tailwind": "bg-yellow-100",
                "css": "rgb(254 249 195)"
            },
            "activo": true
        }
    },
    {
        "id": 5,
        "nombre": "Gestor Integral Chile S.A.",
        "empresa_tipo": {
            "id": 5,
            "nombre": "Gestor Integral",
            "codigo": "G",
            "icono": {
                "FontAwesome": "fa-globe-americas"
            },
            "color": {
                "Tailwind": "bg-purple-100",
                "css": "rgb(243, 232, 255)"
            },
            "activo": true
        }
    }
];

// Datos simulados de tipo de empresa y sus cararterísticas
const empresaTipo = [
    {
        "id": 1,
        "nombre": "Reciclador de Base",
        "codigo": "R",
        "icono": {
            "FontAwesome": "fa-recycle"
        },
        "color": {
            "Tailwind": "bg-green-100",
            "css": "rgb(220 252 231)"
        },
        "activo": true
    },
    {
        "id": 2,
        "nombre": "Valorizador",
        "codigo": "V",
        "icono": {
            "FontAwesome": "fa-industry"
        },
        "color": {
            "Tailwind": "bg-blue-100",
            "css": "#eff6ff"
        },
        "activo": true
    },
    {
        "id": 3,
        "nombre": "Consultor",
        "codigo": "C",
        "icono": {
            "FontAwesome": "fa-user-tie"
        },
        "color": {
            "Tailwind": "bg-gray-100",
            "css": "#f3f4f6"
        },
        "activo": true
    },
    {
        "id": 4,
        "nombre": "Transportista",
        "codigo": "T",
        "icono": {
            "FontAwesome": "fa-truck"
        },
        "color": {
            "Tailwind": "bg-yellow-100",
            "css": "rgb(254 249 195)"
        },
        "activo": true
    },
    {
        "id": 5,
        "nombre": "Gestor Integral",
        "codigo": "G",
        "icono": {
            "FontAwesome": "fa-globe-americas"
        },
        "color": {
            "Tailwind": "bg-purple-100",
            "css": "rgb(243, 232, 255)"
        },
        "activo": true
    }
];

//para datos gestors desde app.js
renderizarGestores(gestores);

function renderizarGestores(lista) {
    //console.log("entre a renderizarGestores()");
    const contenedor = document.getElementById("listaGestores");
    contenedor.innerHTML = "";
    lista.forEach(gestor => {
        const col = document.createElement("div");
        col.className = "col-md-4";
        const card = CardEmpresa(gestor);
        col.appendChild(card);
        contenedor.appendChild(col);
    });
}


//para datos desde el backend de mi api 
// cargarDatosDesdeApi();
// async function cargarDatosDesdeApi() {
//     const url = "http://localhost/proyecto/backend/api/v1/gestores.php"; // VERIFICAR LA URL
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log("Datos desde backend:", data);
//         renderizarGestores(data);
//     } catch (error) {
//         console.error("Error cargando datos:", error);
//         document.getElementById("mensaje").textContent = "Error cargando datos.";
//     }
// }


// cargarGestores();

// function cargarGestores() {
//     console.log("EJECUTANDO cargarGestores()");
//     const seccion = document.getElementById("listaGestores");
//     seccion.innerHTML = "";
//     gestores.forEach(gestor => {
//         // crear columna bootstrap
//         const col = document.createElement("div");
//         col.classList.add("col-md-4", "mb-4");
//         // crear card con componente
//         const card = CardEmpresa(gestor);
//         col.appendChild(card);
//         seccion.appendChild(col);
//     });
// }

function BadgeTipo(tipo) {
    const badge = document.createElement("span");
    badge.className = "badge-tipo";
    badge.style.backgroundColor = tipo.color.css;
    // Accesibilidad
    badge.setAttribute("role", "status");
    badge.setAttribute(
        "aria-label",
        `Tipo de empresa: ${tipo.nombre}`
    );
    // Ícono dinámico
    const icon = document.createElement("i");
    icon.className = `fa ${tipo.icono.FontAwesome} me-1`;
    icon.setAttribute("role", "img");
    icon.setAttribute(
        "aria-label",
        `Ícono ${tipo.nombre}`
    );
    // Texto visible
    const texto = document.createElement("span");
    texto.textContent = tipo.nombre;
    badge.appendChild(icon);
    badge.appendChild(texto);
    return badge;
}

function CardEmpresa(gestor) {
    const card = document.createElement("article");
    card.className = "card-gestor";
    card.setAttribute("tabindex", "0");
    card.setAttribute(
        "aria-label",
        `Empresa gestora ${gestor.nombre}`
    );
    const header = document.createElement("header");
    const titulo = document.createElement("h3");
    titulo.textContent = gestor.nombre;
    header.appendChild(titulo);
    const badge = BadgeTipo(gestor.empresa_tipo);
    card.appendChild(header);
    card.appendChild(badge);
    return card;
}