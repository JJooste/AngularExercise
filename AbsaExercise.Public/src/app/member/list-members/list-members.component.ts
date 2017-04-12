import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Member } from '../models/member';

import { MemberService } from '../services/member.service';

import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {
  members: Member[];
  loadingMembers: boolean;
  loadingFailed: boolean = false;

  constructor(private memberService: MemberService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.loadingMembers = true;
    this.loadingFailed = false;

    this.memberService.getAll().subscribe(res => {
      this.members = res;
      this.loadingMembers = false;
    }, error => {
      this.loadingFailed = true;
      this.loadingMembers = false;
    });
  }

  newMember() {
    this.router.navigate(['members', 'new']);
  }

  edit(member: Member) {
    this.router.navigate(['members', 'edit', member._id]);
  }

  buttonClicked(message: string) {
    this.notificationService.displayInfo(message);
  }

}
