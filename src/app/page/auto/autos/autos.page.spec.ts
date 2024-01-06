import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutosPage } from './autos.page';

describe('AutosPage', () => {
  let component: AutosPage;
  let fixture: ComponentFixture<AutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
