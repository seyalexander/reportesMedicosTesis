import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListPatientsDeveloperComponent } from './table-list-patients-developer.component';

describe('TableListPatientsDeveloperComponent', () => {
  let component: TableListPatientsDeveloperComponent;
  let fixture: ComponentFixture<TableListPatientsDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListPatientsDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListPatientsDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
