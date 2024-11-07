import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseRestaurantComponent } from './category-wise-restaurant.component';

describe('CategoryWiseRestaurantComponent', () => {
  let component: CategoryWiseRestaurantComponent;
  let fixture: ComponentFixture<CategoryWiseRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryWiseRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryWiseRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
