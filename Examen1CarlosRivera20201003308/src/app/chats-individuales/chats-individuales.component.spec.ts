import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsIndividualesComponent } from './chats-individuales.component';

describe('ChatsIndividualesComponent', () => {
  let component: ChatsIndividualesComponent;
  let fixture: ComponentFixture<ChatsIndividualesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatsIndividualesComponent]
    });
    fixture = TestBed.createComponent(ChatsIndividualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
