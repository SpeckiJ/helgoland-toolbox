import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from 'projects/testing/translate.testing.module';

import { D3GeneralGraphComponent } from './d3-general-graph.component';

describe('D3GeneralGraphComponent', () => {
  let component: D3GeneralGraphComponent;
  let fixture: ComponentFixture<D3GeneralGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [D3GeneralGraphComponent],
      imports: [
        HttpClientModule,
        TranslateTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GeneralGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
