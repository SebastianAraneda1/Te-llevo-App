import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarAutoPage } from './eliminar-auto.page';

describe('EliminarAutoPage', () => {
  let component: EliminarAutoPage;
  let fixture: ComponentFixture<EliminarAutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
