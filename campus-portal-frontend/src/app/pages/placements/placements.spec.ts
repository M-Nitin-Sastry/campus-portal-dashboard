import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Placements } from './placements';

describe('Placements', () => {
  let component: Placements;
  let fixture: ComponentFixture<Placements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Placements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Placements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
