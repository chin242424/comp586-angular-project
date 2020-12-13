import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropEditComponent } from './drop-edit.component';

describe('DropEditComponent', () => {
  let component: DropEditComponent;
  let fixture: ComponentFixture<DropEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
