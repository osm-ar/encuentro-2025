// Encuentro OSM Argentina 2025 - JavaScript principal

document.addEventListener('DOMContentLoaded', function() {
    console.log('Encuentro OSM Argentina 2025 - Sitio web cargado');
    
    // Mobile menu toggle (mejorado)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const siteHeader = document.querySelector('.site-header');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Toggle active states
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            siteHeader.classList.toggle('menu-open');
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('menu-open', navMenu.classList.contains('active'));
        });
        
        // Close menu when clicking on links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
            }
        });
    }
    
    // Inicializar mapa si existe el elemento
    if (document.getElementById('mapa-encuentro')) {
        initEncuentroMap();
    }
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para inicializar el mapa del encuentro
function initEncuentroMap() {
    // Coordenadas Universidad Nacional de Luján
    const lat = -34.578776;
    const lng = -59.086683;
    
    // Crear mapa
    const map = L.map('mapa-encuentro').setView([lat, lng], 15);
    
    // Agregar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Marker para la universidad
    const universidadMarker = L.marker([lat, lng]).addTo(map);
    
    // Popup con información
    universidadMarker.bindPopup(`
        <div style="text-align: center;">
            <h3>Universidad Nacional de Luján</h3>
            <p><strong>Encuentro OSM Argentina 2025</strong></p>
            <p>27 de septiembre de 2025<br>
            Ruta 5 y Avenida Constitución</p>
            <p><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}&zoom=16" target="_blank">Ver en OSM</a></p>
        </div>
    `);
    
    // Agregar algunos puntos de interés cercanos si los hay
    addPointsOfInterest(map);
}

// Función para agregar puntos de interés
function addPointsOfInterest(map) {
    // Estos son puntos de ejemplo - se pueden actualizar con datos reales
    const pointsOfInterest = [
        {
            name: "Estación de tren Luján",
            lat: -34.5699,
            lng: -59.1154,
            description: "Llegada desde CABA"
        },
        {
            name: "Basílica de Luján",
            lat: -34.5697,
            lng: -59.1157,
            description: "Punto de referencia histórico"
        }
    ];
    
    pointsOfInterest.forEach(poi => {
        const poiIcon = L.divIcon({
            html: '<div style="background-color: #F4C430; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [16, 16],
            className: 'poi-marker'
        });
        
        L.marker([poi.lat, poi.lng], { icon: poiIcon })
            .addTo(map)
            .bindPopup(`<strong>${poi.name}</strong><br>${poi.description}`);
    });
}

// Función para widget de MapRoulette (a implementar)
function initMapRouletteWidget() {
    // Placeholder para integración futura con MapRoulette
    console.log('MapRoulette widget - placeholder');
    
    // Aquí se puede agregar la integración con la API de MapRoulette
    // para mostrar estadísticas del Challenge 53133 en tiempo real
}

// Utilidad para formatear fechas
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString('es-AR', options);
}

// Función para countdown hacia el evento (opcional)
function initEventCountdown() {
    const eventDate = new Date('2025-09-27T09:00:00-03:00');
    const countdownElement = document.getElementById('countdown');
    
    if (!countdownElement) return;
    
    function updateCountdown() {
        const now = new Date();
        const timeDiff = eventDate - now;
        
        if (timeDiff <= 0) {
            countdownElement.innerHTML = '¡El encuentro está en curso!';
            return;
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">días</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">horas</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">minutos</span>
            </div>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Actualizar cada minuto
}