import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {


  public labels1: string[] = ['Huevo', 'Leche', 'Banana'];

  public data1 = [
    [200, 170, 100]
  ];

  public labels2: string[] = ['Queso', 'Carne', 'Uvas'];

  public data2 = [
    [80, 70, 300]
  ];

  public labels3: string[] = ['Elg', 'Ordof', 'Orro'];

  public data3 = [
    [4, 3, 5]
  ];

  public labels4: string[] = ['Fideito', 'Rabioli', 'Nioki'];

  public data4 = [
    [20, 70, 45]
  ];
 
}
