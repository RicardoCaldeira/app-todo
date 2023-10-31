import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeleteAllButtonComponent } from './todo-delete-all-button.component';

describe('TodoDeleteAllButtonComponent', () => {
  let component: TodoDeleteAllButtonComponent;
  let fixture: ComponentFixture<TodoDeleteAllButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDeleteAllButtonComponent]
    });
    fixture = TestBed.createComponent(TodoDeleteAllButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
