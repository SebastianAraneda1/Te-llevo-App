import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RePasswordPage } from './re-password.page';

describe('RePasswordPage', () => {
  let component: RePasswordPage;
  let fixture: ComponentFixture<RePasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
