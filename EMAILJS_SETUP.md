# Configuración de EmailJS - Guía Paso a Paso

## 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" (Registrarse)
3. Completa el formulario con tu email y contraseña
4. Verifica tu email (revisa spam si no llega)

## 2. Configurar un Email Service

1. Una vez logeado, ve a la sección **"Email Services"** en el menú izquierdo
2. Haz clic en **"Add New Service"**
3. Elige tu proveedor de email (Gmail recomendado):
   - Para Gmail: Selecciona "Gmail"
   - Conecta tu cuenta de Gmail
   - Autoriza los permisos necesarios
4. **Copia el Service ID** que aparece (ejemplo: `service_abc123xyz`)

## 3. Crear un Email Template

1. Ve a la sección **"Email Templates"** en el menú izquierdo
2. Haz clic en **"Create New Template"**
3. Configura el template con este contenido:

### Subject (Asunto):
```
Nuevo mensaje de {{from_name}} - Portfolio
```

### Content (Contenido del email):
```
Has recibido un nuevo mensaje desde tu portfolio:

De: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este email fue enviado desde el formulario de contacto de tu portfolio.
```

4. En la parte superior derecha, encontrarás el **Template ID** (ejemplo: `template_xyz789abc`)
5. **Copia este Template ID**
6. Haz clic en **"Save"** para guardar el template

## 4. Obtener tu Public Key

1. Ve a la sección **"Account"** en el menú izquierdo
2. Selecciona la pestaña **"General"**
3. Busca la sección **"Public Key"**
4. **Copia tu Public Key** (ejemplo: `AbCdEfGhIjKlMnOpQr`)

## 5. Configurar las variables de entorno

1. Abre el archivo `.env` en la raíz del proyecto
2. Reemplaza los placeholders con tus credenciales reales:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_APP_EMAILJS_TEMPLATE_ID=template_xyz789abc
VITE_APP_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOpQr
```

3. **Guarda el archivo**

## 6. Reiniciar el servidor de desarrollo

Si el servidor está corriendo, reinícialo para que cargue las nuevas variables:

```bash
# Detener el servidor (Ctrl+C)
# Iniciar nuevamente
npm run dev
```

## 7. Probar el formulario

1. Ve a tu portfolio en [http://localhost:5173](http://localhost:5173)
2. Navega a la sección "Contacto"
3. Completa el formulario con datos de prueba
4. Haz clic en "Enviar"
5. Deberías recibir el email en la cuenta que configuraste en EmailJS

## Notas importantes

- ⚠️ **NUNCA** subas el archivo `.env` a GitHub
- ✅ El archivo `.env` ya está en `.gitignore`
- 📧 Revisa tu carpeta de spam la primera vez
- 🆓 EmailJS tiene un plan gratuito con 200 emails/mes
- 📊 Puedes ver las estadísticas de envío en el dashboard de EmailJS

## Solución de problemas

### El email no llega:
1. Verifica que las credenciales en `.env` sean correctas
2. Revisa la consola del navegador (F12) para ver errores
3. Verifica tu cuenta de EmailJS para ver si hay límites alcanzados
4. Revisa la carpeta de spam

### Error de CORS:
- Asegúrate de que tu dominio esté autorizado en EmailJS
- En "Email Services" > Settings, agrega `localhost` a la lista de dominios permitidos

### Variables de entorno no se cargan:
- Asegúrate de que las variables empiecen con `VITE_APP_`
- Reinicia el servidor de desarrollo después de modificar `.env`
