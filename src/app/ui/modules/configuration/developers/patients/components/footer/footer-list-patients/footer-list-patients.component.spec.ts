import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterListPatientsComponent } from './footer-list-patients.component';

describe('FooterListPatientsComponent', () => {
  let component: FooterListPatientsComponent;
  let fixture: ComponentFixture<FooterListPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterListPatientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterListPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
