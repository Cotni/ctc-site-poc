import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTrackComponent } from './submit-track.component';

describe('SubmitTrackComponent', () => {
  let component: SubmitTrackComponent;
  let fixture: ComponentFixture<SubmitTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
