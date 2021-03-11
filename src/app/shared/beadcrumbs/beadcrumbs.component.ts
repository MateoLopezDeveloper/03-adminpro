import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beadcrumbs',
  templateUrl: './beadcrumbs.component.html',
  styles: []
})
export class BeadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router ) { 

    this.tituloSubs$ = this.getArgumentosRuta()
                            .subscribe(({titulo})=>{
                            this.titulo = titulo;
                            document.title = `Admin pro - ${titulo}`;
                            } );
    
   }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

   getArgumentosRuta(){
     return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map((event: ActivationEnd)=> event.snapshot.data ),
    )
    
   }


}
