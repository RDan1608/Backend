import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  users: Array<any> = [];

  constructor(private router: Router) { }

  loginUser() {
    const user = this.users.find((user) => user.nombre === this.username && user.contrasena === this.password);

    if (user) {
      console.log("Entré");
      this.router.navigate(['/chats', user.id]); 
    } else {
      console.log("Usuario no existe");
    }
  }

  ngOnInit(): void {
    this.obtenerUsers();
  }

  async obtenerUsers() {
    let respuesta = await fetch("http://localhost:3000/usuarios", {
      method: 'GET',
      headers: {
        "Content-type": 'application/json'
      }
    });
    this.users = await respuesta.json();
    console.log("Usuarios", this.users);
  }
}
