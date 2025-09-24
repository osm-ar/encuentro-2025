---
layout: page
title: Sponsors y Colaboradores
subtitle: Organizaciones que hacen posible el Encuentro OSM Argentina 2025
---

<style>
.sponsors-intro {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  text-align: center;
  border-left: 4px solid #F4C430;
}

.sponsors-intro p {
  font-size: 1.1rem;
  color: #2E5C8A;
  margin: 0;
  font-weight: 500;
}

.sponsors-flip-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  /* Espacio extra para el efecto de agrandado */
  padding: 2rem 0;
}

.sponsor-flip-card {
  background-color: transparent;
  width: 100%;
  height: 250px;
  perspective: 1000px;
  transition: height 0.6s ease;
}

.sponsor-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.sponsor-flip-card:hover .sponsor-flip-inner {
  transform: rotateY(180deg);
}

.sponsor-flip-card:hover {
  height: 380px;
  z-index: 2;
  position: relative;
}

.sponsor-flip-front, 
.sponsor-flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
}

.sponsor-flip-front {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  text-align: center;
}

.sponsor-flip-back {
  transform: rotateY(180deg);
  text-align: left;
  justify-content: flex-start;
  overflow: hidden;
}

.sponsor-flip-back.sponsor-oficial {
  background: linear-gradient(135deg, #2E5C8A, #75AADB);
  color: white;
}

.sponsor-flip-back.sponsor-academico {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
}

.sponsor-flip-back.sponsor-colaborador {
  background: linear-gradient(135deg, #6f42c1, #e83e8c);
  color: white;
}

.sponsor-flip-front img {
  max-height: 80px;
  max-width: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.logo-placeholder {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.logo-placeholder.small {
  font-size: 1.5rem;
  margin: 0;
}

.sponsor-flip-front h4 {
  color: #2E5C8A;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.sponsor-flip-front p {
  color: #666;
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.flip-hint {
  margin-top: auto;
  font-size: 0.8rem;
  color: #999;
  padding: 0.5rem 1rem;
  background: rgba(244, 196, 48, 0.1);
  border-radius: 20px;
  font-style: italic;
}

.back-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  flex-wrap: nowrap;
}

.back-logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  padding: 2px;
  flex-shrink: 0;
}

.back-header h4 {
  color: white;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.sponsor-flip-back h4 {
  color: white;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 0.5rem;
  align-self: stretch;
  text-align: center;
}

.sponsor-details {
  width: 100%;
}

.sponsor-details p {
  color: rgba(255,255,255,0.9);
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  font-weight: 600;
}

.sponsor-details ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.sponsor-details li {
  color: rgba(255,255,255,0.9);
  margin: 0.4rem 0;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sponsor-metric {
  margin-top: auto;
  text-align: center;
  padding: 0.8rem;
  background: rgba(255,255,255,0.15);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.metric-text {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.95);
  font-weight: 600;
  font-style: italic;
}

.external-link {
  color: rgba(255,255,255,0.95);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.external-link:hover {
  color: white;
  text-decoration: underline;
}

/* Invitation Cards */
.invitation-card .sponsor-flip-front {
  background: linear-gradient(135deg, #F4C430, #FFD700);
  border: 2px dashed #2E5C8A;
}

.invitation-front {
  background: linear-gradient(135deg, #F4C430, #FFD700) !important;
  color: #2E5C8A;
}

.invitation-front h4 {
  color: #2E5C8A !important;
  font-weight: 700;
}

.invitation-front p {
  color: #2E5C8A !important;
  font-weight: 600;
}

.invitation-front .flip-hint {
  background: rgba(46, 92, 138, 0.1);
  color: #2E5C8A;
  font-weight: 600;
}

.invitation-back {
  background: linear-gradient(135deg, #2E5C8A, #75AADB) !important;
  color: white;
}

.invitation-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.invitation-icon.small {
  font-size: 1.5rem;
  margin: 0;
}

.collaboration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  /* Espacio extra para el efecto de agrandado */
  padding: 2rem 0;
}

.flip-card {
  background-color: transparent;
  width: 100%;
  height: 240px;
  border-radius: 12px;
  perspective: 1000px;
  transition: height 0.6s ease;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.flip-card:hover .flip-card-inner,
.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card:hover {
  height: 360px;
  z-index: 2;
  position: relative;
}

.flip-card-front, 
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
}

.flip-card-front {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-left: 4px solid #F4C430;
}

.flip-card-back {
  background: linear-gradient(135deg, #2E5C8A, #75AADB);
  color: white;
  transform: rotateY(180deg);
  text-align: left;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.flip-card-front h4 {
  color: #2E5C8A;
  margin: 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.flip-card-front p {
  color: #666;
  margin: 0.5rem 0;
  font-size: 1rem;
}

.flip-card-back h4 {
  color: white;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 0.5rem;
}

.flip-card-back h5 {
  color: #F4C430;
  margin: 0 0 0.8rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.card-details ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.card-details li {
  color: rgba(255,255,255,0.9);
  margin: 0.5rem 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.impact-metric {
  margin-top: auto;
  text-align: center;
  padding: 1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.metric-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #F4C430;
  line-height: 1;
}

.metric-label {
  display: block;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.8);
  margin-top: 0.3rem;
}

.metricas-encuentro {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.metrica-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 2px solid #dee2e6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.metrica-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.metrica-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.metrica-content .numero {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2E5C8A;
  line-height: 1;
}

.metrica-content .label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #495057;
  line-height: 1.3;
  margin-top: 0.5rem;
}

.metrica-content .sublabel {
  font-weight: 400;
  color: #6c757d;
  font-size: 0.85rem;
}

.casos-exito-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.caso-exito-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  border: 2px solid #dee2e6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.caso-exito-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

.caso-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.caso-icon {
  font-size: 1.5rem;
  display: block;
}

.caso-header h4 {
  margin: 0;
  color: #2E5C8A;
  font-size: 1.1rem;
}

.caso-exito-item p {
  margin: 0;
  color: #495057;
  line-height: 1.4;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .sponsors-flip-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .sponsor-flip-card {
    height: 260px;
  }
  
  .sponsor-flip-front,
  .sponsor-flip-back {
    padding: 1.2rem;
  }
  
  .sponsor-flip-front img {
    max-height: 60px;
  }
  
  .sponsor-flip-front h4 {
    font-size: 1.1rem;
  }
  
  .sponsor-flip-card:active .sponsor-flip-inner {
    transform: rotateY(180deg);
  }
  
  .collaboration-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .flip-card {
    height: 280px;
  }
  
  .flip-card-front,
  .flip-card-back {
    padding: 1.2rem;
  }
  
  .card-icon {
    font-size: 2.5rem;
  }
  
  .flip-card-front h4 {
    font-size: 1.2rem;
  }
  
  .flip-card:active .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .metricas-encuentro {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  .casos-exito-grid {
    grid-template-columns: 1fr;
  }
  
  .metrica-card {
    padding: 1rem;
  }
  
  .metrica-content .numero {
    font-size: 2rem;
  }
  
  .metrica-icon {
    font-size: 2rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .sponsor-flip-inner,
  .flip-card-inner {
    transition: none;
  }
  
  .sponsor-flip-card:hover .sponsor-flip-inner,
  .flip-card:hover .flip-card-inner {
    transform: none;
  }
  
  .flip-card-back {
    position: relative;
    transform: none;
    margin-top: 1rem;
    height: auto;
  }
}

@media (prefers-contrast: high) {
  .sponsor-flip-front,
  .flip-card-front {
    background: white;
    border: 2px solid #000;
  }
  
  .sponsor-flip-back,
  .flip-card-back {
    background: #000 !important;
    border: 2px solid #fff;
  }
}

/* Sponsors Grid (Red de Colaboración) */
.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  /* Espacio extra para el efecto de agrandado */
  padding: 2rem 0;
}

.sponsor-item {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.6s ease;
  cursor: pointer;
  height: 240px;
  display: flex;
  flex-direction: column;
}

.sponsor-item:hover {
  height: 320px;
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  z-index: 2;
  position: relative;
}

.sponsor-item.sponsor-academico {
  border-left: 4px solid #28a745;
}

.sponsor-item.sponsor-colaborador {
  border-left: 4px solid #17a2b8;
}

.sponsor-item h4 {
  color: #2E5C8A;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.sponsor-item p {
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.sponsor-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.sponsor-item li {
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  padding-left: 1rem;
  position: relative;
}

.sponsor-item li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

/* Tarjetas flip en Red de Colaboración (las invitaciones) */
.sponsors-grid .sponsor-flip-card:hover {
  height: 400px;
  z-index: 2;
  position: relative;
}

/* Nuestros Aliados - altura más moderada */
.sponsors-flip-grid .sponsor-flip-card:hover {
  height: 340px;
  z-index: 2;
  position: relative;
}

/* Sponsors Call Section */
.sponsors-call {
  background: linear-gradient(135deg, #2E5C8A, #75AADB);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
  margin: 3rem 0;
  box-shadow: 0 8px 32px rgba(46, 92, 138, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.sponsors-call h3 {
  color: #F4C430;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.sponsors-call p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  color: rgba(255, 255, 255, 0.95);
}

.sponsors-call p strong {
  color: #F4C430;
  font-weight: 600;
}

.sponsors-call a {
  color: #F4C430;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(244, 196, 48, 0.3);
  transition: all 0.3s ease;
}

.sponsors-call a:hover {
  color: #FFD700;
  border-bottom-color: #FFD700;
  text-decoration: none;
}

.sponsors-call .btn {
  margin: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
}

.sponsors-call .btn-primary {
  background: #F4C430;
  color: #2E5C8A;
  border-color: #F4C430;
}

.sponsors-call .btn-primary:hover {
  background: #FFD700;
  border-color: #FFD700;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(244, 196, 48, 0.4);
}

.sponsors-call .btn-outline {
  background: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
}

.sponsors-call .btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .sponsors-call {
    padding: 2rem 1.5rem;
    margin: 2rem 0;
  }
  
  .sponsors-call h3 {
    font-size: 1.6rem;
  }
  
  .sponsors-call p {
    font-size: 1rem;
  }
  
  .sponsors-call .btn {
    display: block;
    margin: 0.5rem 0;
    width: 100%;
  }
}

/* Premium Sponsors Section */
.sponsors-premium {
  background: linear-gradient(135deg, #75AADB, #2E5C8A);
  border-radius: 16px;
  padding: 2rem 1.8rem;
  margin: 1.5rem 0 2.5rem 0;
  box-shadow: 0 8px 32px rgba(46, 92, 138, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.sponsors-premium::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.sponsors-premium h3 {
  display: none;
}

.sponsors-premium-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  /* Espacio extra para el efecto de agrandado */
  padding: 2rem 0;
}

.sponsors-premium .sponsor-flip-card {
  height: 260px;
  transition: height 0.6s ease;
}

.sponsors-premium .sponsor-flip-card:hover {
  height: 380px;
  z-index: 2;
  position: relative;
}

.sponsors-premium .sponsor-flip-front {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.sponsors-premium .sponsor-flip-back {
  background: linear-gradient(135deg, #2E5C8A, #75AADB) !important;
}

@media (max-width: 768px) {
  .sponsors-premium {
    padding: 1.5rem 1.2rem;
    margin: 1rem 0 1.8rem 0;
  }
  
  .sponsors-premium-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .sponsors-premium .sponsor-flip-card {
    height: 220px;
  }
}
</style>

<!-- Premium Sponsors Section -->
<div class="sponsors-premium">
  <h3>⭐ Sponsors Principales</h3>
  <div class="sponsors-premium-grid">
    <!-- TomTom -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/TomTom-logo-RGB_lockup.png' | relative_url }}" alt="TomTom">
          <h4>TomTom</h4>
          <p><strong>Sponsor Tecnológico</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back">
          <div class="back-header">
            <img src="{{ '/assets/img/TomTom-logo-RGB_lockup.png' | relative_url }}" alt="TomTom" class="back-logo">
            <h4>TomTom</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Industria:</strong> Tecnología de localización</p>
            <ul>
              <li>🗺️ Líder en mapas y navegación</li>
              <li>🚙 Soluciones automotrices</li>
              <li>📱 APIs de geolocalización</li>
              <li>🌍 Datos de tráfico en tiempo real</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://www.tomtom.com/" target="_blank" class="external-link">
                🌐 Sitio oficial TomTom
              </a>
              <div class="metric-text" style="margin-top: 0.5rem;">
                #TomTom #TomTomCares #OSMArgentina
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- GeoLibres Argentina -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/logo_geolibres.png' | relative_url }}" alt="GeoLibres Argentina">
          <h4>GeoLibres Argentina</h4>
          <p><strong>Asociación Civil</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back">
          <div class="back-header">
            <img src="{{ '/assets/img/logo_geolibres.png' | relative_url }}" alt="GeoLibres" class="back-logo">
            <h4>GeoLibres Argentina</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Fundada:</strong> 2019</p>
            <ul>
              <li>🆓 Software libre geoespacial</li>
              <li>🤝 Nuclea OSM Argentina</li>
              <li>👥 Red Geoinquiet@s</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://geolibres.org.ar/" target="_blank" class="external-link">
                🌐 Sitio oficial GeoLibres
              </a>
              <div class="metric-text" style="margin-top: 0.5rem;">
                #Geolibres #OSMArgentina
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="sponsors-section">
  <h2>🤝 Nuestros Aliados</h2>
  
  <div class="sponsors-flip-grid">
    <!-- Sponsor Principal -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/logo_unlu.png' | relative_url }}" alt="Universidad Nacional de Luján">
          <h4>{{ site.event.location }}</h4>
          <p><strong>Sede Oficial</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back sponsor-oficial">
          <div class="back-header">
            <img src="{{ '/assets/img/logo_unlu.png' | relative_url }}" alt="UNLu" class="back-logo">
            <h4>Universidad Nacional de Luján</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Rol:</strong> Anfitrión principal</p>
            <ul>
              <li>🏢 Instalaciones</li>
              <li>🌐 Conectividad</li>
              <li>🅿️ Estacionamiento</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://www.unlu.edu.ar/" target="_blank" class="external-link">
                🌐 Sitio oficial UNLu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Departamento de Ciencias Básicas -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/logo_unlu_basicas.png' | relative_url }}" alt="Departamento de Ciencias Básicas - UNLu">
          <h4>Ciencias Básicas</h4>
          <p><strong>Dpto. Anfitrión</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back sponsor-academico">
          <div class="back-header">
            <img src="{{ '/assets/img/logo_unlu_basicas.png' | relative_url }}" alt="Ciencias Básicas UNLu" class="back-logo">
            <h4>Departamento de Ciencias Básicas</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Rol:</strong> Departamento anfitrión</p>
            <ul>
              <li>📚 Coordinación académica</li>
              <li>🏛️ Facilidades del edificio</li>
              <li>🎯 Apoyo logístico</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://www.basicas.unlu.edu.ar/?q=node/184" target="_blank" class="external-link">
                🌐 Sitio del Departamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- OSM Argentina -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OpenStreetMap Argentina">
          <h4>OpenStreetMap Argentina</h4>
          <p><strong>Organizador Principal</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back sponsor-academico">
          <div class="back-header">
            <img src="{{ '/assets/img/osm-ar-logo.png' | relative_url }}" alt="OSM Argentina" class="back-logo">
            <h4>OpenStreetMap Argentina</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Rol:</strong> Coordinación técnica y programa</p>
            <ul>
              <li>📅 Organización del evento</li>
              <li>🎯 Contenidos especializados</li>
              <li>👥 Coordinación comunidad</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://openstreetmap.org.ar/" target="_blank" class="external-link">
                🌐 Sitio oficial OSM Argentina
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Kaart -->
    <!-- --hide--
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/logo_kaart_official.svg' | relative_url }}" alt="Kaart">
          <h4>Kaart</h4>
          <p><strong>Sponsor Técnico</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back sponsor-oficial">
          <div class="back-header">
            <img src="{{ '/assets/img/logo_kaart_official.svg' | relative_url }}" alt="Kaart" class="back-logo">
            <h4>Kaart</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Especialidad:</strong> Datos geoespaciales</p>
            <ul>
              <li>📍 Expertos en OSM</li>
              <li>🤖 Tecnología de mapeo</li>
              <li>🌎 Proyectos globales</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://kaart.com/" target="_blank" class="external-link">
                🌐 Sitio oficial Kaart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->
    
    <!-- Geoinquiet@s Argentina -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/logo_geoinquietos_ar_oficial.png' | relative_url }}" alt="Geoinquiet@s Argentina">
          <h4>Geoinquiet@s Argentina</h4>
          <p><strong>Comunidad Hermana</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back sponsor-colaborador">
          <div class="back-header">
            <img src="{{ '/assets/img/logo_geoinquietos_ar_oficial.png' | relative_url }}" alt="Geoinquiet@s" class="back-logo">
            <h4>Geoinquiet@s Argentina</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Enfoque:</strong> FOSS4G y geomática libre</p>
            <ul>
              <li>💻 Software libre geoespacial</li>
              <li>👨‍💻 Profesionales GIS</li>
              <li>📚 Capacitación técnica</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://t.me/geoinquietosar" target="_blank" class="external-link">
                💬 Telegram Geoinquiet@s
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Municipalidad de Pergamino -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/logo_pergamino.png' | relative_url }}" alt="Municipalidad de Pergamino">
          <h4>Municipalidad de Pergamino</h4>
          <p><strong>Aliado Institucional</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back sponsor-colaborador">
          <div class="back-header">
            <img src="{{ '/assets/img/logo_pergamino.png' | relative_url }}" alt="Pergamino" class="back-logo">
            <h4>Municipalidad de Pergamino</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Experiencia:</strong> 10 años colaborando con OSM</p>
            <ul>
              <li>📊 2,246 ediciones OSM oficiales</li>
              <li>🌐 IDE municipal con 200+ capas</li>
              <li>🎓 Capacitación en IDERA 2025</li>
            </ul>
            <div class="sponsor-metric">
              <a href="http://ide.pergamino.gob.ar" target="_blank" class="external-link">
                🌐 IDE Pergamino
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Gobierno de Misiones -->
    <div class="sponsor-flip-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front">
          <img src="{{ '/assets/img/logo_misiones.png' | relative_url }}" alt="Gobierno de Misiones">
          <h4>Modernización Misiones</h4>
          <p><strong>Aliado Provincial</strong></p>
          <div class="flip-hint">Más información</div>
        </div>
        <div class="sponsor-flip-back sponsor-colaborador">
          <div class="back-header">
            <img src="{{ '/assets/img/logo_misiones.png' | relative_url }}" alt="Misiones" class="back-logo">
            <h4>Gobierno de Misiones</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Programa:</strong> Capacitación OSM 2017</p>
            <ul>
              <li>👥 15+ organismos capacitados</li>
              <li>📚 Curso intensivo 3 días</li>
              <li>🏛️ Metodología inter-institucional</li>
            </ul>
            <div class="sponsor-metric">
              <a href="https://www.modernizacion.misiones.gov.ar/curso-de-mapeo-colaborativo-con-openstreetmap/" target="_blank" class="external-link">
                🌐 Programa OSM Misiones
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Invitación Sponsor Técnico -->
    <div class="sponsor-flip-card invitation-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front invitation-front">
          <div class="invitation-icon">🚀</div>
          <h4>¿Empresa Tecnológica?</h4>
          <p><strong>Sponsor Técnico</strong></p>
          <div class="flip-hint">¡Sumate al encuentro!</div>
        </div>
        <div class="sponsor-flip-back invitation-back">
          <div class="back-header">
            <div class="invitation-icon small">🚀</div>
            <h4>Sponsor Técnico</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Beneficios:</strong> Visibilidad en comunidad OSM</p>
            <ul>
              <li>📱 Logo en sitio web</li>
              <li>🎤 Espacio para charla técnica</li>
              <li>🌐 Networking con desarrolladores</li>
            </ul>
            <div class="sponsor-metric">
              <a href="{{ site.links.wiki }}" target="_blank" class="external-link">
                📧 Contactar para auspiciar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Invitación Sponsor Institucional -->
    <div class="sponsor-flip-card invitation-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front invitation-front">
          <div class="invitation-icon">🏛️</div>
          <h4>¿Organismo Público?</h4>
          <p><strong>Sponsor Institucional</strong></p>
          <div class="flip-hint">¡Sumate al encuentro!</div>
        </div>
        <div class="sponsor-flip-back invitation-back">
          <div class="back-header">
            <div class="invitation-icon small">🏛️</div>
            <h4>Sponsor Institucional</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Beneficios:</strong> Colaboración comunidad-estado</p>
            <ul>
              <li>🤝 Casos de éxito documentados</li>
              <li>📊 Presentación de proyectos</li>
              <li>👥 Red de contactos técnicos</li>
            </ul>
            <div class="sponsor-metric">
              <a href="{{ site.links.wiki }}" target="_blank" class="external-link">
                📧 Contactar para colaborar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Invitación Sponsor Académico -->
    <div class="sponsor-flip-card invitation-card">
      <div class="sponsor-flip-inner">
        <div class="sponsor-flip-front invitation-front">
          <div class="invitation-icon">🎓</div>
          <h4>¿Universidad/Centro?</h4>
          <p><strong>Sponsor Académico</strong></p>
          <div class="flip-hint">¡Sumate al encuentro!</div>
        </div>
        <div class="sponsor-flip-back invitation-back">
          <div class="back-header">
            <div class="invitation-icon small">🎓</div>
            <h4>Sponsor Académico</h4>
          </div>
          <div class="sponsor-details">
            <p><strong>Beneficios:</strong> Investigación y educación</p>
            <ul>
              <li>📚 Contenido académico</li>
              <li>🔬 Casos de estudio</li>
              <li>👨‍🎓 Networking estudiantes</li>
            </ul>
            <div class="sponsor-metric">
              <a href="{{ site.links.wiki }}" target="_blank" class="external-link">
                📧 Contactar para participar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="sponsors-intro">
    <p>El Encuentro OSM Argentina 2025 es posible gracias al apoyo y colaboración de instituciones comprometidas con el mapeo colaborativo y la innovación territorial.</p>
  </div>

</div>

## 🤝 Red de Colaboración

<div class="sponsors-grid">
  <!-- Apoyo Institucional -->
  <div class="sponsor-item sponsor-academico">
    <h4>🏛️ Sponsors Oficiales</h4>
    <p><strong>Apoyo institucional y logístico</strong></p>
    <ul>
      <li>Instalaciones y equipamiento</li>
      <li>Conectividad y servicios</li>
      <li>Promoción institucional</li>
      <li>Personal de apoyo</li>
    </ul>
  </div>
  
  <!-- Partners Académicos -->
  <div class="sponsor-item sponsor-academico">
    <h4>🎓 Partners Académicos</h4>
    <p><strong>Colaboración técnica y metodológica</strong></p>
    <ul>
      <li>Contenidos y ponencias</li>
      <li>Casos de estudio</li>
      <li>Investigación aplicada</li>
      <li>Red de contactos académicos</li>
    </ul>
  </div>
  
  <!-- Colaboradores Técnicos -->
  <div class="sponsor-item sponsor-colaborador">
    <h4>🌐 Colaboradores Técnicos</h4>
    <p><strong>Contribuciones especializadas</strong></p>
    <ul>
      <li>Datos y herramientas</li>
      <li>Plataformas tecnológicas</li>
      <li>Experiencia técnica</li>
      <li>Contenido especializado</li>
    </ul>
  </div>
  
  <!-- Partners de Difusión -->
  <div class="sponsor-item sponsor-colaborador">
    <h4>📢 Partners de Difusión</h4>
    <p><strong>Amplificación del alcance</strong></p>
    <ul>
      <li>Canales de comunicación</li>
      <li>Redes sociales</li>
      <li>Comunidades especializadas</li>
      <li>Medios de comunicación</li>
    </ul>
  </div>
</div>

<div class="collaboration-grid">
  <!-- Apoyo Institucional -->
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="card-icon">🏛️</div>
        <h4>Sponsors Oficiales</h4>
        <p>Apoyo institucional y logístico</p>
        <div class="flip-hint">Haz clic para más info</div>
      </div>
      <div class="flip-card-back">
        <h4>🏛️ Sponsors Oficiales</h4>
        <div class="card-details">
          <h5>Qué aportan:</h5>
          <ul>
            <li>✅ Instalaciones y equipamiento</li>
            <li>✅ Conectividad y servicios</li>
            <li>✅ Promoción institucional</li>
            <li>✅ Personal de apoyo</li>
          </ul>
          <div class="impact-metric">
            <span class="metric-number">100%</span>
            <span class="metric-label">Infraestructura cubierta</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Partners Académicos -->
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="card-icon">🎓</div>
        <h4>Partners Académicos</h4>
        <p>Colaboración técnica y metodológica</p>
        <div class="flip-hint">Haz clic para más info</div>
      </div>
      <div class="flip-card-back">
        <h4>🎓 Partners Académicos</h4>
        <div class="card-details">
          <h5>Contribuciones:</h5>
          <ul>
            <li>📚 Contenidos y ponencias</li>
            <li>📊 Casos de estudio</li>
            <li>🔬 Investigación aplicada</li>
            <li>🤝 Red de contactos académicos</li>
          </ul>
          <div class="impact-metric">
            <span class="metric-number">5+</span>
            <span class="metric-label">Instituciones participantes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Colaboradores Técnicos -->
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="card-icon">🌐</div>
        <h4>Colaboradores Técnicos</h4>
        <p>Contribuciones especializadas</p>
        <div class="flip-hint">Haz clic para más info</div>
      </div>
      <div class="flip-card-back">
        <h4>🌐 Colaboradores Técnicos</h4>
        <div class="card-details">
          <h5>Especialidades:</h5>
          <ul>
            <li>🛠️ Datos y herramientas</li>
            <li>💻 Plataformas tecnológicas</li>
            <li>🎯 Experiencia técnica</li>
            <li>📋 Contenido especializado</li>
          </ul>
          <div class="impact-metric">
            <span class="metric-number">248</span>
            <span class="metric-label">Tareas MapRoulette</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Partners de Difusión -->
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div class="card-icon">📢</div>
        <h4>Partners de Difusión</h4>
        <p>Amplificación del alcance</p>
        <div class="flip-hint">Haz clic para más info</div>
      </div>
      <div class="flip-card-back">
        <h4>📢 Partners de Difusión</h4>
        <div class="card-details">
          <h5>Canales activos:</h5>
          <ul>
            <li>📱 Redes sociales</li>
            <li>💬 Comunidades especializadas</li>
            <li>📺 Medios de comunicación</li>
            <li>🌐 Sitios web temáticos</li>
          </ul>
          <div class="impact-metric">
            <span class="metric-number">1000+</span>
            <span class="metric-label">Personas alcanzadas</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


---

## 🚀 Impacto de la Colaboración

### 📊 Métricas del Encuentro

<div class="metricas-encuentro">
  <div class="metrica-card">
    <div class="metrica-icon">🚀</div>
    <div class="metrica-content">
      <div class="numero">1</div>
      <div class="label">Encuentro inaugural<br><span class="sublabel">OSM Argentina</span></div>
    </div>
  </div>
  
  <div class="metrica-card">
    <div class="metrica-icon">🗺️</div>
    <div class="metrica-content">
      <div class="numero">248</div>
      <div class="label">Tareas MapRoulette<br><span class="sublabel">Proyecto Escuelas</span></div>
    </div>
  </div>
  
  <div class="metrica-card">
    <div class="metrica-icon">🌐</div>
    <div class="metrica-content">
      <div class="numero">2+</div>
      <div class="label">Modalidades<br><span class="sublabel">Presencial + Virtual</span></div>
    </div>
  </div>
  
  <div class="metrica-card">
    <div class="metrica-icon">📋</div>
    <div class="metrica-content">
      <div class="numero">3+</div>
      <div class="label">Casos de éxito<br><span class="sublabel">documentados</span></div>
    </div>
  </div>
</div>

### 🎖️ Casos de Éxito Representados

<div class="casos-exito-grid">
  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🏛️</span>
      <h4>Pergamino</h4>
    </div>
    <p>10 años de colaboración municipal-OSM</p>
  </div>
  
  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🌿</span>
      <h4>Misiones</h4>
    </div>
    <p>Programa provincial de capacitación</p>
  </div>
  
  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🏫</span>
      <h4>Escuelas</h4>
    </div>
    <p>248 instituciones educativas mapeadas</p>
  </div>
  
  <div class="caso-exito-item">
    <div class="caso-header">
      <span class="caso-icon">🔗</span>
      <h4>IDERA</h4>
    </div>
    <p>Conexión con infraestructura de datos oficial</p>
  </div>
</div>

---

<div class="sponsors-call">
  <h3>🤝 ¿Querés ser parte?</h3>
  <p>Si tu organización está interesada en apoyar futuros encuentros de la comunidad OpenStreetMap Argentina, contactanos:</p>
  <p><strong>Coordinador:</strong> Andrés Duhour - <a href="{{ site.chairman.osm_profile }}" target="_blank">Ver perfil OSM</a></p>
  <p><strong>Wiki:</strong> <a href="{{ site.links.wiki }}" target="_blank">Información de contacto</a></p>
  
  <div style="margin-top: 1.5rem;">
    <a href="{{ site.links.wiki }}" target="_blank" class="btn btn-primary">
      📧 Contactar Organización
    </a>
    <a href="{{ '/casos-exito' | relative_url }}" class="btn btn-outline">
      📋 Ver Casos de Éxito
    </a>
  </div>
</div>

---

## 🔗 Enlaces y Recursos

<div class="recursos-casos">
  <div class="recurso-grupo">
    <h4>Colaboradores Principales</h4>
    <a href="{{ site.event.location_url }}" target="_blank">{{ site.event.location }}</a>
    <a href="{{ site.links.wiki }}" target="_blank">OSM Argentina Wiki</a>
    <a href="{{ site.chairman.osm_profile }}" target="_blank">Coordinador OSM Profile</a>
  </div>
  
  <div class="recurso-grupo">
    <h4>Casos de Éxito</h4>
    <a href="https://www.openstreetmap.org/user/MunicipalidadDePergamino" target="_blank">Pergamino OSM</a>
    <a href="https://www.modernizacion.misiones.gov.ar/curso-de-mapeo-colaborativo-con-openstreetmap/" target="_blank">Programa Misiones</a>
    <a href="{{ '/proyecto-escuelas' | relative_url }}" target="_blank">Proyecto Escuelas</a>
  </div>
</div>

---

<div class="casos-footer">
  <h3>🎖️ Red de Colaboración Consolidada</h3>
  <p><strong>El Encuentro OSM Argentina 2025 representa la primera articulación formal entre comunidad, academia y estado en mapeo colaborativo nacional.</strong></p>
  <p>Estos vínculos sientan las bases para el crecimiento sostenible de OpenStreetMap en Argentina.</p>
</div>