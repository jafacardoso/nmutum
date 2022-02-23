import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTabelaComponent } from './add-tabela.component';

describe('AddTabelaComponent', () => {
  let component: AddTabelaComponent;
  let fixture: ComponentFixture<AddTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('criado', () => {
    expect(component).toBeTruthy();
  });
});
