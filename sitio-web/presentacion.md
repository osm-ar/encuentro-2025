---
layout: null
title: "Presentación Encuentro OSM Argentina 2025"
permalink: /presentacion/
---
<!DOCTYPE html>
<html lang="es-AR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentación - Encuentro OSM Argentina 2025</title>
    
    <!-- Reveal.js CSS (Licencia MIT) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/reveal.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/theme/black.min.css">
    
    <style>
        /* Estilos personalizados para OSM Argentina */
        .reveal {
            font-family: 'Open Sans', sans-serif;
        }
        
        .reveal .slides section {
            background: linear-gradient(135deg, #2E5C8A, #75AADB);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .reveal h1, .reveal h2, .reveal h3 {
            color: #F4C430;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        .reveal h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
        }
        
        .reveal h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        .slide-logo {
            width: 120px;
            height: 120px;
            margin: 1rem auto;
            background: rgba(255,255,255,0.1);
            padding: 1rem;
            border-radius: 20px;
        }
        
        .slide-logo-large {
            width: 250px;
            max-height: 180px;
            object-fit: contain;
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 20px;
            margin: 1rem auto;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .info-item {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 15px;
            border-left: 5px solid #F4C430;
        }
        
        .info-item h3 {
            margin-top: 0;
            font-size: 1.1rem;
        }
        
        .sponsor-display {
            text-align: center;
            padding: 2rem;
        }
        
        .sponsor-metrics {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin: 2rem 0;
        }
        
        .metric {
            text-align: center;
        }
        
        .metric-icon {
            font-size: 3rem;
            display: block;
            margin-bottom: 0.5rem;
        }
        
        .metric-label {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.8);
        }
        
        .hashtags {
            font-size: 1.8rem;
            color: #F4C430;
            margin-top: 2rem;
            font-weight: bold;
        }
        
        .casos-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .caso-item {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
        }
        
        .caso-item img {
            width: 80px;
            height: 80px;
            object-fit: contain;
            background: rgba(255,255,255,0.9);
            padding: 0.5rem;
            border-radius: 10px;
            margin-bottom: 1rem;
        }
        
        .proyecto-container {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .proyecto-facilitador {
            text-align: center;
        }
        
        .facilitador-foto {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid #F4C430;
            margin-bottom: 1rem;
        }
        
        .aliados-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .aliado-item {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 15px;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .aliado-logo {
            width: 80px;
            height: 80px;
            object-fit: contain;
            background: rgba(255,255,255,0.9);
            padding: 0.5rem;
            border-radius: 10px;
        }
        
        .coordinador-container {
            display: flex;
            align-items: center;
            gap: 3rem;
            text-align: left;
        }
        
        .coordinador-foto {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 5px solid #F4C430;
        }
        
        .coordinador-stats {
            display: flex;
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            display: block;
            font-size: 2rem;
            color: #F4C430;
            font-weight: bold;
        }
        
        .stat-label {
            font-size: 1rem;
            opacity: 0.8;
        }
        
        .large-text {
            font-size: 1.6rem;
            margin: 0.8rem 0;
        }
        
        .highlight {
            color: #F4C430;
            font-weight: bold;
        }
        
        .contact-info {
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 1.5rem 0;
        }
        
        .programa-time {
            color: #F4C430;
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 0.3rem;
        }
        
        /* Progress bar personalizado */
        .reveal .progress {
            background: rgba(255,255,255,0.1);
        }
        
        .reveal .progress span {
            background: #F4C430;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .info-grid,
            .casos-grid,
            .aliados-grid {
                grid-template-columns: 1fr;
            }
            
            .proyecto-container,
            .coordinador-container {
                grid-template-columns: 1fr;
                flex-direction: column;
                text-align: center;
            }
            
            .reveal h1 {
                font-size: 2.5rem;
            }
            
            .reveal h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            
            <!-- Slide 1: Bienvenida -->
            <section>
                <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="slide-logo">
                <h1>Encuentro OSM Argentina 2025</h1>
                <h2>Comunidad y Estado</h2>
                <div class="large-text">
                    <p>📅 Sábado 27 de septiembre de 2025</p>
                    <p>📍 Universidad Nacional de Luján</p>
                    <p>🕘 09:00 - 19:00</p>
                    <p style="color: #F4C430; font-size: 1rem; margin-top: 1rem;">🎊 14 slides - Presentación automática</p>
                </div>
            </section>

            <!-- Slide 2: Programa Principal -->
            <section>
                <h2>🎯 Programa del Día</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="programa-time">09:00 - 10:30</div>
                        <h3>Recepción y Bienvenida</h3>
                        <p>Registro de participantes • Networking inicial</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">10:30 - 12:00</div>
                        <h3>Casos de Éxito</h3>
                        <p>Pergamino • Misiones • IDERA</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">12:00 - 14:00</div>
                        <h3>Almuerzo</h3>
                        <p>🍽️ Lo de Rami • Coffee breaks disponibles</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">14:00 - 18:00</div>
                        <h3>Mapatón Escuelas OSM</h3>
                        <p>Mapeo colaborativo de centros educativos</p>
                    </div>
                    <div class="info-item">
                        <div class="programa-time">18:00 - 19:00</div>
                        <h3>Cierre y Próximos Pasos</h3>
                        <p>Reflexiones • Planificación futura</p>
                    </div>
                </div>
            </section>

            <!-- Slide 3: Sponsor Premium - Geolibres -->
            <section>
                <div class="sponsor-display">
                    <img src="{{ '/assets/img/logo_geolibres.png' | relative_url }}" alt="Geolibres" class="slide-logo-large">
                    <h2>Sponsor Premium</h2>
                    <p style="font-size: 1.4rem; line-height: 1.6; max-width: 800px; margin: 0 auto;">
                        Geolibres promueve el uso de herramientas libres en geomática, apoyando proyectos educativos y la democratización del conocimiento geoespacial en América Latina.
                    </p>
                    <div class="sponsor-metrics">
                        <div class="metric">
                            <span class="metric-icon">🎓</span>
                            <span class="metric-label">Educación</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">🌎</span>
                            <span class="metric-label">América Latina</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">📚</span>
                            <span class="metric-label">Conocimiento Libre</span>
                        </div>
                    </div>
                    <p class="hashtags">#Geolibres</p>
                </div>
            </section>

            <!-- Slide 4: Sponsor Premium - Kaart -->
            <section>
                <div class="sponsor-display">
                    <img src="{{ '/assets/img/logo_kaart_official.svg' | relative_url }}" alt="Kaart" class="slide-logo-large">
                    <h2>Sponsor Premium</h2>
                    <p style="font-size: 1.4rem; line-height: 1.6; max-width: 800px; margin: 0 auto;">
                        Kaart es líder en tecnología de datos geoespaciales, especializados en OpenStreetMap con proyectos globales de cartografía y herramientas avanzadas de mapeo.
                    </p>
                    <div class="sponsor-metrics">
                        <div class="metric">
                            <span class="metric-icon">📍</span>
                            <span class="metric-label">OpenStreetMap</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">🤖</span>
                            <span class="metric-label">Tecnología Avanzada</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">🌎</span>
                            <span class="metric-label">Proyectos Globales</span>
                        </div>
                    </div>
                    <p class="hashtags">#Kaart #OSMExperts</p>
                </div>
            </section>

            <!-- Slide 5: Sponsor Premium - TomTom -->
            <section>
                <div class="sponsor-display">
                    <img src="{{ '/assets/img/logo_tomtom.svg' | relative_url }}" alt="TomTom" class="slide-logo-large">
                    <h2>Sponsor Premium</h2>
                    <p style="font-size: 1.4rem; line-height: 1.6; max-width: 800px; margin: 0 auto;">
                        TomTom es líder mundial en tecnologías de navegación y mapas, impulsando la movilidad con datos de mapas de alta calidad y servicios de localización innovadores.
                    </p>
                    <div class="sponsor-metrics">
                        <div class="metric">
                            <span class="metric-icon">💼</span>
                            <span class="metric-label">Tecnología Global</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">🌍</span>
                            <span class="metric-label">Presencia Mundial</span>
                        </div>
                        <div class="metric">
                            <span class="metric-icon">🗺️</span>
                            <span class="metric-label">Innovación en Mapas</span>
                        </div>
                    </div>
                    <p class="hashtags">#TomTom #TomTomCares</p>
                </div>
            </section>

            <!-- Slide 6: Casos de Éxito - Parte 1 -->
            <section>
                <h2>🏆 Casos de Éxito: Comunidad y Estado</h2>
                <div class="casos-grid" style="grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                    <div class="caso-item">
                        <img src="{{ '/assets/img/logo_pergamino.png' | relative_url }}" alt="Pergamino" style="width: 60px; height: 60px;">
                        <h3 style="font-size: 1.3rem;">Municipalidad de Pergamino</h3>
                        <p style="font-size: 1rem;"><strong>10 años de colaboración</strong></p>
                        <p style="font-size: 0.9rem;">Mapeo sistemático de infraestructura urbana con participación ciudadana. 2,246 ediciones oficiales.</p>
                    </div>
                    <div class="caso-item">
                        <img src="{{ '/assets/img/logo_misiones.png' | relative_url }}" alt="Misiones" style="width: 60px; height: 60px;">
                        <h3 style="font-size: 1.3rem;">Programa Misiones</h3>
                        <p style="font-size: 1rem;"><strong>Capacitación gubernamental</strong></p>
                        <p style="font-size: 0.9rem;">Entrenamiento de 15+ organismos públicos en herramientas OSM durante 3 días intensivos.</p>
                    </div>
                </div>
            </section>

            <!-- Slide 7: Casos de Éxito - Parte 2 -->
            <section>
                <h2>🏆 Casos de Éxito: Infraestructura</h2>
                <div class="casos-grid" style="grid-template-columns: 1fr; max-width: 600px; margin: 0 auto;">
                    <div class="caso-item" style="text-align: center; padding: 2rem;">
                        <img src="{{ '/assets/img/logo_idera.png' | relative_url }}" alt="IDERA" style="width: 80px; height: 80px; margin-bottom: 1rem;">
                        <h3 style="font-size: 1.4rem;">Integración IDERA</h3>
                        <p style="font-size: 1.1rem;"><strong>Datos oficiales integrados</strong></p>
                        <p style="font-size: 1rem;">Conexión directa con la Infraestructura de Datos Espaciales de la República Argentina</p>
                        <p style="color: #F4C430; font-size: 0.9rem; margin-top: 1rem;">🌐 Proyecto Escuelas OSM utiliza datos del Ministerio de Educación</p>
                    </div>
                </div>
            </section>

            <!-- Slide 7: Proyecto Escuelas -->
            <section>
                <h2>🏫 Proyecto Escuelas OSM</h2>
                <div class="proyecto-container">
                    <div>
                        <h3 style="color: #F4C430;">Mapeo de Centros Educativos</h3>
                        <p style="font-size: 1rem; margin-bottom: 0.8rem;">
                            Contribución colaborativa al <strong>Mapa Educativo Nacional</strong> a través de OpenStreetMap
                        </p>
                        <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                            <li>✅ Identificación de escuelas en zonas rurales</li>
                            <li>✅ Validación de datos oficiales</li>
                            <li>✅ Mejora de la accesibilidad educativa</li>
                            <li>✅ Colaboración con organismos públicos</li>
                        </ul>
                    </div>
                    <div class="proyecto-facilitador">
                        <img src="{{ '/assets/img/manuel_retamozo.png' | relative_url }}" alt="Manuel Retamozo" class="facilitador-foto">
                        <h4>Facilitador</h4>
                        <p><strong>Manuel Retamozo</strong></p>
                        <p>Especialista en bases de datos geográficas</p>
                        <p style="color: #F4C430;">GeoInquiet@s</p>
                    </div>
                </div>
            </section>

            <!-- Slide 8: Nuestros Aliados - Institucionales -->
            <section>
                <h2>🏢 Aliados Institucionales</h2>
                <div class="aliados-grid">
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/logo_unlu.png' | relative_url }}" alt="Universidad Nacional de Luján" class="aliado-logo">
                        <div>
                            <h3>Universidad Nacional de Luján</h3>
                            <p>Sede del encuentro • Apoyo institucional</p>
                        </div>
                    </div>
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/logo_mapaeducativo.png' | relative_url }}" alt="Mapa Educativo" class="aliado-logo">
                        <div>
                            <h3>Mapa Educativo</h3>
                            <p>Plataforma educativa nacional</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Slide 9: Nuestros Aliados - Comunidades -->
            <section>
                <h2>👥 Aliados Comunitarios</h2>
                <div class="aliados-grid">
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/logo_geoinquietos_ar_oficial.png' | relative_url }}" alt="GeoInquietos Argentina" class="aliado-logo">
                        <div>
                            <h3>GeoInquietos Argentina</h3>
                            <p>Comunidad geoespacial argentina</p>
                            <p style="color: #F4C430; font-size: 0.9rem; margin-top: 0.5rem;">🌐 Red FOSS4G Latinoamérica</p>
                        </div>
                    </div>
                    <div class="aliado-item">
                        <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="aliado-logo">
                        <div>
                            <h3>OpenStreetMap Argentina</h3>
                            <p>Comunidad nacional de mapeo colaborativo</p>
                            <p style="color: #F4C430; font-size: 0.9rem; margin-top: 0.5rem;">🗺️ Organizador principal</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Slide 10: Alimentación y Logística -->
            <section>
                <h2>🍽️ Alimentación y Descansos</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <h3>🥪 Coffee Breaks</h3>
                        <p><strong>Incluidos en el evento</strong></p>
                        <p>Pausas programadas durante la jornada</p>
                    </div>
                    <div class="info-item" style="text-align: center;">
                        <img src="{{ '/assets/img/lo_de_rami.jpg' | relative_url }}" alt="Lo de Rami" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 1rem; object-fit: cover; border: 3px solid #F4C430;">
                        <h3>🍽️ Almuerzo</h3>
                        <p><strong>Lo de Rami</strong></p>
                        <p>Restaurante recomendado en la zona</p>
                        <p style="color: #F4C430;">🔗 <a href="https://www.openstreetmap.org/way/684683865" target="_blank" style="color: #F4C430;">Ver en OSM</a></p>
                    </div>
                    <div class="info-item">
                        <h3>☕ Disponibilidad</h3>
                        <p><strong>12:00 - 14:00</strong></p>
                        <p>Horario de almuerzo libre</p>
                        <p>Opciones gastronómicas en la zona universitaria</p>
                    </div>
                    <div class="info-item">
                        <h3>🗺️ Mapeo Colaborativo</h3>
                        <p><strong>Coordina: Andrés Duhour</strong></p>
                        <p>Lugar mapeado por nuestro coordinador</p>
                        <p>¡Un ejemplo de OSM en acción!</p>
                    </div>
                </div>
            </section>

            <!-- Slide 11: Participación -->
            <section>
                <h2>🚀 ¡Participa del Encuentro!</h2>
                <div class="info-grid" style="margin: 3rem 0;">
                    <div class="info-item">
                        <h3>🏢 Modalidad Presencial</h3>
                        <p>Universidad Nacional de Luján</p>
                        <p class="highlight">Cupos limitados</p>
                    </div>
                    <div class="info-item">
                        <h3>💻 Modalidad Virtual</h3>
                        <p>Conexión online en vivo</p>
                        <p class="highlight">Sin límite de participantes</p>
                    </div>
                </div>
                <div style="text-align: center;">
                    <h3>📝 Inscripción Gratuita</h3>
                    <p class="large-text highlight">🔗 tinyurl.com/osm-lujan</p>
                    <div class="contact-info">
                        <p>📱 Telegram: @osm_ar</p>
                        <p>📸 Instagram: @OpenStreetMapAR</p>
                    </div>
                </div>
            </section>

            <!-- Slide 12: Coordinador -->
            <section>
                <h2>👨‍💼 Coordinación del Evento</h2>
                <div class="coordinador-container">
                    <div style="position: relative; width: 200px; height: 200px; margin: 0 auto;">
                        <img src="{{ '/assets/img/andres_duhour.jpg' | relative_url }}" alt="Andrés Duhour" style="width: 200px; height: 200px; border-radius: 50%; border: 5px solid #F4C430; position: relative; z-index: 2;">
                        <div style="position: absolute; top: -10px; right: -10px; width: 60px; height: 60px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #2E5C8A; z-index: 3;">
                            <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" style="width: 40px; height: 40px; border-radius: 50%;">
                        </div>
                        <div style="position: absolute; bottom: -5px; left: -5px; background: rgba(244, 196, 48, 0.9); padding: 3px 8px; border-radius: 12px; font-size: 0.7rem; font-weight: bold; color: #2E5C8A; z-index: 3;">
                            🎆 OSM AR 2025
                        </div>
                    </div>
                    <div>
                        <h3 style="font-size: 2rem;">Andrés Duhour</h3>
                        <p style="font-size: 1.2rem;">Coordinador General</p>
                        <div class="coordinador-stats">
                            <div class="stat">
                                <span class="stat-number">19,204+</span>
                                <span class="stat-label">ediciones OSM</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">10+</span>
                                <span class="stat-label">años de experiencia</span>
                            </div>
                        </div>
                        <p style="font-size: 1rem;">🌊 <strong>Especialidad:</strong> Cuenca del Río Luján, osmlanduseR</p>
                        <p style="font-size: 0.9rem; color: #F4C430;">🔗 openstreetmap.org/user/AndresDuhour</p>
                    </div>
                </div>
            </section>

            <!-- Slide 13: Información Final -->
            <section>
                <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="slide-logo">
                <h1>¡Te Esperamos!</h1>
                <div class="large-text">
                    <p class="highlight">📅 Sábado 27 de septiembre de 2025</p>
                    <p>📍 Universidad Nacional de Luján</p>
                    <p>🕘 09:00 - 19:00 • Entrada libre y gratuita</p>
                </div>
                <div class="contact-info">
                    <p>🌐 <strong>Información:</strong> encuentro2025.openstreetmap.org.ar</p>
                    <p>📝 <strong>Inscripción:</strong> tinyurl.com/osm-lujan</p>
                    <p>📱 <strong>Comunidad:</strong> t.me/osm_ar</p>
                </div>
            </section>

        </div>
    </div>

    <!-- Reveal.js JavaScript (Licencia MIT) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.6.1/reveal.min.js"></script>
    
    <script>
        // Inicializar Reveal.js con autoplay
        Reveal.initialize({
            // Configuración básica
            hash: true,
            controls: true,
            progress: true,
            center: true,
            touch: true,
            
            // Transiciones
            transition: 'fade',
            transitionSpeed: 'default',
            backgroundTransition: 'fade',
            
            // Autoplay - diapositivas automáticas
            autoSlide: 10000, // 10 segundos por slide
            autoSlideStoppable: true, // Pausa con interacción del usuario
            loop: true, // Loop infinito
            
            // Configuración de teclado
            keyboard: {
                32: function() { // Spacebar
                    if (Reveal.isAutoSliding()) {
                        Reveal.pauseAutoSlide();
                        console.log('Presentación pausada');
                    } else {
                        Reveal.resumeAutoSlide();
                        console.log('Presentación reanudada');
                    }
                },
                27: function() { // Escape
                    window.close(); // Cerrar ventana
                }
            },
            
            // Plugins (incluidos en la distribución de Reveal.js)
            plugins: []
        });
        
        // Eventos personalizados
        Reveal.on('ready', function() {
            console.log('Presentación OSM Argentina 2025 iniciada');
            console.log('Controles:');
            console.log('- Flechas: Navegación manual');
            console.log('- Barra espaciadora: Pausar/Reanudar');
            console.log('- Escape: Cerrar');
        });
        
        Reveal.on('slidechanged', function(event) {
            console.log('Slide actual:', event.indexh + 1);
        });
        
        // Pausa automática con mouse hover
        const slidesContainer = document.querySelector('.reveal');
        
        slidesContainer.addEventListener('mouseenter', function() {
            Reveal.pauseAutoSlide();
        });
        
        slidesContainer.addEventListener('mouseleave', function() {
            Reveal.resumeAutoSlide();
        });
        
        // Configuración fullscreen para presentaciones
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F11') {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    document.documentElement.requestFullscreen();
                }
                e.preventDefault();
            }
        });
        
        // Auto fullscreen en carga (opcional)
        window.addEventListener('load', function() {
            // Descomenta la siguiente línea para fullscreen automático
            // document.documentElement.requestFullscreen();
        });
    </script>
</body>
</html>