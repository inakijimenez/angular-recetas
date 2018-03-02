import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheListaComponent } from './coche-lista.component';

describe('CocheListaComponent', () => {
  let component: CocheListaComponent;
  let fixture: ComponentFixture<CocheListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocheListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocheListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
