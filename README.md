<h1 align="center">Administrador de turnos - BACKEND - API REST</h1>

API REST creada con Node JS y Express.
Este proyecto se comenzó a desarrollar en vivo por el canal de twitch <a href="https://www.twitch.tv/void_oli" Target="_blank">VOID_OLI</a> junto con la comunidad.

El sistema ofrece una solución para administrar turnos en un micro-emprendimiento. Por lo tanto, en su versión 1 contará con registro de *Turnos* y *Clientes*.

El repositorio del **FRONTEND** es https://github.com/olicodea/admin-turnos-FRONTEND

**Estado del proyecto:**
---

Actualmente cuenta con endpoints para Listar los turnos, crearlos y buscar por id.

**Dependencias:**
---

- express
- mysql
- cors
- dotenv
- nodemon *(cambiar a devDependencies)*

**Base de datos:**
---

En la carpeta database, se encuentra una query para crear la base de datos, con datos iniciales y algunas consultas utiles. *(MySQL)*
