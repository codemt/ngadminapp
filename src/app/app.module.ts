import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AsideComponent } from './aside/aside.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AllStudentsComponentComponent } from './all-students-component/all-students-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    AppFooterComponent,
    DashboardComponent,
    HeaderComponent,
    AllStudentsComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([

    {  path: '', component: DashboardComponent},
    { path: 'students/all', component : AllStudentsComponentComponent}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
