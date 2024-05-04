import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatsComponent } from './chats/chats.component';
import { LlamadasComponent } from './llamadas/llamadas.component';
import { GruposComponent } from './grupos/grupos.component';
import { ChatsIndividualesComponent } from './chats-individuales/chats-individuales.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatsComponent,
    LlamadasComponent,
    GruposComponent,
    ChatsIndividualesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
