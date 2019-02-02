import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentsComponentComponent } from './all-students-component.component';

describe('AllStudentsComponentComponent', () => {
  let component: AllStudentsComponentComponent;
  let fixture: ComponentFixture<AllStudentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStudentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
