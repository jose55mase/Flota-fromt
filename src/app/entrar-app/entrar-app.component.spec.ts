import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarAppComponent } from './entrar-app.component';

describe('EntrarAppComponent', () => {
  let component: EntrarAppComponent;
  let fixture: ComponentFixture<EntrarAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
