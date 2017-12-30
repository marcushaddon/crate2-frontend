import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StereoControlsComponent } from './stereo-controls.component';

describe('StereoControlsComponent', () => {
  let component: StereoControlsComponent;
  let fixture: ComponentFixture<StereoControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StereoControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StereoControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
