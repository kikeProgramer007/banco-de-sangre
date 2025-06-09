# 🚀 Instalación AdminLTE 2 en Angular 20

## 📋 Requisitos Previos
- Node.js 18+ 
- npm o yarn
- Angular CLI 20+

## 🎯 Paso 1: Crear Proyecto Angular 20

```bash
# Instalar Angular CLI (si no lo tienes)
npm install -g @angular/cli@20

# Crear nuevo proyecto
ng new adminlte-angular --routing --style=scss

# Navegar al proyecto
cd adminlte-angular
```

## 📦 Paso 2: Instalar AdminLTE 2 y Dependencias

```bash
# Instalar AdminLTE 2
npm install admin-lte@^2.4.18

# Instalar jQuery y Bootstrap (requeridos por AdminLTE 2)
npm install jquery@^3.6.0
npm install bootstrap@^3.4.1

# Instalar tipos de TypeScript
npm install --save-dev @types/jquery
```

## ⚙️ Paso 3: Configurar angular.json

Edita el archivo `angular.json` para incluir los estilos y scripts:

```json
{
  "projects": {
    "adminlte-angular": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/admin-lte/dist/css/AdminLTE.min.css",
              "node_modules/admin-lte/dist/css/skins/_all-skins.min.css",
              "src/styles.scss"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/admin-lte/dist/js/adminlte.min.js"
            ]
          }
        }
      }
    }
  }
}
```

## 🎨 Paso 4: Configurar Estilos Globales

Actualiza `src/styles.scss`:

```scss
/* AdminLTE Global Styles */
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~admin-lte/dist/css/AdminLTE.min.css';
@import '~admin-lte/dist/css/skins/_all-skins.min.css';

/* Font Awesome (opcional) */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

/* Estilos personalizados */
body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Ajustes para Angular */
.wrapper {
  min-height: 100vh;
}
```

## 🛠️ Paso 5: Crear Estructura de Componentes

```bash
# Crear componentes del layout
ng generate component layout/header
ng generate component layout/sidebar
ng generate component layout/footer
ng generate component layout/main-layout

# Crear componentes de páginas
ng generate component pages/dashboard
ng generate component pages/users
ng generate component auth/login
```

## 🏗️ Paso 6: Implementar Main Layout

Crea el archivo `src/app/layout/main-layout/main-layout.html`:

```html
<div class="wrapper">
    <!-- Header -->
    <app-header></app-header>
  
    <!-- Sidebar -->
    <app-sidebar></app-sidebar>
  
    <!-- Content Wrapper -->
    <div class="content-wrapper">
      <!-- Content Header -->
      <section class="content-header">
        <h1>
          Dashboard
          <small>Control panel</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="active">Dashboard</li>
        </ol>
      </section>
  
      <!-- Main content -->
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </div>
  
    <!-- Footer -->
    <app-footer></app-footer>
  </div>
```

## 🎯 Paso 6.1: Configurar TypeScript

`src/app/layout/main-layout/main-layout.ts`:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    Header,
    Sidebar,
    Footer
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}

```

## 📱 Paso 7: Implementar Header Component

`src/app/layout/header/header.component.html`:

```html
<header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
  
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
  
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account Menu -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="/user.png" class="user-image" alt="User Image">
              <span class="hidden-xs">Alexander Pierce</span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <img src="/user.png" class="img-circle" alt="User Image">
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
```

## 🗂️ Paso 8: Implementar Sidebar Component

`src/app/layout/sidebar/sidebar.component.html`:

```html
<aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MENU</li> 
        
        <li class=" treeview">
           <!-- <li class="active treeview">-->
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <!--  <li class="active"><a routerLink="/dashboard"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>-->
            <li><a routerLink="/dashboard"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a href="#"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul>
        </li>
  
        <li class="treeview">
          <a href="#">
            <i class="fa fa-users"></i>
            <span>Users</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a routerLink="/users"><i class="fa fa-circle-o"></i> User List</a></li>
            <li><a href="#"><i class="fa fa-circle-o"></i> Add User</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
```

## 🦶 Paso 9: Implementar Footer Component

`src/app/layout/footer/footer.component.html`:

```html
<footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 2.4.18
    </div>
    <strong>Copyright &copy; 2024 <a href="#">Your Company</a>.</strong> All rights reserved.
</footer>
```

## 🛣️ Paso 10: Configurar Routing

`src/app/app.routes.ts`:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';

export const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: Users }
    ]
  },
  { 
    path: 'login', 
    loadComponent: () => import('./auth/login/login').then(c => c.Login)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## 📄 Paso 11: Actualizar App Component

`src/app/app.html`:

```html
<router-outlet></router-outlet>
```

## 🎯 Paso 12: Configurar TypeScript

`src/app/layout/header/header.ts`:

```typescript
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Inicializar AdminLTE después de que la vista se cargue
    if (typeof $ !== 'undefined') {
      $('.dropdown-toggle').dropdown();
    }
  }
}

