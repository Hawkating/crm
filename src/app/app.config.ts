import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideNativeDateAdapter(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-c6cd5","appId":"1:101215966946:web:787fac2128419538b630bb","storageBucket":"simple-crm-c6cd5.firebasestorage.app","apiKey":"AIzaSyAt4NQbAjaOHTdhXJHYBw8GXHCodhIyWCA","authDomain":"simple-crm-c6cd5.firebaseapp.com","messagingSenderId":"101215966946"})), provideFirestore(() => getFirestore())]
};
