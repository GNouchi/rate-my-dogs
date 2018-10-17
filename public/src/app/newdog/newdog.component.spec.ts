import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdogComponent } from './newdog.component';

describe('NewdogComponent', () => {
  let component: NewdogComponent;
  let fixture: ComponentFixture<NewdogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
