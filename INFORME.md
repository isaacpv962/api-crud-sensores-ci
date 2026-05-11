# Informe de Práctica: Integración Continua con GitHub Actions

**Estudiante:** Hernan Isaac Peñaranda Villarroel
**Docente:** Ing. Marcelo Quispe Ortega
**Universidad:** Universidad Mayor Real y Pontificia de San Francisco Xavier de Chuquisaca (USFX)
**Carrera:** Ingeniería en Ciencias de la Computación

## 1. Descripción del Proyecto
Este proyecto consiste en una API REST desarrollada en Node.js y Express que gestiona operaciones CRUD para un sistema de recolección de datos de sensores IoT. Se ha configurado un pipeline de Integración Continua (CI) utilizando GitHub Actions.

## 2. Pipeline Configurado
El workflow realiza las siguientes validaciones automáticamente en cada *push* o *pull request* hacia la rama `main`:
- Instalación de dependencias (`npm ci`).
- Análisis estático de código mediante ESLint.
- Ejecución de pruebas automatizadas con Jest y Supertest.
- Generación de reportes de cobertura de código.

## 3. Evidencias
*(Agrega aquí tus capturas de pantalla)*
- **Historial de ejecuciones en Actions:** `![Historial](./img/historial.png)`
- **Workflow exitoso:** `![Exito](./img/exito.png)`
- **Workflow fallido:** `![Fallo](./img/fallo.png)`
- **Protección de la rama `main`:** `![Proteccion](./img/proteccion.png)`

## 4. Conclusiones
La implementación de Integración Continua garantiza que el código integrado a la rama principal cumpla con estándares de calidad, se encuentre libre de errores de sintaxis y pase satisfactoriamente la suite de pruebas.