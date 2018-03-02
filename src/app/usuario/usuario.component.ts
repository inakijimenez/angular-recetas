import { Component, OnInit } from '@angular/core';
import { Usuario, Sexo } from '../model/usuario'



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarios: Usuario[];

  constructor() {
    console.log('UsuarioComponent constructor');
    
    this.usuarios = [];
    this.usuario = new Usuario('Jacinto', 'Benavente', undefined, 'http://www.abc.es/Media/201311/12/avatar--478x270.jpg', Sexo.M );
    this.usuarios.push(this.usuario);
    //console.log(this.usuarios);
   }

  ngOnInit() {
    console.log('UsuarioComponent oninit');
  }

  nuevoUsuario(){
    this.usuarios.push(this.usuario);
  }
}
