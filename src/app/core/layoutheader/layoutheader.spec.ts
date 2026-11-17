import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layoutheader } from './layoutheader';

describe('Layoutheader', () => {
  let component: Layoutheader;
  let fixture: ComponentFixture<Layoutheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layoutheader],
    }).compileComponents();

    fixture = TestBed.createComponent(Layoutheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
