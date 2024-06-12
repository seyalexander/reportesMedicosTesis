import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListaTriageDeveloperComponent } from './table-lista-triage-developer.component';

describe('TableListaTriageDeveloperComponent', () => {
  let component: TableListaTriageDeveloperComponent;
  let fixture: ComponentFixture<TableListaTriageDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableListaTriageDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListaTriageDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
