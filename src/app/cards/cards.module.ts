import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentoAnimalComponent } from './alimento-animal/alimento-animal.component';
import { AlimentoProcesadoComponent } from './alimento-procesado/alimento-procesado.component';



@NgModule({
  declarations: [
    AlimentoAnimalComponent,
    AlimentoProcesadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
