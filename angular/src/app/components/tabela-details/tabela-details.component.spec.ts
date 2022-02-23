import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDetailsComponent } from './tabela-details.component';

describe('TabelaDetailComponent', () => {
  let component: TabelaDetailsComponent;
  let fixture: ComponentFixture<TabelaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criando', () => {
    expect(component).toBeTruthy();
  });
});
