import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeComponent } from './delete-me.component';

describe('DeleteMeComponent', () => {
  let component: DeleteMeComponent;
  let fixture: ComponentFixture<DeleteMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
