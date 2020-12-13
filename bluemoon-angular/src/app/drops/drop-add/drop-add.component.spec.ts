import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropAddComponent } from './drop-add.component';

describe('DropAddComponent', () => {
  let component: DropAddComponent;
  let fixture: ComponentFixture<DropAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
