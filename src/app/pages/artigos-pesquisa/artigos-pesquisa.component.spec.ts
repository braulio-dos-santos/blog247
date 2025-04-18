import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosPesquisaComponent } from './artigos-pesquisa.component';

describe('ArtigosPesquisaComponent', () => {
  let component: ArtigosPesquisaComponent;
  let fixture: ComponentFixture<ArtigosPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtigosPesquisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
