import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMembersComponent } from './list-members/list-members.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';

const routes: Routes = [
    {
        path: 'members', canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ListMembersComponent
            },
            {
                path: 'new',
                component: CreateMemberComponent
            },
            {
                path: 'edit/:member',
                component: EditMemberComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }