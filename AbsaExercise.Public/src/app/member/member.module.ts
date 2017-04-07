import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEditMemberComponent } from './create-edit-member/create-edit-member.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { MemberService } from './services/member.service';
import { CountryService } from './services/country.service';
import { SharedModule } from '../shared/shared.module';

import { MemberRoutingModule } from './member-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CreateEditMemberComponent, ListMembersComponent],
  providers: [MemberService, CountryService]
})
export class MemberModule { }
