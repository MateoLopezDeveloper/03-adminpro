import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })

    //const promesa = new Promise( ( resolve, reject )=>{

  //  if (false){
  //    resolve('hola uwu');
  //  } else {
  //    reject('algo malió sal');
  //  }

  //  } );

  //   promesa.then(()=>{
  //   console.log('salimooo');
  //})
  //.catch( error => console.log('Nananana alto error laconchalamadre', error));

  // console.log('UWU');

  }

  getUsuarios(){

    return new Promise(resolve =>{

    fetch('https://reqres.in/api/users')
    .then( resp => resp.json() )
    .then( body => resolve(body.data));
  });

    
}
}
