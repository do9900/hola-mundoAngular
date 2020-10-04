import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    mostrar = true;

    frase:any = {
        mensaje: 'Frase para el bodyFrase para el bodyFrase para el bodyFrase para el body',
        autor: 'AutorBody',
    };

    personajes:string[] = ['spiderman', 'venom', 'superman'];
}