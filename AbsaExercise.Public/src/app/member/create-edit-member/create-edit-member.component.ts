import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../models/member';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-edit-member.component.html',
  styleUrls: ['./create-edit-member.component.css']
})
export class CreateEditMemberComponent implements OnInit {

  memberId: string;
  countries: Country[];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private countryService: CountryService, private memberService: MemberService) { }

  ngOnInit() {
    this.memberId = this.route.snapshot.params['member'];

    this.initForm();
    this.loadCountries();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      country: [null, Validators.required]
    });
  }

  loadCountries() {
    this.countryService.getAll().subscribe(res => {
      this.countries = res;
      if (this.memberId)
        this.loadMember();
    });
  }

  save(member: Member) {
    if (!this.memberId) {
      this.memberService.create(member).subscribe(res => {
        if (res) {
          this.router.navigate(['members']);
        } else {
          alert("Member could not be created");
        }
      });
    } else {
      this.memberService.update(member).subscribe(res => {
        if (res) {
          this.router.navigate(['members']);
        } else {
          alert("Member could not be updated");
        }
      });
    }
  }

  loadMember() {
    this.memberService.get(this.memberId).subscribe(res => {
      let country = this.countries.filter(x => x._id == res.country._id)[0];
      this.form = this.formBuilder.group({
        _id: [res._id],
        name: [res.name, Validators.required],
        surname: [res.surname, Validators.required],
        country: [country, Validators.required]
      });
    });
  }
}
