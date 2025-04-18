import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoAtualizarComponent } from './artigo-atualizar.component';

describe('ArtigoAtualizarComponent', () => {
  let component: ArtigoAtualizarComponent;
  let fixture: ComponentFixture<ArtigoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigoAtualizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
