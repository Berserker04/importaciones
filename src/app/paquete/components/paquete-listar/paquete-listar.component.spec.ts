import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteListarComponent } from './paquete-listar.component';

describe('PaqueteComponent', () => {
  let component: PaqueteListarComponent;
  let fixture: ComponentFixture<PaqueteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaqueteListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
