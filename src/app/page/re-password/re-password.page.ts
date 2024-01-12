import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuarios } from 'src/app/interfaces/iusuarios';
import { SUsuariosService } from 'src/app/services/susuarios.service';

@Component({
  selector: 'app-re-password',
  templateUrl: './re-password.page.html',
  styleUrls: ['./re-password.page.scss'],
})
export class RePasswordPage implements OnInit {

  ngOnInit(): void {
      
  }

  formRecuperar = {
    email: "",
    password: ""
  }

  listaUsuarios = new Array<IUsuarios>();
  showErrorEmail:boolean = false;

  constructor(
    private uService:SUsuariosService,
    private route:Router
  ){}

  recuperar(){
    this.uService.getUsuarios().subscribe((usuarios:Array<IUsuarios>)=>{

      this.listaUsuarios = usuarios;

      this.listaUsuarios.forEach(usuario => {
        if(this.formRecuperar.email === usuario.email){
          alert("Contraseña cambiada con exito!!");
          this.route.navigate(['/login']);
          usuario.contrasena = this.formRecuperar.password
        }else{
          this.showErrorEmail = true;
        }
      });

    })

  }

}
