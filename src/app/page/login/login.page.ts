import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IUsuarios } from 'src/app/interfaces/iusuarios';
import { SUsuariosService } from 'src/app/services/susuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email = "";
  public pass = "";

  listaUsuarios = new Array<IUsuarios>();
  existe = false;

  //Se le asigna un parametro al constructor para usar las rutas
  constructor(
    private route:Router, 
    private storage:Storage,
    private uService: SUsuariosService
    ) { }

  //El async permite el uso del await, que es hacer una promesa
  //es decir, antes de que la página cargue con sus funciones se realice la promesa antes
  async ngOnInit() {
  }

  ingreso(){

    this.uService.getUsuarios().subscribe((usuarios:Array<IUsuarios>)=>{

      this.listaUsuarios = usuarios;

      if(this.listaUsuarios.length > 0){

        this.listaUsuarios.forEach(usuario => {
  
          if(this.email === usuario.email && this.pass === usuario.contrasena){
            this.existe = true;
            console.log("Existe");
            this.uService.usuario = usuario;
            this.uService.setLogStatus(true);
            this.route.navigate(['/home']);
          }

        });
        if(!this.existe){
          alert("Email o Contraseña incorrectos")
        }
      }

    });
  }
  


  
  /*async login()
  {

    let user = this.storage.get("nombre");
    let password = this.storage.get("contraseña")
    //console.log("nombre: "+ this.formLogin.nombre+" Contraseña: "+this.formLogin.password);
      
      //Se importa una clase que tiene una función para enviar datos a otra URL (queryparams)
      //También se crea una variable que contrendra todos los datos a enviar.
    if(await user == this.formLogin.nombre && await password == this.formLogin.password){
      
      let datosEnviar:NavigationExtras = {
        queryParams:{
          nombreUsuario: this.formLogin.nombre,
          //passUsuario: this.formLogin.password
        }
      }
      
      //Se usa el parametro del constructor para navegar a otra url, y también se coloca la variable
      //que contiene los datos.
      this.route.navigate(['/home'], datosEnviar);
      
      //Para setear en el storage, primero va un string de lo que es el tipo de dato,
      //en este caso nombre, y despues va el valor
    }else{
      alert('Error, usuario invalido')
    }


  }*/

}
