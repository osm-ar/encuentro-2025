#!/bin/bash
# Script para sincronizar entre manureta (testing) y osm-ar (producción)
# Sin pisar cambios, usando merge estratégico

set -e

echo "🔄 Sincronización de repositorios Encuentro OSM 2025"
echo "================================================"

# Función para mostrar estado actual
show_status() {
    echo "📍 Branch actual: $(git branch --show-current)"
    echo "📍 Último commit: $(git log --oneline -1)"
    echo "📍 Estado: $(git status --porcelain | wc -l) archivos modificados"
    echo ""
}

# Función para sincronizar desde producción (osm-ar) hacia testing (manureta)
sync_from_production() {
    echo "📥 SINCRONIZANDO DESDE PRODUCCIÓN (osm-ar) → TESTING (manureta)"
    echo "---------------------------------------------------------------"
    
    # Fetch cambios de producción
    echo "🔄 Obteniendo cambios de producción..."
    git fetch produccion
    
    # Mostrar cambios disponibles
    echo "📋 Cambios disponibles desde producción:"
    git log --oneline HEAD..produccion/main || echo "No hay cambios nuevos"
    echo ""
    
    # Preguntar si continuar
    read -p "¿Continuar con el merge? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Sincronización cancelada"
        return
    fi
    
    # Merge con strategy merge (preserva historia)
    echo "🔀 Mergeando cambios..."
    git merge produccion/main --no-edit || {
        echo "⚠️  Conflictos detectados. Resuelve manualmente y ejecuta 'git commit'"
        return 1
    }
    
    echo "✅ Merge exitoso desde producción"
    
    # Push a manureta
    echo "📤 Enviando cambios a manureta..."
    git push manureta main
    echo "✅ Sincronización completa: producción → testing"
}

# Función para sincronizar desde testing (manureta) hacia producción (osm-ar)
sync_to_production() {
    echo "📤 SINCRONIZANDO DESDE TESTING (manureta) → PRODUCCIÓN (osm-ar)"
    echo "---------------------------------------------------------------"
    
    # Verificar que estamos en main limpio
    if [[ $(git status --porcelain | wc -l) -ne 0 ]]; then
        echo "⚠️  Hay cambios sin commitear. Commit primero:"
        git status --short
        return 1
    fi
    
    # Fetch y verificar estado de producción
    echo "🔄 Verificando estado de producción..."
    git fetch produccion
    
    # Mostrar cambios que se enviarán
    echo "📋 Cambios a enviar a producción:"
    git log --oneline produccion/main..HEAD || echo "No hay cambios para enviar"
    echo ""
    
    # Preguntar si continuar
    read -p "¿Enviar estos cambios a producción? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Envío cancelado"
        return
    fi
    
    # Push a producción
    echo "📤 Enviando cambios a producción..."
    git push produccion main
    echo "✅ Sincronización completa: testing → producción"
}

# Función para mostrar ayuda
show_help() {
    echo "Uso: $0 [opción]"
    echo ""
    echo "Opciones:"
    echo "  from-prod    Traer cambios desde producción (osm-ar) → testing (manureta)"
    echo "  to-prod      Enviar cambios desde testing (manureta) → producción (osm-ar)"
    echo "  status       Mostrar estado actual"
    echo "  help         Mostrar esta ayuda"
    echo ""
    echo "Repositorios configurados:"
    echo "  - manureta:   manureta/encuentro-2025 (testing con baseurl)"
    echo "  - produccion: osm-ar/encuentro-2025 (producción sin baseurl)"
    echo "  - upstream:   osm-ar/encuentro-2025 (alias de produccion)"
}

# Verificar que estamos en el directorio correcto
if [[ ! -d ".git" ]] || [[ ! -f "sitio-web/_config.yml" ]]; then
    echo "❌ Ejecutar desde el directorio raíz del repositorio encuentro-2025"
    exit 1
fi

# Procesar argumentos
case "${1:-help}" in
    "from-prod")
        show_status
        sync_from_production
        ;;
    "to-prod")
        show_status
        sync_to_production
        ;;
    "status")
        show_status
        echo "🔗 Remotes configurados:"
        git remote -v
        ;;
    "help"|*)
        show_help
        ;;
esac