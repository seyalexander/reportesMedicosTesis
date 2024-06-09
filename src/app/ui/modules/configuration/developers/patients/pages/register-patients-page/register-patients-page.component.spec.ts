import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPatientsPageComponent } from './register-patients-page.component';

describe('RegisterPatientsPageComponent', () => {
  let component: RegisterPatientsPageComponent;
  let fixture: ComponentFixture<RegisterPatientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPatientsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterPatientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
