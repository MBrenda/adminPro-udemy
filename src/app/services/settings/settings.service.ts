import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SettingsService {

  // Propiedades por defecto
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private document) {
    this.cargarAjustes();
    }

    guardarAjustes() {
      // console.log(' Guardado en el localstorage');
      localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
      // l.stringify e estoy diciendo que convierte el ajustes en unn string para poder guardarlo en el localStorage
   }

   cargarAjustes() {

    if ( localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log(' Cargando del localStorage');

      this.aplicarTema( this.ajustes.tema);
    } else {
      // console.log( 'Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema);
    }
  }

  aplicarTema( tema: string ) {

    const url = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
