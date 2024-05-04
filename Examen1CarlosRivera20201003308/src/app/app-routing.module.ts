import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatsComponent } from './chats/chats.component';
import { LlamadasComponent } from './llamadas/llamadas.component';
import { GruposComponent } from './grupos/grupos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'chats/:id', component: ChatsComponent },
  { path: 'llamadas/:id', component: LlamadasComponent },
  { path: 'mensajes/:id', component: GruposComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
