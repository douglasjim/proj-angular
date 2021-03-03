import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundo } from './meu_segundo.component';

describe('MeuPrimeiro2Component', () => {
  let component: MeuSegundo;
  let fixture: ComponentFixture<MeuSegundo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuSegundo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuSegundo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
