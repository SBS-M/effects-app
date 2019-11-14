import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public listaUsuarios: Array<Usuario>;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(){
    this.usuarioService.getUsers().subscribe((list) => {
      this.listaUsuarios = list;
    })
  }


}
