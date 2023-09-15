import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalizacionPage } from './finalizacion.page';

describe('FinalizacionPage', () => {
  let component: FinalizacionPage;
  let fixture: ComponentFixture<FinalizacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinalizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
