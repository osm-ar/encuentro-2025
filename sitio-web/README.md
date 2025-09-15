# Sitio Web - Encuentro OSM Argentina 2025

## 🌐 Sitio Web Jekyll

Sitio web estático generado con Jekyll para GitHub Pages del **Encuentro de la Comunidad de OpenStreetMap de Argentina**.

### 🚀 Desarrollo Local

```bash
# Instalar dependencias
bundle install

# Servir localmente
bundle exec jekyll serve

# Acceder en: http://localhost:4000
```

### 📁 Estructura

```
sitio-web/
├── _config.yml              # Configuración Jekyll
├── index.md                 # Página principal
├── _layouts/                # Templates HTML
│   ├── default.html         # Layout base
│   └── page.html           # Layout páginas
├── assets/                  # Recursos estáticos
│   ├── css/main.scss        # Estilos principales
│   ├── js/main.js          # JavaScript
│   └── img/                # Imágenes
├── Gemfile                  # Dependencias Ruby
└── README.md               # Este archivo
```

### 🎯 Características

- ✅ **Responsive design** - Optimizado móvil
- ✅ **Mapa interactivo** - Leaflet con OSM tiles
- ✅ **SEO optimizado** - Meta tags y structured data
- ✅ **GitHub Pages ready** - Deploy automático
- ✅ **OSM branding** - Colores y estilo coherentes

### 🔧 Configuración

La configuración principal está en `_config.yml`:

```yaml
# Event details
event:
  name: "Encuentro OSM Argentina 2025"
  date: "2025-09-27"
  location: "Universidad Nacional de Luján"
  coordinates: [-34.578776, -59.086683]
```

### 🌍 Deploy

Para GitHub Pages:

1. Crear repositorio `osm-argentina/encuentro-2025`
2. Habilitar GitHub Pages desde `main` branch
3. Push del código → Deploy automático

### 📊 Próximas Funcionalidades

- [ ] Widget MapRoulette embebido
- [ ] Galería de fotos casos de éxito
- [ ] Countdown hacia el evento
- [ ] Formulario registro participantes
- [ ] Blog/noticias del encuentro
- [ ] Integración redes sociales

### 🎨 Personalización

Los colores principales están definidos en `assets/css/main.scss`:

- Primary: `#2E5C8A` (Azul OSM)
- Accent: `#F4C430` (Amarillo dorado del flyer)
- Secondary: `#75AADB` (Azul claro)

### 📱 Responsive

El sitio está optimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (< 768px)

---

**Basado en Jekyll para máxima compatibilidad con el ecosistema OpenStreetMap**