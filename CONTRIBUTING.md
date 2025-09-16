# Guía de Contribución - Encuentro OSM Argentina 2025

¡Gracias por tu interés en contribuir al Encuentro OSM Argentina 2025! Esta guía te ayudará a participar en el proyecto.

## 🎯 Formas de Contribuir

### 🌐 Sitio Web
- Mejoras en diseño y usabilidad
- Corrección de errores y bugs
- Nuevas funcionalidades
- Optimizaciones de rendimiento
- Documentación

### 📝 Contenido
- Correcciones en textos
- Traducción de contenidos
- Casos de éxito adicionales
- Material de difusión
- FAQ y documentación

### 🗺️ Mapeo
- Participar en challenges MapRoulette
- Validación de datos OSM
- Preparación de nuevas tareas
- Documentación de procesos

## 🔄 Workflow de Desarrollo

### 1. Setup Inicial
```bash
# Fork del repositorio osm-ar/encuentro-2025
git clone https://github.com/tu-usuario/encuentro-2025.git
cd encuentro-2025

# Agregar upstream remote
git remote add upstream https://github.com/osm-ar/encuentro-2025.git
```

### 2. Desarrollo del Sitio Web
```bash
cd sitio-web/

# Instalar dependencias
bundle install

# Desarrollo local
bundle exec jekyll serve

# Sitio disponible en http://localhost:4000
```

### 3. Crear Nueva Funcionalidad
```bash
# Crear rama desde main actualizado
git checkout main
git pull upstream main
git checkout -b feature/nombre-descriptivo

# Realizar cambios
# Probar localmente
# Commit con mensaje descriptivo
git commit -m "Add: descripción clara del cambio"
```

### 4. Pull Request
```bash
# Push a tu fork
git push origin feature/nombre-descriptivo

# Crear PR desde GitHub hacia osm-ar/encuentro-2025
```

## 📋 Estándares y Convenciones

### 🎨 Código CSS/SCSS
- Seguir estructura existente en `assets/css/main.scss`
- Usar variables CSS definidas para colores
- Mantener responsividad móvil
- Comentarios para secciones complejas

### 🏗️ HTML/Liquid
- Usar templates y includes existentes
- Mantener accesibilidad (ARIA labels, alt text)
- Estructura semántica clara
- Relative URLs con filtros Jekyll

### 📝 Markdown
- Headers jerárquicos consistentes
- Enlaces relativos para navegación interna
- Emojis para mejorar legibilidad
- Metadatos YAML frontmatter

### 🎯 JavaScript
- Código vanilla JS o librerías mínimas
- Progressive enhancement
- Funcionalidad core sin dependencia de JS
- Comentarios para funciones complejas

## 🧪 Testing y Validación

### ✅ Antes de Enviar PR
- [ ] Sitio se construye sin errores localmente
- [ ] Todas las páginas cargan correctamente
- [ ] Enlaces internos funcionan
- [ ] Responsive en móvil/tablet/desktop
- [ ] Imágenes tienen alt text
- [ ] No hay errores de consola

### 📱 Testing Mobile
```bash
# Servir en todas las interfaces
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Probar en dispositivos móviles
# http://tu-ip-local:4000
```

### 🔍 Validación HTML
- [W3C Validator](https://validator.w3.org/)
- [WAVE Accessibility](https://wave.webaim.org/)

## 🐛 Reportar Issues

### 🚨 Bugs
- **Título:** Descripción clara y concisa
- **Pasos:** Cómo reproducir el problema
- **Esperado vs Actual:** Qué debería pasar vs qué pasa
- **Entorno:** Navegador, dispositivo, OS
- **Screenshots:** Si es visual

### 💡 Sugerencias
- **Contexto:** Por qué sería útil
- **Propuesta:** Descripción de la mejora
- **Casos de uso:** Quién se beneficiaría
- **Referencias:** Enlaces o ejemplos

## 🎨 Guía de Diseño

### 🎨 Paleta de Colores
```scss
$primary-color: #2E5C8A;    // Azul OSM
$accent-color: #F4C430;     // Amarillo dorado
$secondary-color: #75AADB;  // Azul claro
$success-color: #28a745;    // Verde
$warning-color: #ffc107;    // Amarillo warning
```

### 📱 Breakpoints
```scss
$mobile: 768px;
$tablet: 1024px;
$desktop: 1200px;
```

### 🎭 Componentes Reutilizables
- **Flip cards:** Para sponsors y casos de éxito
- **Botones:** Primarios y outline consistentes
- **Métricas:** Cards con iconos y números
- **Call to action:** Secciones destacadas

## 📞 Contacto y Soporte

### 💬 Canales de Comunicación
- **GitHub Issues:** Para bugs y sugerencias técnicas
- **Telegram @osm_ar:** Para discusión general
- **Wiki OSM:** Para documentación oficial

### 👨‍💼 Coordinación
- **Chairman:** Andrés Duhour
- **OSM Profile:** https://www.openstreetmap.org/user/AndresDuhour
- **Organización:** OSM Argentina

## 🏆 Reconocimientos

Las contribuciones se reconocerán en:
- Commits con co-authored-by
- Créditos en sitio web
- Agradecimientos en documentación
- Participación en evento

---

**¡Gracias por contribuir al crecimiento de la comunidad OpenStreetMap Argentina!** 🇦🇷🗺️