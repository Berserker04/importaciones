import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorLibraComponent } from './valor-libra.component';

describe('ValorLibraComponent', () => {
  let component: ValorLibraComponent;
  let fixture: ComponentFixture<ValorLibraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorLibraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorLibraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
