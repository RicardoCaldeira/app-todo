import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './components/header/header.component';
import { TodoDeleteAllButtonComponent } from './components/todo-delete-all-button/todo-delete-all-button.component';
import { TodoAddItensInputComponent } from './components/todo-add-itens-input/todo-add-itens-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoDeleteAllButtonComponent,
    TodoAddItensInputComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
