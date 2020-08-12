import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseTranslaterComponent } from './morse-translater.component';

describe('MorseTranslaterComponent', () => {
  let component: MorseTranslaterComponent;
  let fixture: ComponentFixture<MorseTranslaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseTranslaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseTranslaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
