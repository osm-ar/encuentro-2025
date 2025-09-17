---
layout: page
title: Inscripción
subtitle: Registrate para el Encuentro OSM Argentina 2025
---

<div class="inscripcion-hero">
  <h2>🎯 ¡Registrate para el Encuentro!</h2>
  <p>El <strong>Encuentro OSM Argentina 2025</strong> es gratuito pero requiere inscripción previa para organizar mejor el evento.</p>
  
  <div class="modalidades-info">
    <div class="modalidad presencial">
      <h3>🏢 Modalidad Presencial</h3>
      <p><a href="{{ '/venue' | relative_url }}">Universidad Nacional de Luján</a></p>
      <p><small>✅ Cupos limitados por capacidad del aula</small></p>
    </div>
    <div class="modalidad virtual">
      <h3>💻 Modalidad Virtual</h3>
      <p>Conexión online en vivo</p>
      <p><small>✅ Sin límite de participantes</small></p>
    </div>
  </div>
</div>

---

## 📝 Paso 1: Formulario de Inscripción

<div class="paso-inscripcion">
  <h3>✅ Registro Oficial (Obligatorio)</h3>
  <p>Completa el formulario con tus datos y preferencias de participación:</p>
  
  <div class="formulario-container">
    <div class="formulario-embed">
      <iframe 
        src="https://ee.kobotoolbox.org/single/5b9841bb7a69d0ff5668b369272169e6"
        width="100%" 
        height="700"
        frameborder="0"
        title="Formulario de inscripción Encuentro OSM Argentina 2025"
        style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      </iframe>
    </div>
    
    <div class="formulario-alternativo">
      <p><strong>¿Problemas con el formulario embebido?</strong></p>
      <a href="{{ site.links.inscripcion_oficial }}" target="_blank" class="btn btn-primary btn-large">
        📝 Abrir Formulario en Nueva Ventana
      </a>
      <p><small>El formulario se abrirá en KoBoToolbox</small></p>
    </div>
  </div>
</div>

---

## 📅 Paso 2: Confirmación en OSM Calendar

<div class="paso-confirmacion">
  <h3>✅ Agregar a tu Calendario (Recomendado)</h3>
  <p>Después de inscribirte, agrega el evento a tu calendario personal y confirma tu asistencia en OSM Calendar:</p>
  
  <div class="osmcal-container">
    <div class="osmcal-info">
      <h4>🗓️ OSM Calendar</h4>
      <p>El evento está registrado oficialmente en el calendario de la comunidad OpenStreetMap.</p>
      <ul>
        <li>✅ Recordatorios automáticos</li>
        <li>✅ Integración con tu calendario</li>
        <li>✅ Conexión con la comunidad global OSM</li>
        <li>✅ Actualizaciones automáticas del evento</li>
      </ul>
    </div>
    
    <div class="osmcal-action">
      <a href="{{ site.links.osm_calendar }}" target="_blank" class="btn btn-success btn-large">
        📅 Confirmar Asistencia en OSM Calendar
      </a>
      <p><small>Se abrirá en osmcal.org</small></p>
    </div>
  </div>
</div>

---

## ℹ️ Información del Evento

<div class="evento-resumen">
  <div class="evento-grid">
    <div class="evento-item">
      <div class="evento-icon">📅</div>
      <h4>Fecha y Horario</h4>
      <p><strong>{{ site.event.date_formatted }}</strong></p>
      <p>{{ site.event.time }}</p>
    </div>
    
    <div class="evento-item">
      <div class="evento-icon">📍</div>
      <h4>Ubicación</h4>
      <p><strong>{{ site.event.location }}</strong></p>
      <p><strong>{{ site.event.building }}</strong></p>
      <p>{{ site.event.address }}</p>
      <p><strong>Aulas:</strong> {% for classroom in site.event.classrooms %}{{ classroom.name }} ({{ classroom.floor }}){% unless forloop.last %} • {% endunless %}{% endfor %}</p>
      <p><a href="{{ '/' | relative_url }}#mapa-encuentro">🗺️ Ver en mapa</a></p>
    </div>
    
    <div class="evento-item">
      <div class="evento-icon">🎯</div>
      <h4>Programa</h4>
      <p><strong>Charlas + Talleres + Mapatón</strong></p>
      <p>Enfoque: "Comunidad y Estado"</p>
      <p><a href="{{ '/programa' | relative_url }}">📋 Ver programa completo</a></p>
    </div>
    
    <div class="evento-item">
      <div class="evento-icon">💰</div>
      <h4>Costo</h4>
      <p><strong>¡Completamente GRATUITO!</strong></p>
      <p>Incluye materials y coffee breaks</p>
      <p><small>Almuerzo por cuenta propia</small></p>
    </div>
  </div>
</div>

---

## 🤔 Preguntas Frecuentes

