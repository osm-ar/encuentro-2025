// Encuentro OSM Argentina 2025 - JavaScript principal

document.addEventListener('DOMContentLoaded', function() {
    console.log('Encuentro OSM Argentina 2025 - Sitio web cargado');
    
    // Initialize performance optimizations
    initLazyLoading();
    initImageOptimization();
    
    // Mobile menu toggle (mejorado)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const siteHeader = document.querySelector('.site-header');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active states
            const isOpen = navMenu.classList.contains('active');
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            siteHeader.classList.toggle('menu-open');
            
            // Update ARIA attributes for accessibility
            navToggle.setAttribute('aria-expanded', !isOpen);
            navMenu.setAttribute('aria-hidden', isOpen);
            
            // Prevent body scroll when menu is open
            document.body.classList.toggle('menu-open', !isOpen);
            
            // Focus management for accessibility
            if (!isOpen) {
                navMenu.querySelector('a').focus();
            }
        });
        
        // Close menu when clicking on links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
                
                // Update ARIA attributes
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            });
        });
        
        // Handle keyboard navigation
        navToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navToggle.click();
            }
        });
        
        // Handle escape key to close menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                siteHeader.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
                navToggle.focus();
            }
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
    
    // Inicializar countdown si existe el elemento
    if (document.getElementById('countdown-timer')) {
        initEventCountdown();
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
    const mapElement = document.getElementById('mapa-encuentro');
    
    // Verificar si el mapa ya fue inicializado
    if (mapElement._leaflet_id) {
        return;
    }
    
    // Coordenadas Universidad Nacional de Luján
    const lat = -34.578776;
    const lng = -59.086683;
    
    // Crear mapa con zoom más alto para ver detalles
    const map = L.map('mapa-encuentro').setView([lat, lng], 18);
    
    // Agregar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Marcador principal del evento con logo OSM-AR
    const baseUrl = window.siteConfig ? window.siteConfig.baseUrl : '';
    const mainIcon = L.divIcon({
        className: 'main-event-marker',
        html: `<div style="background: white; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; border: 2px solid #2E5C8A; box-shadow: 0 2px 4px rgba(0,0,0,0.3); padding: 2px;"><img src="${baseUrl}/assets/img/osm-ar-logo.png" alt="OSM AR" style="width: 18px; height: 18px; border-radius: 50%;"></div>`,
        iconSize: [25, 25],
        iconAnchor: [12, 12]
    });
    
    L.marker([lat, lng], {
        icon: mainIcon,
        zIndexOffset: 1000
    })
        .addTo(map)
        .bindPopup('<strong>Universidad Nacional de Luján</strong><br>Ruta 5 y Avenida Constitución, Luján, Buenos Aires<br><em>Encuentro OSM Argentina 2025</em>');
    
    // Aula Ruth Fernández de Monjardín de Masci (Segundo piso)
    const aulaRuthIcon = L.divIcon({
        className: 'aula-marker',
        html: '<div style="background: #F4C430; color: #2E5C8A; border-radius: 4px; padding: 2px 4px; font-size: 10px; font-weight: bold; border: 1px solid #2E5C8A; box-shadow: 0 1px 3px rgba(0,0,0,0.3);">2°</div>',
        iconSize: [20, 15],
        iconAnchor: [10, 7]
    });
    
    L.marker([-34.5788307, -59.0860618], {icon: aulaRuthIcon})
        .addTo(map)
        .bindPopup('<strong>Aula Ruth Fernández de Monjardín de Masci</strong><br>📍 Segundo piso<br><a href="https://www.openstreetmap.org/way/1430019042" target="_blank">Ver en OSM</a>');
    
    // Aula 703 (Planta baja)
    const aula703Icon = L.divIcon({
        className: 'aula-marker',
        html: '<div style="background: #75AADB; color: white; border-radius: 4px; padding: 2px 4px; font-size: 10px; font-weight: bold; border: 1px solid #2E5C8A; box-shadow: 0 1px 3px rgba(0,0,0,0.3);">PB</div>',
        iconSize: [20, 15],
        iconAnchor: [10, 7]
    });
    
    L.marker([-34.5787200, -59.0863521], {icon: aula703Icon})
        .addTo(map)
        .bindPopup('<strong>Aula 703</strong><br>📍 Planta baja<br><a href="https://www.openstreetmap.org/way/1309164008" target="_blank">Ver en OSM</a>');
    
    // Agregar puntos de interés directamente
    console.log('Adding points of interest directly...');
    
    // Lo de Rami - Restaurante recomendado
    const loDeRamiIcon = L.divIcon({
        html: '<div style="background: #FF6B6B; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 14px; font-weight: bold; color: white;">R</div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        className: 'poi-marker-restaurant'
    });
    
    L.marker([-34.5790866, -59.0878154], { icon: loDeRamiIcon })
        .addTo(map)
        .bindPopup(`
            <div style="text-align: left; max-width: 300px;">
                <strong>Lo de Rami</strong><br>
                <small style="color: #666;">🍽️ Restaurante local • Recomendado</small><br><br>
                <p style="margin: 8px 0; font-size: 13px; line-height: 1.3;">Opción gastronómica cercana al campus universitario. Ideal para el almuerzo durante el encuentro.</p>
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 8px; font-size: 12px;">
                    📍 <a href="https://www.openstreetmap.org/way/684683865" target="_blank" style="color: #2E5C8A;">Ver en OSM</a>
                </div>
            </div>
        `);
    
    // Estación de tren - coordenadas corregidas
    const trainIcon = L.divIcon({
        html: '<div style="background: #4ECDC4; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 12px; color: white;">🚂</div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        className: 'poi-marker-train'
    });
    
    L.marker([-34.57763, -59.10517], { icon: trainIcon })
        .addTo(map)
        .bindPopup(`
            <div style="text-align: left; max-width: 300px;">
                <strong>Estación Luján</strong><br>
                <small style="color: #666;">🚂 Línea Sarmiento • Desde 1864</small><br><br>
                <p style="margin: 8px 0; font-size: 13px; line-height: 1.3;">Conexión ferroviaria desde CABA vía Moreno. Histórico ramal hasta la Basílica funcionó 1899-1955.</p>
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 8px; font-size: 12px;">
                    📍 <a href="https://www.openstreetmap.org/node/4101038053" target="_blank" style="color: #2E5C8A;">Ver en OSM</a> •
                    ⏰ <a href="https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/areametropolitana/lineasarmiento/moreno-mercedes" target="_blank" style="color: #2E5C8A;">Horarios</a>
                </div>
            </div>
        `);
    
    // Basílica de Luján - coordenadas verificadas
    const basilicaIcon = L.divIcon({
        html: '<div style="background: #F4C430; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); font-size: 12px; color: white;">⛪</div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        className: 'poi-marker-basilica'
    });
    
    L.marker([-34.564049, -59.121326], { icon: basilicaIcon })
        .addTo(map)
        .bindPopup(`
            <div style="text-align: left; max-width: 300px;">
                <strong>Basílica Nacional de Nuestra Señora de Luján</strong><br>
                <small style="color: #666;">⛪ Patrona de Argentina • Inaugurada 1910</small><br><br>
                <p style="margin: 8px 0; font-size: 13px; line-height: 1.3;">Imponente templo neogótico de 104m de largo y torres de 106m. Recibe millones de peregrinos anuales desde 1630.</p>
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 8px; font-size: 12px;">
                    📍 <a href="https://www.openstreetmap.org/way/186577050" target="_blank" style="color: #2E5C8A;">Ver en OSM</a> •
                    🌐 <a href="https://santuariodelujan.org.ar/" target="_blank" style="color: #2E5C8A;">Santuario</a>
                </div>
            </div>
        `);
    
    console.log('All markers added successfully');
    
    // Agregar leyenda completa al mapa
    addCompleteMapLegend(map, baseUrl);
}

