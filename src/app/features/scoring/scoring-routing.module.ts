import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ScoringComponent } from './scoring.component'

export const routes: Routes = [
  {
    path: '',
    component: ScoringComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class ScoringRoutingModule {}
