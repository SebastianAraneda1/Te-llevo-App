import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SUsuariosService } from 'src/app/services/susuarios.service';

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
  
  constructor(
    private route:Router,
    private uService:SUsuariosService
    ) { }

  ngOnInit() {
    
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
      this.crearUser();
      alert('Usuario registrado con exito')
      this.redireccionarLogin();
      
    }else{
      alert('Falta completar campos')
    }
  }
  
  redireccionarLogin(){
    this.route.navigate(['/login']);
  }

  crearUser(){
    let post = {
      nombre: this.formRegistro.nombre,
      contrasena: this.formRegistro.password,
      email: this.formRegistro.email
    };
    this.uService.createUser(post).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)}
    });
  }

}
