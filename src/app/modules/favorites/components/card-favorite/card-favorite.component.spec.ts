import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFavoriteComponent } from './card-favorite.component';

describe('CardFavoriteComponent', () => {
  let component: CardFavoriteComponent;
  let fixture: ComponentFixture<CardFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
