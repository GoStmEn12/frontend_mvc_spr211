// import { bootstrapApplication } from '@angular/platform-browser';

// import { appConfig } from './app/app.config';
//  import { AppComponent } from './app/app.component';

// // bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));


// import { bootstrapApplication } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { importProvidersFrom } from '@angular/core';

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(HttpClientModule)
//   ]
// }).catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Добавляем провайдеры маршрутов
    importProvidersFrom(HttpClientModule),
  ],
}).catch(err => console.error(err));