# 🌐 BOBBESPOJA - Sitio Web Personal

## 📋 Descripción
Sitio web personal con estética **Yabujin Core** dividido en dos páginas:
- **Página Positiva**: Sobre quién eres, tus hobbies, proyectos y contacto
- **Página Negativa**: Reflexiones sobre la soledad, pensamientos profundos y desahogo

## 🎨 Características

### Página Positiva
- ✨ Partículas animadas de fondo interactivas
- 🎭 Efectos glitch en títulos y textos
- ⌨️ Máquina de escribir animada
- 🃏 Tarjetas 3D con efecto tilt
- 📊 Contadores animados
- 🌈 Paleta de colores vibrantes (rosa, púrpura, azul, verde, amarillo)
- 🖱️ Cursor personalizado
- 📱 Responsive design

### Página Negativa
- 🌑 Paleta oscura con tonos rojos y púrpuras
- 💭 Reflexiones sobre sentirse solo vs estar solo
- 📝 Pensamientos profundos numerados
- 🕯️ Atmósfera introspectiva y artística
- 🔗 Conexión desde la frase especial en la página positiva

## 📁 Estructura del Proyecto

```
bobbespoja-website/
├── positive-page/
│   ├── html/
│   │   └── index.html          ← Página principal
│   ├── css/
│   │   ├── reset.css           ← Reset de estilos
│   │   ├── main.css            ← Estilos principales
│   │   ├── animations.css      ← Animaciones
│   │   └── glitch.css          ← Efectos glitch
│   ├── js/
│   │   ├── particles.js        ← Partículas de fondo
│   │   ├── typing.js           ← Efecto máquina de escribir
│   │   ├── scroll-animations.js ← Animaciones scroll
│   │   ├── navbar.js           ← Navegación
│   │   ├── counter.js          ← Contadores
│   │   ├── tilt.js             ← Efecto 3D tilt
│   │   ├── glitch-effects.js   ← Efectos glitch
│   │   └── main.js             ← Script principal
│   └── assets/
│       ├── images/             ← Imágenes (vacío - añade las tuyas)
│       ├── videos/             ← Videos (vacío - añade los tuyos)
│       ├── audio/              ← Audio (vacío - añade el tuyo)
│       └── fonts/              ← Fuentes personalizadas
│
└── negative-page/
    ├── html/
    │   └── index.html          ← Página de reflexión
    ├── css/
    │   ├── reset.css           ← Reset de estilos
    │   ├── main.css            ← Estilos oscuros
    │   ├── animations.css      ← Animaciones oscuras
    │   └── glitch.css          ← Glitch oscuro
    ├── js/
    │   ├── particles-dark.js   ← Partículas oscuras
    │   ├── typing-dark.js      ← Typing oscuro
    │   ├── scroll-animations-dark.js
    │   ├── glitch-effects-dark.js
    │   └── main-dark.js        ← Script principal oscuro
    └── assets/
        ├── images/
        ├── videos/
        ├── audio/
        └── fonts/
```

## 🚀 Cómo subir a GitHub Pages

### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com](https://github.com) e inicia sesión
2. Clic en el botón **+** (arriba a la derecha) → **New repository**
3. Nombre: `bobbespoja` (o el que prefieras)
4. Deja todo en default y clic en **Create repository**

### Paso 2: Subir archivos
**Opción A - Por web (más fácil):**
1. En tu nuevo repositorio, clic en **uploading an existing file**
2. Arrastra TODAS las carpetas (`positive-page` y `negative-page`) al área de carga
3. Espera a que se suban todos los archivos
4. Escribe en "Commit changes": `Initial commit`
5. Clic en **Commit changes**

**Opción B - Por Git (si tienes Git instalado):**
```bash
cd bobbespoja-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/bobbespoja.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. En tu repositorio, ve a **Settings** (pestaña arriba)
2. En el menú lateral izquierdo, busca **Pages**
3. En "Source", selecciona **Deploy from a branch**
4. En "Branch", selecciona **main** y carpeta **/(root)**
5. Clic en **Save**
6. Espera 1-2 minutos y recarga la página
7. Verás un mensaje verde: "Your site is live at https://TU_USUARIO.github.io/bobbespoja/"

### Paso 4: Acceder a tu sitio
- **Página principal**: `https://TU_USUARIO.github.io/bobbespoja/positive-page/html/index.html`
- **Página de reflexión**: `https://TU_USUARIO.github.io/bobbespoja/negative-page/html/index.html`

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `main.css`:
```css
:root {
    --color-primary: #ff006e;    /* Cambia este color */
    --color-secondary: #8338ec;  /* Y este */
    /* etc... */
}
```

### Añadir imágenes
1. Coloca tus imágenes en `positive-page/assets/images/`
2. En el HTML, usa: `<img src="../assets/images/tu-imagen.jpg" alt="descripción">`

### Añadir videos
1. Coloca tus videos en `positive-page/assets/videos/`
2. En el HTML, usa:
```html
<video autoplay muted loop>
    <source src="../assets/videos/tu-video.mp4" type="video/mp4">
</video>
```

### Añadir audio
1. Coloca tu audio en `positive-page/assets/audio/`
2. En el HTML, usa:
```html
<audio autoplay loop>
    <source src="../assets/audio/tu-audio.mp3" type="audio/mpeg">
</audio>
```

### Añadir redes sociales
Busca en `index.html` (página positiva) la sección de contacto y reemplaza:
```html
<div class="contact-placeholder">
    <div class="placeholder-dot"></div>
    ...
</div>
```
Por tus links reales:
```html
<div class="social-links">
    <a href="https://instagram.com/tu-usuario">Instagram</a>
    <a href="https://twitter.com/tu-usuario">Twitter</a>
    <a href="mailto:tu-email@ejemplo.com">Email</a>
</div>
```

## 🔧 Tecnologías usadas
- HTML5
- CSS3 (Variables, Grid, Flexbox, Animaciones)
- JavaScript (Vanilla)
- Canvas API (partículas)
- Intersection Observer API (scroll animations)

## 📄 Licencia
Este proyecto es personal y de uso libre para Bobbespoja.

---
**Creado con 💜 por y para Bobbespoja**
