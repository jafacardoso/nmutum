import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelasListComponent } from './tabelas-list.component';

describe('TabelasListComponent', () => {
  let component: TabelasListComponent;
  let fixture: ComponentFixture<TabelasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criando...', () => {
    expect(component).toBeTruthy();
  });
});
