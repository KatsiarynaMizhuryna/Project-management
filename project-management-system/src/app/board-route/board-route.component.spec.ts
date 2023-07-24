import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRouteComponent } from './board-route.component';

describe('BoardRouteComponent', () => {
  let component: BoardRouteComponent;
  let fixture: ComponentFixture<BoardRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardRouteComponent]
    });
    fixture = TestBed.createComponent(BoardRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
