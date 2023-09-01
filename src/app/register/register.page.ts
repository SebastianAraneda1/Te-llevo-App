import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  showErrorNombre:boolean = false;
  showErrorEmail:boolean = false;
  showErrorPass:boolean = false;

  acuerdo:boolean = false;

  formRegistro = {
    nombre: "",
    email: "",
    password: "",
    rpassword:""
  }
  
  constructor(private storage:Storage, private route:Router) { }

  async ngOnInit() {
    await this.storage.create();
    
  }
  
  registrar(){

    let nombreOk = false;
    let emailOk = false;
    let passOk = false;
    
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const email = this.formRegistro.email;
    
    if(this.formRegistro.nombre.length >= 3 && this.formRegistro.nombre.length <= 10){
    
      nombreOk = true;
      this.showErrorNombre = false;
      
    }else{
      this.showErrorNombre = true;
    }
    
    if(regex.test(email)){
    
      emailOk = true;
      this.showErrorEmail = false;
    
    }else{
      this.showErrorEmail = true;
    }
    
    if(this.formRegistro.password && this.formRegistro.rpassword && 
      this.formRegistro.password === this.formRegistro.rpassword){
      
      this.showErrorPass = false;
      passOk = true;
    
    }else{
      this.showErrorPass = true;
    }
    
    if(nombreOk && emailOk && passOk){
      alert('Registro correcto')
      this.storage.set("nombre", this.formRegistro.nombre)
      this.storage.set("contraseña", this.formRegistro.password)

      this.redireccionarLogin();
    }else{
      alert('Falta completar campos')
    }
  }
  
  redireccionarLogin(){
    this.route.navigate(['/login']);
  }

}
