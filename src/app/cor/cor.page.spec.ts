import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorPage } from './cor.page';

describe('CorPage', () => {
  let component: CorPage;
  let fixture: ComponentFixture<CorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
