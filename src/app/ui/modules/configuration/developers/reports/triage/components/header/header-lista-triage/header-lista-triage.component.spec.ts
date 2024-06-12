import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListaTriageComponent } from './header-lista-triage.component';

describe('HeaderListaTriageComponent', () => {
  let component: HeaderListaTriageComponent;
  let fixture: ComponentFixture<HeaderListaTriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderListaTriageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderListaTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
