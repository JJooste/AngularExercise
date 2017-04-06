import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ListMembersComponent } from './list-members/list-members.component';

import { MemberRoutingModule } from './member-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule
  ],
  declarations: [CreateMemberComponent, EditMemberComponent, ListMembersComponent]
})
export class MemberModule { }
