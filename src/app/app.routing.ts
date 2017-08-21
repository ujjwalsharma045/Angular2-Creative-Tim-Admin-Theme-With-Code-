import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { UsersComponent } from './users/users.component'; 
import { UseraddComponent } from './useradd/useradd.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserviewComponent } from './userview/userview.component';

import { PagesComponent } from './pages/pages.component'; 
import { PageaddComponent } from './pageadd/pageadd.component';
import { PageeditComponent } from './pageedit/pageedit.component';
import { PageviewComponent } from './pageview/pageview.component';
import { SettingsComponent } from './settings/settings.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }, 
	{
        path: 'users',
        component: UsersComponent
    },
	{
        path: 'user/add',
        component: UseraddComponent
    },
	{
        path: 'user/edit/:id',
        component: UsereditComponent
    },
	{
        path: 'user/view/:id',
        component: UserviewComponent
    },
	{
        path: 'pages',
        component: PagesComponent
    },
	{
        path: 'page/add',
        component: PageaddComponent
    },
	{
        path: 'page/edit/:id',
        component: PageeditComponent
    },
	{
        path: 'page/view/:id',
        component: PageviewComponent
    },
	{
        path: 'settings',
        component: SettingsComponent
    }
]
