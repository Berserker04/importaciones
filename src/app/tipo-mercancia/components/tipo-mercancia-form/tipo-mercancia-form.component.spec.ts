import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMercanciaFormComponent } from './tipo-mercancia-form.component';

describe('TipoMercanciaFormComponent', () => {
  let component: TipoMercanciaFormComponent;
  let fixture: ComponentFixture<TipoMercanciaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMercanciaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMercanciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
