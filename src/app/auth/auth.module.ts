import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPipe } from './login.pipe';



@NgModule({
  declarations: [
    LoginPipe
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
