# Deployment Instructions - Encuentro OSM Argentina 2025

## 🚀 Configuración GitHub Pages con Actions

### 1. Configurar Repository Settings (Administradores)

**IMPORTANTE:** Esta configuración debe ser realizada por los administradores del repositorio `osm-ar/encuentro-2025`.

Ir a **Settings** > **Pages** en GitHub:

- **Source:** Deploy from a branch → **GitHub Actions** ⚠️ CRÍTICO
- Esto permite que el workflow `.github/workflows/jekyll-gh-pages.yml` maneje el deployment

**Si no está configurado correctamente, el deploy fallará con:**
```
Error: Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable
Error: Ensure GITHUB_TOKEN has permission "id-token: write"
```

### 2. Verificar Permissions

En **Settings** > **Actions** > **General**:

- **Workflow permissions:** Read and write permissions ✅
- **Allow GitHub Actions to create and approve pull requests** ✅

### 3. Workflow Automático

El workflow se ejecuta automáticamente cuando:
- Se hace push a `main` branch
- Se crea/actualiza pull request
- Se ejecuta manualmente desde Actions tab

### 4. Proceso de Build

```yaml
sitio-web/           # Fuentes Jekyll
├── _config.yml      # Configuración Jekyll
├── _layouts/        # Layouts del sitio  
├── _includes/       # Componentes reutilizables
├── assets/          # CSS, JS, imágenes
├── *.md             # Páginas del sitio
├── Gemfile          # Dependencias Ruby
└── _site/           # Generado automáticamente
```

### 5. URLs del Sitio

- **Sitio oficial:** https://encuentro2025.openstreetmap.org.ar/
- **Sitio de desarrollo:** https://[user].github.io/encuentro-2025/

### 6. Troubleshooting

Si el deploy falla:

#### ❌ Error: ACTIONS_ID_TOKEN_REQUEST_URL
```
Error: Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable
Error: Ensure GITHUB_TOKEN has permission "id-token: write"
```

**Solución:** Los administradores del repositorio deben:
1. Ir a **Settings** > **Pages**
2. Cambiar **Source** de "Deploy from a branch" a **"GitHub Actions"**
3. Verificar que el repositorio tiene habilitadas las GitHub Actions

#### 🔍 Otros Problemas Comunes

1. **Verificar logs** en Actions tab
2. **Baseurl correcto** en `_config.yml`:
   ```yaml
   baseurl: ""  # Para dominio personalizado
   url: "https://encuentro2025.openstreetmap.org.ar"  # Para sitio oficial
   url: "https://[user].github.io/encuentro-2025" # Para desarrollo
   ```
3. **Dependencias** actualizadas en `Gemfile.lock`
4. **Symlinks removidos** (no compatibles con GitHub Pages)

### 7. Desarrollo Local

```bash
cd sitio-web/
bundle install
bundle exec jekyll serve --host 0.0.0.0 --port 4000
# Sitio disponible en http://localhost:4000
```

### 8. Estructura de Branches

- **`main`:** Código fuente y workflow
- **`gh-pages`:** Ya no necesaria (se puede eliminar)
- **Actions** maneja el deployment automáticamente

---

## 📝 Notas

- El workflow usa **Ruby 3.1** y cache de bundler para builds rápidos
- **Jekyll 3.10.0** compatible con GitHub Pages themes
- **Artifact upload** optimizado para Pages deployment
- **Baseurl dinámico** se configura automáticamente

Para updates al sitio: simplemente hacer push a `main` branch.