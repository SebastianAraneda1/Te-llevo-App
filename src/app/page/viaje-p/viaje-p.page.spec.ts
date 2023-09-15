import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajePPage } from './viaje-p.page';

describe('ViajePPage', () => {
  let component: ViajePPage;
  let fixture: ComponentFixture<ViajePPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajePPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
