import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCatComponent } from './parent-cat.component';

describe('ParentCatComponent', () => {
  let component: ParentCatComponent;
  let fixture: ComponentFixture<ParentCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
