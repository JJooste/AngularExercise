import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { MemberService } from './services/member.service';
import { CountryService } from './services/country.service';

import { MemberRoutingModule } from './member-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateMemberComponent, EditMemberComponent, ListMembersComponent],
  providers: [MemberService, CountryService]
})
export class MemberModule { }