// Función para agregar puntos de interés
function addPointsOfInterest(map) {
    console.log('Adding points of interest to map...');
    
    try {
        // Lo de Rami - Restaurante
        const loDeRamiIcon = L.divIcon({
            html: '<div style="background-color: #FF6B6B; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
            className: 'poi-marker-restaurant'
        });
        
        L.marker([-34.5790866, -59.0878154], { icon: loDeRamiIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <strong>Lo de Rami</strong><br>
                    🍽️ Restaurante recomendado<br>
                    <a href="https://www.openstreetmap.org/way/684683865" target="_blank">Ver en OSM</a>
                </div>
            `);
        
        // Estación de tren
        const trainIcon = L.divIcon({
            html: '<div style="background-color: #4ECDC4; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
            className: 'poi-marker-train'
        });
        
        L.marker([-34.5699, -59.1154], { icon: trainIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <strong>Estación de tren Luján</strong><br>
                    🚂 Llegada desde CABA<br>
                    <a href="https://www.openstreetmap.org/?mlat=-34.5699&mlon=-59.1154&zoom=16" target="_blank">Ver en OSM</a>
                </div>
            `);
        
        // Basílica
        const basilicaIcon = L.divIcon({
            html: '<div style="background-color: #F4C430; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8],
            className: 'poi-marker-basilica'
        });
        
        L.marker([-34.5697, -59.1157], { icon: basilicaIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <strong>Basílica de Luján</strong><br>
                    ⛪ Punto histórico<br>
                    <a href="https://www.openstreetmap.org/?mlat=-34.5697&mlon=-59.1157&zoom=16" target="_blank">Ver en OSM</a>
                </div>
            `);
        
        console.log('Points of interest added successfully');
        
    } catch (error) {
        console.error('Error adding points of interest:', error);
    }
}

// Función para agregar leyenda completa al mapa
function addCompleteMapLegend(map, baseUrl) {
    // Crear control de leyenda
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'map-legend');
        
        // Estilos CSS inline para la leyenda completa
        div.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); padding: 10px; border-radius: 8px; border: 1px solid #ccc; font-size: 12px; line-height: 1.4; min-width: 180px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                <h4 style="margin: 0 0 8px 0; color: #2E5C8A; font-size: 13px; font-weight: bold;">📍 Ubicaciones</h4>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="background: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid #2E5C8A; margin-right: 8px; flex-shrink: 0;">
                        <img src="${baseUrl}/assets/img/osm-ar-logo.png" style="width: 12px; height: 12px; border-radius: 50%;">
                    </div>
                    <span>Encuentro OSM Argentina</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="background: #F4C430; color: #2E5C8A; border-radius: 3px; padding: 1px 3px; font-size: 9px; font-weight: bold; border: 1px solid #2E5C8A; margin-right: 8px; min-width: 20px; text-align: center; flex-shrink: 0;">2°</div>
                    <span>Aula Ruth F. Monjardín (2° piso)</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="background: #75AADB; color: white; border-radius: 3px; padding: 1px 3px; font-size: 9px; font-weight: bold; border: 1px solid #2E5C8A; margin-right: 8px; min-width: 20px; text-align: center; flex-shrink: 0;">PB</div>
                    <span>Aula 703 (Planta baja)</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px; flex-shrink: 0;">
                        <div style="background: #FF6B6B; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; font-weight: bold; color: white;">R</div>
                    </div>
                    <span>Lo de Rami (restaurante)</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px; flex-shrink: 0;">
                        <div style="background: #4ECDC4; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">🚂</div>
                    </div>
                    <span>Estación de tren</span>
                </div>
                <div style="display: flex; align-items: center; margin: 4px 0;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px; flex-shrink: 0;">
                        <div style="background: #F4C430; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">⛪</div>
                    </div>
                    <span>Basílica de Luján</span>
                </div>
                <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #eee; font-size: 10px; color: #666;">
                    💡 Haz clic en los marcadores para más info
                </div>
            </div>
        `;
        
        // Prevenir que los clics en la leyenda afecten el mapa
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        
        return div;
    };
    
    legend.addTo(map);
}

// Función para agregar leyenda al mapa (función original mantenida para compatibilidad)
function addMapLegend(map) {
    // Crear control de leyenda
    const legend = L.control({ position: 'bottomright' });
    
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'map-legend');
        
        // Estilos CSS inline para la leyenda
        div.innerHTML = `
            <div style="
                background: white; 
                padding: 12px; 
                border-radius: 8px; 
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                min-width: 180px;
                font-size: 12px;
                line-height: 1.4;
                font-family: 'Open Sans', sans-serif;
            ">
                <div style="font-weight: bold; margin-bottom: 8px; color: #2E5C8A; border-bottom: 1px solid #eee; padding-bottom: 4px;">
                    📍 Lugares de Interés
                </div>
                <div style="margin: 6px 0; display: flex; align-items: center;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px;">
                        <div style="background-color: #2E5C8A; width: 18px; height: 14px; border-radius: 3px; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></div>
                    </div>
                    <span>🏛️ Universidad (Evento)</span>
                </div>
                <div style="margin: 6px 0; display: flex; align-items: center;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px;">
                        <div style="background: #FF6B6B; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">🍽️</div>
                    </div>
                    <span>Lo de Rami (Restaurante)</span>
                </div>
                <div style="margin: 6px 0; display: flex; align-items: center;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px;">
                        <div style="background: #4ECDC4; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">🚂</div>
                    </div>
                    <span>Estación de tren</span>
                </div>
                <div style="margin: 6px 0; display: flex; align-items: center;">
                    <div style="width: 20px; height: 16px; display: flex; align-items: center; margin-right: 8px;">
                        <div style="background: #F4C430; border-radius: 50%; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); font-size: 10px; color: white;">⛪</div>
                    </div>
                    <span>Basílica de Luján</span>
                </div>
                <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #eee; font-size: 10px; color: #666; text-align: center;">
                    Datos de <a href="https://www.openstreetmap.org" target="_blank" style="color: #2E5C8A;">OpenStreetMap</a>
                </div>
            </div>
        `;
        
        // Prevenir que los clics en la leyenda afecten el mapa
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        
        return div;
    };
    
    legend.addTo(map);
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

// Función para countdown hacia el evento
function initEventCountdown() {
    const eventDate = new Date('2025-09-27T09:00:00-03:00');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;
    
    function updateCountdown() {
        const now = new Date();
        const timeDiff = eventDate - now;
        
        if (timeDiff <= 0) {
            // El evento ya pasó o está en curso
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            
            // Cambiar el título
            const titleElement = document.querySelector('.countdown-title');
            if (titleElement) {
                titleElement.textContent = '🎉 ¡El encuentro ya comenzó!';
            }
            return;
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        // Función para agregar animación al cambiar números
        function updateWithAnimation(element, newValue) {
            const formattedValue = String(newValue).padStart(2, '0');
            if (element.textContent !== formattedValue) {
                element.classList.add('updating');
                setTimeout(() => {
                    element.textContent = formattedValue;
                    element.classList.remove('updating');
                }, 100);
            }
        }
        
        // Actualizar cada elemento con animación
        updateWithAnimation(daysElement, days);
        updateWithAnimation(hoursElement, hours);
        updateWithAnimation(minutesElement, minutes);
        updateWithAnimation(secondsElement, seconds);
    }
    
    // Inicializar inmediatamente
    updateCountdown();
    
    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
}

// Performance optimizations
function initLazyLoading() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

function initImageOptimization() {
    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        // Skip first few images (above the fold)
        if (index > 3 && !img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// Service Worker registration for offline capability
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        const baseUrl = window.siteConfig ? window.siteConfig.baseUrl : '';
        const swPath = baseUrl + '/sw.js';
        
        navigator.serviceWorker.register(swPath)
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}