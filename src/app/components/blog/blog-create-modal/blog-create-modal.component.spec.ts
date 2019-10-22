import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateModalComponent } from './blog-create-modal.component';

describe('BlogCreateModalComponent', () => {
  let component: BlogCreateModalComponent;
  let fixture: ComponentFixture<BlogCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
