import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorage, NotifierService } from '@helgoland/core';

import { TranslateTestingModule } from '../../../../../testing/translate.testing.module';
import { FavoriteService } from '../service/favorite.service';
import { FavoriteTogglerComponent } from './favorite-toggler.component';

describe('FavoriteTogglerComponent', () => {
  let component: FavoriteTogglerComponent;
  let fixture: ComponentFixture<FavoriteTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateTestingModule
      ],
      providers: [
        FavoriteService,
        LocalStorage,
        NotifierService
      ],
      declarations: [
        FavoriteTogglerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
