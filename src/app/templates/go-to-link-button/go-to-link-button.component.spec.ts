import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToLinkButtonComponent } from './go-to-link-button.component';

describe('GoToLinkButtonComponent', () => {
  let component: GoToLinkButtonComponent;
  let fixture: ComponentFixture<GoToLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToLinkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
