import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListPatientsUsersComponent } from './table-list-patients-users.component';

describe('TableListPatientsUsersComponent', () => {
  let component: TableListPatientsUsersComponent;
  let fixture: ComponentFixture<TableListPatientsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListPatientsUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListPatientsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
