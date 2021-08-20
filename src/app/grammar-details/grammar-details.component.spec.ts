import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarDetailsComponent } from './grammar-details.component';

describe('GrammarDetailsComponent', () => {
  let component: GrammarDetailsComponent;
  let fixture: ComponentFixture<GrammarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
