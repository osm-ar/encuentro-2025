# Sitio Web - Encuentro OSM Argentina 2025

## 🌐 Sitio Web Jekyll

Sitio web estático generado con Jekyll para GitHub Pages del **Encuentro de la Comunidad de OpenStreetMap de Argentina**.

**🔗 Sitio en vivo:** [https://manureta.github.io/encuentro-2025/](https://manureta.github.io/encuentro-2025/)

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
├── programa.md              # Programa del encuentro
├── casos-exito.md           # Casos de éxito Pergamino y Misiones
├── proyecto-escuelas.md     # Proyecto Escuelas OSM
├── sponsors.md              # Sponsors y colaboradores
├── inscripcion.md           # Formulario de inscripción
├── faq.md                   # Preguntas frecuentes
├── participar.md            # Cómo participar
├── flyer.md                 # Material de difusión
├── _layouts/                # Templates HTML
│   ├── default.html         # Layout base con navegación
│   └── page.html           # Layout para páginas de contenido
├── assets/                  # Recursos estáticos
│   ├── css/main.scss        # Estilos principales
│   ├── js/main.js          # JavaScript e interactividad
│   └── img/                # Logos, flyers e imágenes
├── Gemfile                  # Dependencias Ruby
└── README.md               # Este archivo
```

### 🎯 Características Implementadas

- ✅ **Responsive design** - Optimizado móvil con menú hamburguesa
- ✅ **Mapa interactivo** - Leaflet con OSM tiles y ubicación del evento
- ✅ **SEO optimizado** - Meta tags y Open Graph completos
- ✅ **GitHub Pages ready** - Deploy automático con GitHub Actions
- ✅ **OSM branding** - Colores y estilo coherentes
- ✅ **Navegación accesible** - Skip links y ARIA labels
- ✅ **Formulario inscripción** - KoBoToolbox embebido
- ✅ **Sponsors con flip cards** - Animaciones CSS3 interactivas
- ✅ **FAQ completa** - Preguntas frecuentes detalladas
- ✅ **Casos de éxito** - Pergamino y Misiones documentados
- ✅ **Proyecto Escuelas** - MapRoulette integrado
- ✅ **Material difusión** - Flyer oficial descargable

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

**Sitio de desarrollo:** [https://manureta.github.io/encuentro-2025/](https://manureta.github.io/encuentro-2025/)

Para GitHub Pages:

1. Fork o clonar repositorio `manureta/encuentro-2025`
2. Habilitar GitHub Pages desde `main` branch en Settings
3. Configurar custom domain si es necesario
4. Push del código → Deploy automático con GitHub Actions

### 📊 Próximas Funcionalidades

- [ ] Countdown timer hacia el evento
- [ ] Galería de fotos casos de éxito
- [ ] Blog/noticias del encuentro
- [ ] Dashboard de progreso MapRoulette
- [ ] Testimonios de participantes
- [ ] Analytics y métricas de participación

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