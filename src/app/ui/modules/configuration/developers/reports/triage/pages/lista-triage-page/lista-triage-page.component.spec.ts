import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTriagePageComponent } from './lista-triage-page.component';

describe('ListaTriagePageComponent', () => {
  let component: ListaTriagePageComponent;
  let fixture: ComponentFixture<ListaTriagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTriagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaTriagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
