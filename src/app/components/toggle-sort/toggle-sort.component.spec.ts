import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSortComponent } from './toggle-sort.component';

describe('ToggleSortComponent', () => {
  let component: ToggleSortComponent;
  let fixture: ComponentFixture<ToggleSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


