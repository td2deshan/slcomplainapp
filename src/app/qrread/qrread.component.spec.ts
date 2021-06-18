import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrreadComponent } from './qrread.component';

describe('QrreadComponent', () => {
  let component: QrreadComponent;
  let fixture: ComponentFixture<QrreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
