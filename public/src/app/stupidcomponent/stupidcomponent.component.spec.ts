import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StupidcomponentComponent } from './stupidcomponent.component';

describe('StupidcomponentComponent', () => {
  let component: StupidcomponentComponent;
  let fixture: ComponentFixture<StupidcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StupidcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StupidcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
