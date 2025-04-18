import { TestBed } from '@angular/core/testing';

import { ArtigosPesquisaService } from './artigos-pesquisa.service';

describe('ArtigosPesquisaService', () => {
  let service: ArtigosPesquisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtigosPesquisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
