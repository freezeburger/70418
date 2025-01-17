import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlitComponent } from './hlit.component';

describe('HlitComponent', () => {
  let component: HlitComponent;
  let fixture: ComponentFixture<HlitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HlitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
