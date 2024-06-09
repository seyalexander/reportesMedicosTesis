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
            name: 'Triaje',
            route: ['/', 'home'],
          },
          {
            name: 'Atención integral del niño(a) de 5 a 9 años',
            route: ['/', 'home'],
          },
          {
            name: 'Atención integral del niño(a) de 5 a 9 años',
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
        console.log(userLoginOn);

        if (this.userLoginOn) {
          this.loginService.currentUserRole.subscribe({
            next: (userRol) => {
              this.userRole = userRol;
            }
          });
          this.loginService.currentUserIdEmpleado.subscribe({
            next: (userLoginId) => {
              this.userLoginId = userLoginId;
            }
          });
          this.loginService.currentUserNombre.subscribe({
            next: (userNombre) => {
              this.userNombre = userNombre
              console.log("nombre desde home: ", userNombre);

            }
          })
        } else {
          this.userLoginId = 0;
          this.userNombre = '';
          this.userData = '';
          this.router.navigateByUrl('/');

        }
      }
    });
  }

  salir() {
    this.loginService.logout()
  }
}
