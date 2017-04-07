import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getAll().subscribe(res => {
      this.members = res;
    });
  }

  newMember() {
    this.router.navigate(['members', 'new']);
  }

  edit(member: Member) {
    this.router.navigate(['members', 'edit', member._id ]);
  }

}
