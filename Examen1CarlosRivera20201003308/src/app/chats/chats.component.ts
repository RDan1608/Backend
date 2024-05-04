import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  userId!: string;
  usersid: any;
  imagen!: string;

  constructor(private route: ActivatedRoute, private router: Router,private location: Location) { }
  
  navegar(){
    this.router.navigate(['/llamadas', this.usersid.id]); 
  }
  volverALogin() {
    this.location.back();
  }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.obtenerUserPorId(this.userId);
  }

  async obtenerUserPorId(userId: string) {
    try {
      const respuesta = await fetch(`http://localhost:3000/usuarios/${userId}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      });
      this.usersid = await respuesta.json();
      console.log('Usuario:', this.usersid);
      console.log('Imagen:', this.usersid.conversaciones[0]);
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  }
}



