import { Component, inject, Inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { AuthService } from '../../../../infraestructure/driven-adapter/auth/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mainMenu: {
    defaultOptions: Array<any>;
    accessDropwonsLink: Array<any>;
    accessLink: Array<any>;
  } = {
      defaultOptions: [],
      accessDropwonsLink: [],
      accessLink: [],
    };

  constructor(private loginService: AuthService) { }
  private router= inject(Router);

  ngOnInit(): void {
    this.validationLogin()

  }

  opcionesDeveloper() {
    this.mainMenu.defaultOptions = [
      {
        name: 'Dashboard',
        icon: 'uil uil-estate',
        route: ['/', 'home'],
      },
    ];

    this.mainMenu.accessDropwonsLink = [
      {
        name: 'Usuarios',
        options: [
          {
            name: 'Doctores',
            route: ['/', 'home'],
          },
          {
            name: 'Enfermeras',
            route: ['/', 'home'],
          },
          {
            name: 'Obstetricias',
            route: ['/', 'home'],
          },

        ]
      },
      {
        name: 'Reportes',
        options: [
          {
            name: 'Pacientes',
            route: ['/','home', 'patients'],
          },
          {
            name: 'Triage',
            route: ['/', 'home', 'triage'],
          },
          {
            name: 'Atención integral del niño(a) de 5 a 9 años',
            route: ['/','home', 'atencionIntegralNinios'],
          },
          {
            name: 'Atención del adulto mayor hombre y mujer',
            route: ['/', 'home'],
          },

        ]
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: ['Cuentas'],
        icon: 'uil uil-document-info',
        route: ['/', 'home', 'autos'],
      },
      {
        name: ['Calendar'],
        icon: 'uil uil-document-info',
        route: ['/', 'home', 'autos'],
      },
    ]
  }

  opcionesUser() {
    this.mainMenu.defaultOptions = [
      {
        name: 'Dashboard',
        icon: 'uil uil-estate',
        route: ['/', 'home'],
      },
    ];

    this.mainMenu.accessDropwonsLink = [
      {
        name: 'Reportes',
        options: [
          {
            name: 'Triage',
            route: ['/', 'home', 'triage'],
          },
          {
            name: 'Atención integral del niño(a) de 5 a 9 años',
            route: ['/','home', 'atencionIntegralNinios'],
          },
          {
            name: 'Atención del adulto mayor hombre y mujer',
            route: ['/', 'home'],
          },

        ]
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: ['Cuentas'],
        icon: 'uil uil-document-info',
        route: ['/', 'home', 'autos'],
      },
      {
        name: ['Calendar'],
        icon: 'uil uil-document-info',
        route: ['/', 'home', 'autos'],
      },
    ]
  }


  // ================================================>> Datos de login
  userNombre: String = ''
  userRole: String = ''
  userLoginOn: boolean = false;
  userLoginId: number = 0;
  userData: any = ""
  //================================================

  validationLogin() {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
        if (this.userLoginOn) {
          this.obtenerRolUsuario()
          this.obtenerIdEmpleado()
          this.obtenerNombreUsuario()
        } else {
          this.userLoginId = 0;
          this.userNombre = '';
          this.userData = '';
          this.router.navigateByUrl('/');

        }
      }
    });
  }

  obtenerRolUsuario() {
    this.loginService.currentUserRole.subscribe({
      next: (userRol) => {
        this.userRole = userRol;
        if(this.userRole==='DEVELOPER') {
          this.opcionesDeveloper()
        }else if(this.userRole==='PERSONAL') {
          this.opcionesUser()
        }
      }
    });
  }

  obtenerIdEmpleado() {
    this.loginService.currentUserIdEmpleado.subscribe({
      next: (userLoginId) => {
        this.userLoginId = userLoginId;
      }
    });
  }

  obtenerNombreUsuario() {
    this.loginService.currentUserNombre.subscribe({
      next: (userNombre) => {
        this.userNombre = userNombre
      }
    })
  }

  salir() {
    this.loginService.logout()
  }
}
