import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from './pipes/translate.pipe';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
