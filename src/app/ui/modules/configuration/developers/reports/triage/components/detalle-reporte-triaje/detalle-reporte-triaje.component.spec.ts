import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReporteTriajeComponent } from './detalle-reporte-triaje.component';

describe('DetalleReporteTriajeComponent', () => {
  let component: DetalleReporteTriajeComponent;
  let fixture: ComponentFixture<DetalleReporteTriajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleReporteTriajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleReporteTriajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
