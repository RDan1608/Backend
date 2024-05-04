import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.component.html',
  styleUrls: ['./llamadas.component.css']
})
export class LlamadasComponent {
  constructor(private location: Location) { }
  
  volverAChats() {
    this.location.back();
  }
}
