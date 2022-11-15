import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAddItemDialogComponent } from './restaurant-add-item-dialog.component';

describe('RestaurantAddItemDialogComponent', () => {
  let component: RestaurantAddItemDialogComponent;
  let fixture: ComponentFixture<RestaurantAddItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAddItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAddItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
