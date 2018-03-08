import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCochesComponent } from './formulario-coches.component';

describe('FormularioCochesComponent', () => {
  let component: FormularioCochesComponent;
  let fixture: ComponentFixture<FormularioCochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
