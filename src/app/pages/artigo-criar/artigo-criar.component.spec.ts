import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoCriarComponent } from './artigo-criar.component';

describe('ArtigoCriarComponent', () => {
  let component: ArtigoCriarComponent;
  let fixture: ComponentFixture<ArtigoCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigoCriarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
