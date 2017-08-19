import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import {HttpClientModule} from '@angular/common/http';

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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,   
    UpgradeComponent,
    UsersComponent,
    UseraddComponent,
    UsereditComponent,
    UserviewComponent,
    PagesComponent,
    PageaddComponent,
    PageeditComponent,
    PageviewComponent,
  ],
  imports: [
    BrowserModule,
	HttpModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
	HttpClientModule,
	ReactiveFormsModule,
	FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
