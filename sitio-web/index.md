---
layout: default
title: Encuentro OSM Argentina 2025
include_map: true
---

<div class="hero-section">
  {% include hero-flyer-elements.html %}
  <div class="event-badge">
    <h1>Encuentro OSM Argentina 2025</h1>
    <h2>{{ site.event.date_short }}</h2>
    <p>{{ site.event.location }}</p>
    <p class="hero-subtitle">Comunidad y Estado</p>
    <div class="hero-actions">
      <a href="{{ '/flyer' | relative_url }}" style="color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.9rem;">Ver flyer completo</a>
    </div>
  </div>
</div>

## 🎯 Sobre el Encuentro

Un **espacio de intercambio entre pares** generado desde y para la comunidad de OpenStreetMap Argentina. Este encuentro surge de la propia comunidad para compartir experiencias, aprender colaborativamente y fortalecer los vínculos entre mapeadores, desarrolladores y organizaciones que trabajan con datos geográficos libres.

🎉 **Un ambiente divertido y descontracturado** donde la pasión por los mapas libres se encuentra con el compañerismo, la camaradería y el aprendizaje horizontal. Porque mapear también es disfrutar.

**Tema central:** *"Comunidad y Estado"* - explorando las colaboraciones exitosas entre la comunidad OSM y organismos públicos, con mapatón colaborativo y intercambio horizontal de conocimientos.

### 📍 Información del Evento

- **📅 Fecha:** {{ site.event.date_formatted }}
- **📍 Sede:** [{{ site.event.location }}]({{ '/venue' | relative_url }})
- **👥 Modalidad:** Híbrida (presencial + virtual)

<div class="countdown-container">
  <div class="countdown-title">⏰ Faltan para el encuentro</div>
  <div id="countdown-timer" class="countdown-timer">
    <div class="countdown-unit">
      <span class="countdown-number" id="days">--</span>
      <span class="countdown-label">Días</span>
    </div>
    <div class="countdown-unit">
      <span class="countdown-number" id="hours">--</span>
      <span class="countdown-label">Horas</span>
    </div>
    <div class="countdown-unit">
      <span class="countdown-number" id="minutes">--</span>
      <span class="countdown-label">Min</span>
    </div>
    <div class="countdown-unit">
      <span class="countdown-number" id="seconds">--</span>
      <span class="countdown-label">Seg</span>
    </div>
  </div>
</div>

### 👨‍💼 Coordinador: {{ site.chairman.name }}

**{{ site.chairman.experience }}** especializado en {{ site.chairman.specialty }}. [Ver perfil OSM]({{ site.chairman.osm_profile }})

---

## 🗓️ Programa del Encuentro

<div class="programa-preview">
  <div class="horario-item">
    <div class="hora">8:30-9:00</div>
    <div class="actividad"><a href="{{ '/programa#acreditacion' | relative_url }}" style="color: inherit; text-decoration: none;">🎫 Acreditación</a></div>
  </div>
  
  <div class="horario-item">
    <div class="hora">9:00-9:30</div>
    <div class="actividad"><a href="{{ '/programa#apertura' | relative_url }}" style="color: inherit; text-decoration: none;">🎯 Apertura del Encuentro</a></div>
  </div>
  
  <div class="horario-item">
    <div class="hora">9:30-11:00</div>
    <div class="actividad"><a href="{{ '/programa#charlas' | relative_url }}" style="color: inherit; text-decoration: none;">💬 Charlas: Federico Gazaba + Carlos Brys</a></div>
  </div>
  
  <div class="horario-item">
    <div class="hora">11:00-12:30</div>
    <div class="actividad"><a href="{{ '/programa#talleres' | relative_url }}" style="color: inherit; text-decoration: none;">🛠️ Talleres y Experiencias</a></div>
  </div>
  
  <div class="horario-item">
    <div class="hora">12:30-13:30</div>
    <div class="actividad"><a href="{{ '/programa#almuerzo' | relative_url }}" style="color: inherit; text-decoration: none;">🍽️ Almuerzo</a></div>
  </div>
  
  <div class="horario-item destacado">
    <div class="hora">13:30-15:30</div>
    <div class="actividad"><a href="{{ '/programa#mapaton' | relative_url }}" style="color: inherit; text-decoration: none;">🗺️ Taller: Drones + EveryDoor (Emilio + Silvina)</a></div>
  </div>
  
  <div class="horario-item destacado">
    <div class="hora">16:00-18:00</div>
    <div class="actividad"><a href="{{ '/programa#mapaton' | relative_url }}" style="color: inherit; text-decoration: none;">🗺️ Taller: Panoramax + ChatMap (Bastian + Silvina)</a></div>
  </div>
  
  <div class="horario-item">
    <div class="hora">18:00</div>
    <div class="actividad"><a href="{{ '/programa#cierre' | relative_url }}" style="color: inherit; text-decoration: none;">🎯 Cierre - Propuesta SOTM 2026</a></div>
  </div>
