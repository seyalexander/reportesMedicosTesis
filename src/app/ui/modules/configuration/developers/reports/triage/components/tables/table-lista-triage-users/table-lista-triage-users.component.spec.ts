import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListaTriageUsersComponent } from './table-lista-triage-users.component';

describe('TableListaTriageUsersComponent', () => {
  let component: TableListaTriageUsersComponent;
  let fixture: ComponentFixture<TableListaTriageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListaTriageUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListaTriageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
