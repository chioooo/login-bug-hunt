# Login Bug Hunt

Proyecto Angular 22 con una pantalla de login.

## Requisitos

- **Node.js 22.22.3 o superior** (rama 22), **o 24.15.0 o superior** (rama 24).
  Con versiones anteriores, Angular 22 no arranca.
  La versión recomendada está en [.nvmrc](.nvmrc) (24.21.0).
  Si usas `nvm`, ejecuta `nvm install` y `nvm use` en la carpeta del proyecto.
  Con nvm-windows: `nvm install 24.21.0` y `nvm use 24.21.0`.
- **npm** (viene incluido con Node).

Comprueba tus versiones con:

```bash
node -v
npm -v
```

### Windows: error "la ejecución de scripts está deshabilitada"

Si PowerShell muestra ese error al ejecutar `npm`, tienes dos opciones:

- Usar `npm.cmd` en lugar de `npm` (por ejemplo, `npm.cmd start`).
- O permitir scripts solo para tu usuario (no requiere administrador):

  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```

## Cómo ejecutarlo

```bash
npm install
npm start
```

Después abre http://localhost:4200 en el navegador.

## Ejercicio

Este componente de login tiene varios errores. Encuéntralos y corrígelos.

**Credenciales de prueba:** `admin` / `1234`

> **Pista:** que compile no significa que funcione; revisa también la consola del navegador.
