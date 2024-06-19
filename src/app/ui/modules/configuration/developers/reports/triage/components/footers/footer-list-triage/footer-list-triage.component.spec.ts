import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterListTriageComponent } from './footer-list-triage.component';

describe('FooterListTriageComponent', () => {
  let component: FooterListTriageComponent;
  let fixture: ComponentFixture<FooterListTriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterListTriageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterListTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
