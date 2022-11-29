import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentoAnimalComponent } from './alimento-animal/alimento-animal.component';
import { AlimentoProcesadoComponent } from './alimento-procesado/alimento-procesado.component';
import { AnimalComponent } from './animal/animal.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';



@NgModule({
  declarations: [
    AlimentoAnimalComponent,
    AlimentoProcesadoComponent,
    AnimalComponent,
    AsignaturaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
