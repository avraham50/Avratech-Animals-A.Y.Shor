import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvraAnimalsComponent } from './avra-animals.component';

describe('AvraAnimalsComponent', () => {
  let component: AvraAnimalsComponent;
  let fixture: ComponentFixture<AvraAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvraAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvraAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
