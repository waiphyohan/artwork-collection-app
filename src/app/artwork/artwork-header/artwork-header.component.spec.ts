import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkHeaderComponent } from './artwork-header.component';

describe('ArtworkHeaderComponent', () => {
  let component: ArtworkHeaderComponent;
  let fixture: ComponentFixture<ArtworkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