</div>

[Ver programa completo]({{ '/programa' | relative_url }}){:.btn .btn-outline}

---

## 🏫 Proyecto Especial: Escuelas OSM

**Actividad continua durante los talleres:** Mapear escuelas usando datos oficiales del Ministerio de Educación con **248 tareas** preparadas en MapRoulette. Los participantes pueden trabajar en paralelo en el proyecto mientras asisten a los talleres especializados.

[Ver proyecto completo]({{ '/proyecto-escuelas' | relative_url }}){:.btn .btn-outline} [Participar en MapRoulette]({{ site.links.maproulette_lujan }}){:.btn .btn-success}

---

## 🏛️ Casos de Éxito

**Pergamino** (10 años colaboración municipal) y **Misiones** (programa provincial) demuestran el potencial de integración OSM-Estado.

[Ver casos detallados]({{ '/casos-exito' | relative_url }}){:.btn .btn-outline}

---

## 🔗 Enlaces y Comunidad

<div class="enlaces-oficiales">
  <a href="{{ site.links.osm_calendar }}" class="enlace-oficial">
    📅 OSM Calendar
  </a>
  
  <a href="{{ site.links.wiki }}" class="enlace-oficial">
    📚 Wiki OSM
  </a>
  
  <a href="{{ site.links.maproulette_project }}" class="enlace-oficial">
    🗺️ MapRoulette
  </a>
</div>

### 💬 Únete a la comunidad

- **[Telegram @osm_ar]({{ site.social.telegram }})** - Canal principal de OSM Argentina
- **[Instagram @OpenStreetMapAR]({{ site.social.instagram }})** - Fotos y actualizaciones
- **[Web oficial]({{ site.social.website }})** - openstreetmap.org.ar

---

## 📍 Ubicación

<div id="mapa-encuentro" style="height: 400px; margin: 2rem 0;"></div>

**{{ site.event.location }}** - {{ site.event.address }}

[Ver información completa de la sede]({{ '/venue' | relative_url }}){:.btn .btn-outline}

---

## 🎯 Participar

### Para Participantes Presenciales
1. **Confirmar asistencia** en [OSM Calendar]({{ site.links.osm_calendar }})
2. **Preparar herramientas:** JOSM o iD editor
3. **Cuenta OSM:** Tener usuario activo OpenStreetMap

### Para Participantes Virtuales
1. **Conexión híbrida** disponible
2. **MapRoulette online:** Participación en tiempo real
3. **Chat comunitario:** Coordinación durante el evento

<div class="cta-buttons">
  <a href="{{ site.links.inscripcion_oficial }}" target="_blank" class="btn btn-success btn-large">Inscribirse Ahora</a>
  <a href="{{ site.links.osm_calendar }}" target="_blank" class="btn btn-outline btn-large">OSM Calendar</a>
</div>

---

<div class="footer-evento">
  <p><strong>Organiza:</strong> Comunidad OpenStreetMap Argentina</p>
  <p><strong>Coordinador:</strong> {{ site.chairman.name }}</p>
  <p><strong>Anfitriona:</strong> <a href="{{ '/venue' | relative_url }}">Universidad Nacional de Luján</a></p>
</div>