<div class="faq-inscripcion">
  <details>
    <summary><strong>¿Es obligatorio inscribirse?</strong></summary>
    <p>Sí, la inscripción es obligatoria tanto para modalidad presencial como virtual para poder organizar mejor el evento y tener un control de asistencia.</p>
  </details>
  
  <details>
    <summary><strong>¿Hay límite de cupos?</strong></summary>
    <p>Para la modalidad presencial sí hay límite por capacidad del aula. La modalidad virtual no tiene límite de participantes.</p>
  </details>
  
  <details>
    <summary><strong>¿Puedo cambiar de modalidad después de inscribirme?</strong></summary>
    <p>Sí, contacta al coordinador por Telegram o email para hacer el cambio, especialmente si cambias de virtual a presencial.</p>
  </details>
  
  <details>
    <summary><strong>¿Qué pasa si no puedo asistir?</strong></summary>
    <p>No hay problema, simplemente no te presentes. Si puedes avisarnos mejor para liberar el cupo presencial.</p>
  </details>
  
  <details>
    <summary><strong>¿Necesito experiencia previa con OpenStreetMap?</strong></summary>
    <p>No, el encuentro está diseñado para todos los niveles, desde principiantes hasta expertos en OSM.</p>
  </details>
</div>

---

## 📞 Soporte y Contacto

<div class="contacto-inscripcion">
  <div class="contacto-grid">
    <div class="contacto-item">
      <h4>👨‍💼 Coordinador del Evento</h4>
      <p><strong>Andrés Duhour</strong></p>
      <p><a href="{{ site.chairman.osm_profile }}" target="_blank">Ver perfil OSM</a></p>
      <p>19,204+ ediciones, especialista Río Luján</p>
    </div>
    
    <div class="contacto-item">
      <h4>💬 Comunidad</h4>
      <p><strong>Telegram:</strong> <a href="{{ site.social.telegram }}" target="_blank">@osm_ar</a></p>
      <p><strong>Instagram:</strong> <a href="{{ site.social.instagram }}" target="_blank">@OpenStreetMapAR</a></p>
      <p><strong>Web:</strong> <a href="{{ site.social.website }}" target="_blank">openstreetmap.org.ar</a></p>
    </div>
    
    <div class="contacto-item">
      <h4>📚 Más Información</h4>
      <p><a href="{{ site.links.wiki }}" target="_blank">Wiki del Evento</a></p>
      <p><a href="{{ '/faq' | relative_url }}">❓ Preguntas Frecuentes</a></p>
      <p><a href="{{ '/participar' | relative_url }}">🎯 Cómo Participar</a></p>
    </div>
  </div>
</div>

---

<div class="inscripcion-final">
  <h3>🚀 ¡Ya casi estás listo!</h3>
  <p>Después de completar ambos pasos, recibirás confirmación y estarás oficialmente registrado para el <strong>Encuentro OSM Argentina 2025</strong>.</p>
  
  <div class="pasos-resumen">
    <div class="paso-check">✅ Paso 1: Formulario de inscripción</div>
    <div class="paso-check">✅ Paso 2: Confirmación OSM Calendar</div>
    <div class="paso-check">🎉 ¡Listo para el encuentro!</div>
  </div>
  
  <p><strong>¡Nos vemos el 27 de septiembre en Luján!</strong></p>
</div>

<style>
.inscripcion-hero {
  background: linear-gradient(135deg, #2E5C8A, #75AADB);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
}

.inscripcion-hero h2 {
  color: white;
  margin-top: 0;
}

.modalidades-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.modalidad {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
}

.modalidad h3 {
  color: #F4C430;
  margin-top: 0;
  font-size: 1.1rem;
}

.paso-inscripcion, .paso-confirmacion {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.formulario-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.formulario-embed {
  min-height: 700px;
}

.formulario-alternativo {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border-left: 4px solid #F4C430;
}

.osmcal-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.osmcal-info {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.osmcal-info h4 {
  color: #2E5C8A;
  margin-top: 0;
}

.osmcal-info ul {
  padding-left: 0;
  list-style: none;
}

.osmcal-info li {
  margin: 0.5rem 0;
  color: #666;
}

.osmcal-action {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.evento-resumen {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.evento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.evento-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border-left: 4px solid #F4C430;
}

.evento-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.evento-item h4 {
  color: #2E5C8A;
  margin: 0.5rem 0;
}

.faq-inscripcion {
  margin: 2rem 0;
}

.faq-inscripcion details {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.faq-inscripcion summary {
  padding: 1rem;
  cursor: pointer;
  background: #f8f9fa;
  border-radius: 8px 8px 0 0;
  font-weight: 600;
  color: #2E5C8A;
}

.faq-inscripcion summary:hover {
  background: #e9ecef;
}

.faq-inscripcion p {
  padding: 1rem;
  margin: 0;
  color: #666;
}

.contacto-inscripcion {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.contacto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.contacto-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2E5C8A;
}

.contacto-item h4 {
  color: #2E5C8A;
  margin-top: 0;
}

.inscripcion-final {
  background: linear-gradient(135deg, #F4C430, #FFD700);
  color: #2E5C8A;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin: 3rem 0;
}

.inscripcion-final h3 {
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  margin-top: 0;
}

.pasos-resumen {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.paso-check {
  background: rgba(255,255,255,0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2E5C8A;
}

@media (max-width: 768px) {
  .modalidades-info {
    grid-template-columns: 1fr;
  }
  
  .osmcal-container {
    grid-template-columns: 1fr;
  }
  
  .evento-grid,
  .contacto-grid {
    grid-template-columns: 1fr;
  }
  
  .pasos-resumen {
    flex-direction: column;
    align-items: center;
  }
  
  .formulario-embed iframe {
    height: 600px;
  }
}
</style>