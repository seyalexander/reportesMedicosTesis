import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientsPageComponent } from './list-patients-page.component';

describe('ListPatientsPageComponent', () => {
  let component: ListPatientsPageComponent;
  let fixture: ComponentFixture<ListPatientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPatientsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPatientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
