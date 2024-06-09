import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListPatientsComponent } from './header-list-patients.component';

describe('HeaderListPatientsComponent', () => {
  let component: HeaderListPatientsComponent;
  let fixture: ComponentFixture<HeaderListPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderListPatientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderListPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
