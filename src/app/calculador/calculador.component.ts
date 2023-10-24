import { Component, OnInit } from '@angular/core';
import { IngredientesService } from '../services/ingredientes.service';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.scss']
})
export class CalculadorComponent implements OnInit{
  ingredientes: any;
  especies: any;
  constructor(
    private ingredientesService: IngredientesService
  ) { }
  ingredienteClick() {
    console.log("Click en ingrediente");
  }
  ngOnInit() {
    this.especies = [
      {
        "id": 1,
        "name": "Soja"
      },
      {
        "id": 2,
        "name": "Oregano"
      },
      {
        "id": 3,
        "name": "Aji Panca"
      }
    ];
    this.ingredientesService.getData().subscribe((data: any) => {
      this.ingredientes = data;
    });    
  }
}
