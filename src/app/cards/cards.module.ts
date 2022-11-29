import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentoAnimalComponent } from './alimento-animal/alimento-animal.component';
import { AlimentoProcesadoComponent } from './alimento-procesado/alimento-procesado.component';
import { AnimalComponent } from './animal/animal.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { CocinaComponent } from './cocina/cocina.component';
import { ColorComponent } from './color/color.component';



@NgModule({
  declarations: [
    AlimentoAnimalComponent,
    AlimentoProcesadoComponent,
    AnimalComponent,
    AsignaturaComponent,
    CocinaComponent,
    ColorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
