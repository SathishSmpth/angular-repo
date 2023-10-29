import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './components/newComponent/newComponent.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandPageComponent } from './pages/land-page/land-page.component';
import { SignUpComponent } from './pages/user/sign-up/sign-up.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { LoggingService } from './services/logging.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { MoviesModule } from './modules/movies/movies.module';
import { UserModule } from './modules/user/user.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth_interceptor.service';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    NavbarComponent,
    LandPageComponent,
    SignUpComponent,
    LoginComponent,
    AccountComponent,
    NewAccountComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MoviesModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LoggingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
