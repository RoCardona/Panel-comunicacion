import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadetalleComponent } from './vistadetalle.component';

describe('VistadetalleComponent', () => {
  let component: VistadetalleComponent;
  let fixture: ComponentFixture<VistadetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistadetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
