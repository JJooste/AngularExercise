import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditMemberComponent } from './create-edit-member.component';

describe('CreateMemberComponent', () => {
  let component: CreateEditMemberComponent;
  let fixture: ComponentFixture<CreateEditMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
