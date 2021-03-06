import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';


// arreglo de mis rutas
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard],
        children: [
          { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
          { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }  },
          { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' }  },
          { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }  },
          { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' }  },
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema' }  },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
];

// configuracion de las rutas hijas que se van a exportar en pages.module
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
