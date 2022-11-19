import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTableNewComponent } from './restaurant-table-new.component';

describe('RestaurantTableNewComponent', () => {
  let component: RestaurantTableNewComponent;
  let fixture: ComponentFixture<RestaurantTableNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantTableNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTableNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
