import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorMp3Component } from './reproductor-mp3.component';

describe('ReproductorMp3Component', () => {
  let component: ReproductorMp3Component;
  let fixture: ComponentFixture<ReproductorMp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReproductorMp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproductorMp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
