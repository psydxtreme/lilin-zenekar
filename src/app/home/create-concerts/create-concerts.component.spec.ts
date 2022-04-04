import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConcertsComponent } from './create-concerts.component';

describe('CreateConcertsComponent', () => {
  let component: CreateConcertsComponent;
  let fixture: ComponentFixture<CreateConcertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConcertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConcertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
