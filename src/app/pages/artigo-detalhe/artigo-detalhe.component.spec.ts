import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoDetalheComponent } from './artigo-detalhe.component';

describe('ArtigoDetalheComponent', () => {
  let component: ArtigoDetalheComponent;
  let fixture: ComponentFixture<ArtigoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigoDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
