# Deployment Strategy - Encuentro OSM 2025

## 🏗️ Arquitectura de Repositorios

### **Testing Environment** 
- **Repositorio:** `manureta/encuentro-2025`
- **URL:** `https://manureta.github.io/encuentro-2025/`
- **Config:** Usa `_config_test.yml` con `baseurl: "/encuentro-2025"`
- **Workflow:** `jekyll-gh-pages-testing.yml`

### **Production Environment**
- **Repositorio:** `osm-ar/encuentro-2025` 
- **URL:** `https://encuentro2025.openstreetmap.org.ar/`
- **Config:** Usa `_config.yml` estándar (sin baseurl)
- **Workflow:** `jekyll-gh-pages-production.yml`

## 🔄 Flujo de Sincronización

### Configuración de Remotes
```bash
origin      git@github.com:manureta/encuentro-2025.git   # Default (testing)
manureta    git@github.com:manureta/encuentro-2025.git   # Testing explicito  
produccion  git@github.com:osm-ar/encuentro-2025.git     # Production
upstream    git@github.com:osm-ar/encuentro-2025.git     # Alias produccion
```

### Comandos de Sincronización

#### Traer cambios de producción → testing
```bash
./sync-repos.sh from-prod
```
- Hace `git fetch produccion`
- Muestra cambios disponibles
- Merge sin pisar cambios locales
- Push automático a manureta

#### Enviar cambios de testing → producción  
```bash
./sync-repos.sh to-prod
```
- Verifica estado limpio
- Muestra cambios a enviar
- Push directo a producción

#### Ver estado
```bash
./sync-repos.sh status
```

## 🚀 Workflows Separados

### Testing Workflow (`jekyll-gh-pages-testing.yml`)
- **Trigger:** Push/PR en `manureta/encuentro-2025`
- **Condición:** `if: github.repository == 'manureta/encuentro-2025'`
- **Config:** `_config.yml` + `_config_test.yml` (con baseurl)
- **Deploy:** `manureta.github.io/encuentro-2025/`

### Production Workflow (`jekyll-gh-pages-production.yml`)
- **Trigger:** Push en `osm-ar/encuentro-2025` 
- **Condición:** `if: github.repository == 'osm-ar/encuentro-2025'`
- **Config:** `_config.yml` solo (sin baseurl)
- **Deploy:** `encuentro2025.openstreetmap.org.ar`

## 📋 Flujo de Trabajo Recomendado

### Para Desarrollo
1. **Trabajar en manureta** (testing environment)
2. **Test en:** `manureta.github.io/encuentro-2025/`
3. **Sincronizar:** `./sync-repos.sh to-prod` cuando esté listo

### Para Hotfixes en Producción
1. **Cambios directos en osm-ar** (via PRs)
2. **Sincronizar:** `./sync-repos.sh from-prod` para traer a testing

### Para Colaboradores Externos
1. **Fork de osm-ar** → **PR a osm-ar** (flujo normal)
2. **Auto-deploy** a producción al mergear
3. **Sync manual** a testing si es necesario

## ⚠️ Consideraciones Importantes

### Diferencias de Configuración
- **Testing:** Rutas con `/encuentro-2025/` prefix
- **Production:** Rutas sin prefix (dominio root)
- **Assets:** Usar `{{ '/path' | relative_url }}` siempre

### Sincronización Segura
- **No force push** nunca
- **Merge strategy** preserva historia
- **Verificación manual** antes de enviar a producción
- **Rollback rápido** via git revert si es necesario

### Workflows Exclusivos
- **Solo uno ejecuta** por repositorio (condición `if:`)
- **No conflictos** entre testing y production
- **Deploy independiente** y paralelo

## 🛠️ Comandos Útiles

```bash
# Ver estado actual
git branch --show-current
git status
git remote -v

# Sincronización manual
git fetch produccion
git merge produccion/main
git push manureta main

# Verificar diferencias
git log --oneline HEAD..produccion/main
git log --oneline produccion/main..HEAD

# Emergency rollback
git revert HEAD
git push produccion main
```

## 🚨 Troubleshooting

### Conflictos de Merge
1. Resolver manualmente
2. `git add .` → `git commit`
3. Continuar sincronización

### Workflow No Ejecuta
- Verificar condición `github.repository`
- Verificar permisos Pages
- Revisar logs en Actions

### URLs Rotas
- **Testing:** Verificar `baseurl` en config
- **Production:** Verificar que no hay `baseurl`
- **Assets:** Usar `relative_url` filter

---

**Configurado:** $(date)
**Versión:** 1.0
**Mantenedor:** Claude Code Assistant