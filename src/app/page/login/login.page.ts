import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = {
    nombre: "",
    password: ""
  }

  //Se le asigna un parametro al constructor para usar las rutas
  constructor(private route:Router, private storage:Storage) { }

  //El async permite el uso del await, que es hacer una promesa
  //es decir, antes de que la página cargue con sus funciones se realice la promesa antes
  async ngOnInit() {
    await this.storage.create();
  }

  async login()
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


  }

}
