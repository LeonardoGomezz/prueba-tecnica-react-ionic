# **Prueba Técnica: React + Ionic**


## **Descripción del Proyecto**

Esta aplicación multiplataforma permite a los usuarios buscar productos en una tienda en línea y obtener información básica sobre ellos, consumiendo datos desde la API pública proporcionada por [FakeAPI de Platzi](https://fakeapi.platzi.com/). Además de la funcionalidad básica de búsqueda, los usuarios pueden marcar productos como "Productos deseados", visualizarlos en una lista separada y gestionarlos de manera persistente.

---

## **Requerimientos Técnicos**

1. Utilizar **Ionic** y **React**.
2. Implementar un sistema de gestión de estado para manejar los "Productos deseados".
3. Incluir las siguientes funcionalidades:
   - Agregar y eliminar productos de la lista de "deseados".
   - Persistir esta información localmente.
   - Ordenar la lista de "deseados" por nombre, fecha agregada y precio.
4. Crear una pantalla separada para mostrar la lista de "Productos deseados".
5. Implementar manejo de errores y mostrar mensajes personalizados para el usuario.
6. Garantizar un diseño **responsivo** y optimizado para diferentes tamaños de pantalla.

---

---

## **Decisiones de Diseño y Arquitectura**

### **Diseño**
- **Interfaz:** Se utilizó **Ionic + React** para aprovechar componentes preconstruidos y asegurar una experiencia consistente y responsiva en dispositivos móviles y pantallas más grandes.
- **Componentización:** 
  - `ProductCard`: Componente que muestra los detalles de los productos.
  - `useFavorites`: Hook personalizado para manejar la lógica de los productos "deseados".
  - `useProducts`: Hook para obtener productos, realizar búsquedas y gestionar la paginación.

### **Arquitectura**
1. **Gestión de Estado:**
   - Utilización de `useState` para manejar el estado local de los "productos deseados".
   - **Persistencia:** Se usa `localStorage` para mantener la lista de "productos deseados" entre sesiones.
2. **Funciones Auxiliares:**
   - **`formatNumberCurrency`:** Da formato al precio en moneda local (COP).
   - **`paginationFunction`:** Implementa la paginación para suplir la falta de soporte en la API, permitiendo navegar entre productos.

---

## **Estructura del Proyecto**

📁 src/ 
├── 📁 components/ # Componentes reutilizables (e.g., ProductCard) 
├── 📁 hooks/ # Hooks personalizados (e.g., useFavorites, useProducts) 
├── 📁 pages/ # Páginas principales (e.g., Home, Favorites) 
├── 📁 service/ # Módulo para realizar peticiones a la API 
├── 📁 utils/ # Funciones auxiliares (e.g., formatNumberCurrency, paginationFunction) 
└── App.tsx # Configuración principal de la aplicación


---

## **Instalación**

Sigue estos pasos para levantar el proyecto localmente:

1. Clona el repositorio:
   git clone https://github.com/usuario/prueba-tecnica-react-ionic.git
2. Abre el proyecto en visual studio code e instala las dependencias:
   npm install
3. ejecuta el proyecto:
   abre la terminal y escribre el siguiente comando: ionic serve

## **Probar la Aplicación en Android**

1. **Preparar el Proyecto para Android:**
   - Genera la plataforma Android con Capacitor:  
     `ionic capacitor add android`
2. **Sincronizar Cambios:**
   - Asegúrate de sincronizar los cambios del proyecto web al proyecto nativo:  
     `ionic capacitor sync android`
3. **Abrir en Android Studio:**
   - Abre Android Studio y selecciona la opción de abrir un proyecto. Luego selecciona la carpeta `android` que está en la raíz del proyecto.
4. **Ejecutar:**
   - En Android Studio, selecciona un dispositivo (emulador o físico) y haz clic en el botón "Run" para instalar y ejecutar la aplicación.

## **Probar la Aplicación en iOS**

Es necesario tener instalado **Xcode**.

1. **Preparar el Proyecto para iOS:**
   - Genera la plataforma iOS con Capacitor:  
     `ionic capacitor add ios`
2. **Sincronizar Cambios:**
   - Asegúrate de sincronizar los cambios del proyecto web al proyecto nativo:  
     `ionic capacitor sync ios`
3. **Abrir en Xcode:**
   - Abre Xcode y selecciona la opción de abrir un proyecto. Luego selecciona la carpeta `ios` que está en la raíz del proyecto.
4. **Ejecutar:**
   - En Xcode, selecciona un dispositivo (emulador o físico) y haz clic en el botón "Run" para instalar y ejecutar la aplicación.

Es necesaria la instalacion de Xcode:

1. Preparar el Proyecto para IOS:
   Genera la plataforma iOS con Capacitor: ionic capacitor add ios
2. Sincronizar Cambios:
   Asegúrate de sincronizar cambios del proyecto web al proyecto nativo: ionic capacitor sync ios
3. Abrir en Android Studio:
   para ello cuando estes en Xcode studio selecciona la opcion abrir projecto y selecciona la carpeta ios que esta en la raiz del proyecto
4. Ejecutar:
   Desde Xcode: Selecciona un dispositivo (emulador o físico). Haz clic en el botón Run para instalar y ejecutar la app.

## **Nota adicional**
Para probar en un dispositivo físico (Android o iOS):

- **Android:** Asegúrate de tener habilitada la opción de **depuración USB** en tu dispositivo.
- **iOS:** Necesitas un **perfil de aprovisionamiento válido** y un **Apple Developer ID** para ejecutar la app en dispositivos físicos.

Para probar en un dispositivo físico (Android o iOS):

1. Android: Asegúrate de tener habilitada la opción de depuración USB.
2. iOS: Necesitas un perfil de aprovisionamiento válido y un Apple Developer ID para ejecutar la app en dispositivos físicos.

## **Contacto**

- **Autor:** Leonardo José Gómez Gómez
- **Correo Electrónico:** leonardogomez306@gmail.com
- **Repositorio en GitHub:** [Prueba Técnica React + Ionic](https://github.com/usuario/prueba-tecnica-react-ionic)
