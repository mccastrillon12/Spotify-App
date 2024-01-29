import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelArtistDetailsComponent } from './model-artist-details.component';

describe('ModelArtistDetailsComponent', () => {
  let component: ModelArtistDetailsComponent;
  let fixture: ComponentFixture<ModelArtistDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelArtistDetailsComponent]
    });
    fixture = TestBed.createComponent(ModelArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