```
## 🎯 Paso 12.1: Configurar TypeScript

`src/app/layout/footer/footer.ts`:
```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor() { }

  ngOnInit(): void {
  }
}
```
## 🎯 Paso 12.2: Configurar TypeScript

`src/app/layout/sidebar/sidebar.ts`:
```typescript

import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  constructor() { }

  ngOnInit(): void {
  }
}
```

## 🎨 Paso 13: Agregar Imágenes de Usuario

Crea la carpeta `src/assets/img/` y agrega una imagen de usuario predeterminada o descarga desde:
```
https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg
```

## 🚀 Paso 14: Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# El proyecto estará disponible en http://localhost:4200
```

## 🔧 Paso 15: Agregar en index.html

Para funcionalidades avanzadas, puedes agregar en `src/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Frontend</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body class="hold-transition">
  <app-root></app-root>
</body>
</html>
```
## 🔧 Paso 16: en main.ts debe estar asi 

agregar en `src/main.ts`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import  {routes}  from './app/app.routes';

  bootstrapApplication(App, {
    providers: [
      provideRouter(routes)
    ]
  }).catch(err => console.error(err));
```

## 🔧 Paso 17: en styles.scss debe estar asi 

agregar en `src/styles.scss`:

```scss
/* src/styles.scss - Versión corregida para Angular 20 */

/* AdminLTE Global Styles - SIN la sintaxis ~ */
/* Bootstrap ya está incluido en angular.json, no necesitamos importarlo aquí */

/* Font Awesome desde CDN */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

/* Agregar estos estilos al archivo styles.scss después de los estilos existentes */
/* Compatible con AdminLTE 2 y Bootstrap 3 */

/* Variables de colores para el tema verde */
$verde-principal: #008d4c;  /* Verde de AdminLTE - mismo color para header y sidebar */
 /* $verde-oscuro: #008d4c;    Para hover y efectos */
$verde-oscuro: #008d4c;     /* Para hover y efectos */

$verde-claro: #00c068;
$texto-blanco: #ffffff;
$verde-hover: rgba(0, 0, 0, 0.5);  /* Hover con transparencia */

/* ========== PERSONALIZACIÓN DEL HEADER ========== */
.main-header {
  /* Logo */
  .logo {
    background-color: $verde-principal !important;  /* Mismo verde que el sidebar */
    color: $texto-blanco !important;
    border-bottom: 0 solid transparent;
    
    &:hover,
    &:focus {
      background-color: $verde-principal !important;  /* Mantiene el mismo color */
      color: $texto-blanco !important;
      text-decoration: none;
    }
    
    /* Logo mini para sidebar colapsado */
    .logo-mini {
      color: $texto-blanco !important;
    }
  }
  
  /* Navbar */
  .navbar {
    background-color: $verde-principal !important;
    
    /* Botón toggle del sidebar */
    .sidebar-toggle {
      color: $texto-blanco !important;
      
      &:hover,
      &:focus,
      &:active {
        background-color: rgba(0, 0, 0, 0.1) !important;
        color: $texto-blanco !important;
      }
    }
  }
  
  /* Menu personalizado del navbar */
  .navbar-custom-menu {
    > .nav > li > a {
      color: $texto-blanco !important;
      
      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.1) !important;
        color: $texto-blanco !important;
      }
    }
    
    /* Dropdown del usuario */
    .dropdown.user-menu {
      > .dropdown-toggle {
        color: $texto-blanco !important;
        
        &:hover,
        &:focus {
          background-color: rgba(0, 0, 0, 0.1) !important;
        }
        
        > .hidden-xs {
          color: $texto-blanco !important;
        }
      }
    }
  }
}

