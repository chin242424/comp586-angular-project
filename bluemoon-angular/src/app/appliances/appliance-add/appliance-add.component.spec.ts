import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceAddComponent } from './appliance-add.component';

describe('ApplianceAddComponent', () => {
  let component: ApplianceAddComponent;
  let fixture: ComponentFixture<ApplianceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplianceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplianceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
