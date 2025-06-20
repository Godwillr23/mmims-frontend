import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInfieldAdminComponent } from './pre-infield-admin.component';

describe('PreInfieldAdminComponent', () => {
  let component: PreInfieldAdminComponent;
  let fixture: ComponentFixture<PreInfieldAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreInfieldAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreInfieldAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
