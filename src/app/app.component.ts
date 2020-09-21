import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  /* AQUI DEFINIMOS LA TEMATICA DE NUESTRA IMAGEN*/
  styleImage = 'rainy';

  form: FormGroup;
  constructor(private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(): any {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
        });
  }
  /* ESTA FUNCION ES ACTIVADA POR EL NGSTYLE */
  unsplashClass(): any {
    return {
      'min-height': '100%',
      /* LLAMADA RANDOMICA AL SERVICIO DE IMAGENES DE UNSPLASH - CON IMAGENES DE TAMAÑO 1200X900 */
      /*SE LE AÑADE LA VARIABLE DE styleUrls PARA ESTABLECER LA TEMATICA*/
      background: `url("https://source.unsplash.com/random/1200x900?"${this.styleImage}) no-repeat center center`,
      'background-size': 'cover',
      position: 'relative',
    };
  }
  login(event: Event): any {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(`'%c'USER: ${value.email} - PASSWORD: ${value.password}`, 'background: #222; color: #bada55');
    }
  }
}
