import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancetypeListComponent } from './appliancetype-list.component';

describe('AppliancetypeListComponent', () => {
  let component: AppliancetypeListComponent;
  let fixture: ComponentFixture<AppliancetypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliancetypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancetypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
