import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeblogComponent } from './bikeblog.component';

describe('BikeblogComponent', () => {
  let component: BikeblogComponent;
  let fixture: ComponentFixture<BikeblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
