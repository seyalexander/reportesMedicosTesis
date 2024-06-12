import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTriagePageComponent } from './registrar-triage-page.component';

describe('RegistrarTriagePageComponent', () => {
  let component: RegistrarTriagePageComponent;
  let fixture: ComponentFixture<RegistrarTriagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarTriagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarTriagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
