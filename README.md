# Cumple Brillith ✦

Página web de cumpleaños personal, estática y móvil-first.

## Tecnologías
- HTML5
- CSS3
- JavaScript puro
- Sin XAMPP
- Sin base de datos
- Sin frameworks obligatorios

## Abrir
Puedes abrir `index.html` directamente en el navegador.

## Modo prueba
Agrega `?test=1` al final:
`index.html?test=1`

Esto simula que ya llegó el cumpleaños para probar el mensaje final, las velas y la experiencia.

## Servidor local recomendado
Desde PowerShell, dentro de esta carpeta:

```powershell
python -m http.server 8080
```

Luego:
`http://localhost:8080/?test=1`

## Personalización
Edita principalmente:
`js/contenido.js`

Ahí están:
- nombre
- fecha del cumpleaños
- fecha de inicio de la relación
- etapas de niñez
- familia
- momentos juntos
- carta
- sorpresa final

Las fotos reales se colocarán en:
- `fotos/ninez/`
- `fotos/familia/`
- `fotos/nosotros/`

Luego se ponen sus rutas en `contenido.js`.

## Publicación
El proyecto está preparado para hosting estático como Cloudflare Pages.
