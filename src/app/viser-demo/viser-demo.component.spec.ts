import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViserDemoComponent } from './viser-demo.component';

describe('ViserDemoComponent', () => {
  let component: ViserDemoComponent;
  let fixture: ComponentFixture<ViserDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViserDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViserDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
