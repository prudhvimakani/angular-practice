import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingnupFormComponent } from './singnup-form.component';

describe('SingnupFormComponent', () => {
  let component: SingnupFormComponent;
  let fixture: ComponentFixture<SingnupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingnupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingnupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
