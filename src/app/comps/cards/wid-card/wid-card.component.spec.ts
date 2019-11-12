import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidCardComponent } from './wid-card.component';

describe('WidCardComponent', () => {
  let component: WidCardComponent;
  let fixture: ComponentFixture<WidCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
