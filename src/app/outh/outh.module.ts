import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule} from '@ngrx/store';

import { RegisterComponent } from './components/register/register.component';
import {reducer} from 'src/app/outh/store/actions/reduser';

const routes: Routes = [
    {
        path:'register',
        component:RegisterComponent    
    }
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, StoreModule.forFeature('auth', reducer)],
    declarations: [RegisterComponent]
})
export class OuthModule {}