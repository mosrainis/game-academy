import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatItemsComponent } from './cat-items.component';

describe('CatItemsComponent', () => {
  let component: CatItemsComponent;
  let fixture: ComponentFixture<CatItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