/* ========== PERSONALIZACIÓN DEL SIDEBAR ========== */
.main-sidebar,
.left-side {
  background-color: $verde-principal !important;  /* Mismo verde que el header */
  
  /* Panel de usuario */
  .user-panel {
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    
    > .info {
      color: $texto-blanco;
      
      > p {
        color: $texto-blanco;
        font-weight: 600;
        margin-bottom: 5px;
      }
      
      > a {
        color: rgba(255, 255, 255, 0.6);
        text-decoration: none;
        padding-right: 5px;
        
        &:hover {
          color: $texto-blanco;
        }
        
        > .fa,
        > .ion,
        > .glyphicon {
          margin-right: 3px;
        }
      }
    }
  }
  
  /* Estilos para el sidebar */
  .sidebar {
    /* Menu del sidebar */
    .sidebar-menu {
      list-style: none;
      margin: 0;
      padding: 0;
      
      /* Header del menu */
      > li.header {
        color: rgba(255, 255, 255, 0.4);
        background: rgba(0, 0, 0, 0.2);
        padding: 10px 25px 10px 15px;
        font-size: 12px;
        text-transform: uppercase;
      }
      
      /* Items del menu */
      > li {
        position: relative;
        margin: 0;
        padding: 0;
        
        > a {
          color: rgba(255, 255, 255, 0.9);
          border-left: 3px solid transparent;
          display: block;
          padding: 12px 5px 12px 15px;
          text-decoration: none;
          
          &:hover {
            background-color: $verde-principal !important;
            border-left-color: $verde-claro !important;
            color: $texto-blanco !important;
          }
          
          /* Iconos */
          > .fa,
          > .glyphicon,
          > .ion {
            width: 20px;
            color: rgba(255, 255, 255, 0.6);
          }
        }
        
        /* Items activos */
        &.active > a {
          background-color: $verde-principal !important;
          border-left-color: $verde-claro !important;
          color: $texto-blanco !important;
          font-weight: 600;
        }
      }
      
      /* Treeview */
      .treeview-menu {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.2);
        
        > li {
          margin: 0;
          
          > a {
            color: rgba(255, 255, 255, 0.6);
            padding: 5px 5px 5px 15px;
            display: block;
            text-decoration: none;
            margin-left: 10px;
            
            &:hover {
              color: $texto-blanco !important;
              background-color: transparent !important;
            }
            
            > .fa,
            > .glyphicon,
            > .ion {
              width: 20px;
              color: rgba(255, 255, 255, 0.6);
            }
          }
          
          &.active > a {
            color: $texto-blanco !important;
            font-weight: 600;
          }
        }
      }
      
      /* Cuando el treeview está abierto */
      > li.active > .treeview-menu {
        display: block;
      }
      
      /* Flecha del treeview */
      > li > a > .pull-right-container {
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -7px;
        
        > .fa-angle-left,
        > .fa-angle-down {
          color: rgba(255, 255, 255, 0.6);
          transition: transform 0.3s linear;
        }
      }
      
      > li.active > a > .pull-right-container > .fa-angle-left {
        transform: rotate(-90deg);
      }
    }
  }
}

/* ========== ESTILOS PARA MODO COLAPSADO ========== */
@media (min-width: 768px) {
  .sidebar-collapse {
    .main-sidebar {
      .sidebar-menu {
        > li {
          position: relative;
          
          &:hover > a {
            background-color: $verde-principal !important;
          }
          
          &:hover > a > span {
            left: 50px;
            top: 0;
            position: absolute;
            background-color: $verde-principal;
            color: $texto-blanco;
            padding: 12px 20px;
            margin-left: -3px;
            border-radius: 0 4px 4px 0;
          }
          
          &:hover > .treeview-menu {
            display: block !important;
            position: absolute;
            width: 180px;
            left: 50px;
            background-color: $verde-oscuro;
            top: 44px;
            z-index: 1031;
            border-radius: 0 4px 4px 4px;
            box-shadow: 3px 3px 3px rgba(0,0,0,.2);
          }
        }
      }
    }
  }
}

/* ========== AJUSTES ADICIONALES ========== */
/* Transiciones suaves */
.main-header .logo,
.main-header .navbar .sidebar-toggle,
.sidebar-menu > li > a,
.navbar-custom-menu > .nav > li > a {
  transition: all 0.3s ease-in-out;
}

/* Scrollbar personalizada para el sidebar */
.main-sidebar::-webkit-scrollbar,
.left-side::-webkit-scrollbar {
  width: 5px;
}

.main-sidebar::-webkit-scrollbar-track,
.left-side::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.main-sidebar::-webkit-scrollbar-thumb,
.left-side::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
}

/* Fix para que el dropdown del usuario mantenga los estilos */
.navbar-custom-menu > .nav > li.dropdown.user-menu {
  .dropdown-menu {
    border-top: 3px solid $verde-principal;
    
    .user-header {
      background-color: $verde-principal;
      color: $texto-blanco;
      
      p {
        color: $texto-blanco;
        
        small {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
```

## 🎉 ¡Listo!

Ya tienes AdminLTE 2 completamente integrado con Angular 20. El proyecto incluye:

- ✅ Layout responsivo de AdminLTE 2
- ✅ Header con menú de usuario
- ✅ Sidebar navegable
- ✅ Routing configurado
- ✅ Componentes modulares
- ✅ Estilos y scripts integrados

## 🔄 Próximos Pasos Recomendados

1. **Crear un servicio de autenticación**
2. **Implementar guards para rutas protegidas**
3. **Agregar más páginas y componentes**
4. **Integrar con APIs REST**
5. **Personalizar temas y colores**

## 🛟 Solución de Problemas Comunes

**Si jQuery no funciona:**
```typescript
// En el componente que lo necesite
declare var $: any;
```

**Si los estilos no cargan:**
- Verifica que los paths en `angular.json` sean correctos
- Reinicia el servidor de desarrollo

**Para cambiar el tema:**
```html
<!-- En index.html, cambia la clase del body -->
<body class="hold-transition skin-red sidebar-mini">
```

Opciones de skin: `skin-blue`, `skin-red`, `skin-yellow`, `skin-purple`, `skin-green`, `skin-black`