import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsommateurComponent } from './dashboard-consommateur.component';

describe('DashboardConsommateurComponent', () => {
  let component: DashboardConsommateurComponent;
  let fixture: ComponentFixture<DashboardConsommateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsommateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsommateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
