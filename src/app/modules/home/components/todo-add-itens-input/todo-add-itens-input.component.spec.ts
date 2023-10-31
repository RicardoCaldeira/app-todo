import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddItensInputComponent } from './todo-add-itens-input.component';

describe('TodoAddItensInputComponent', () => {
  let component: TodoAddItensInputComponent;
  let fixture: ComponentFixture<TodoAddItensInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoAddItensInputComponent]
    });
    fixture = TestBed.createComponent(TodoAddItensInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
