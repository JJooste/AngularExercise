import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMembersComponent } from './list-members/list-members.component';
import { CreateEditMemberComponent } from './create-edit-member/create-edit-member.component';
import { AuthGuard } from '../shared/guards/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'members/new'
    },
    {
        path: 'members', canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ListMembersComponent
            },
            {
                path: 'new',
                component: CreateEditMemberComponent
            },
            {
                path: 'edit/:member',
                component: CreateEditMemberComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MemberRoutingModule { }