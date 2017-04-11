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

  loadingMember: boolean;
  loadingMemberFailed: boolean = false;

  loadingCountries: boolean;
  loadingCountriesFailed: boolean = false;

  saving: boolean = false;

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
    this.loadingCountries = true;
    this.loadingCountriesFailed = false;

    this.countryService.getAll().subscribe(res => {
      this.countries = res;
      this.loadingCountries = false;
    }, error => {
      this.loadingCountriesFailed = true;
      this.loadingCountries = false;
    }, () => {
      if (this.memberId)
        this.loadMember();
    });
  }

  save(member: Member) {
    if (!this.saving) {
      this.saving = true;
      if (!this.memberId) {
        this.memberService.create(member).subscribe(res => {
          if (res) {
            this.router.navigate(['members']);
          } else {
            alert("Member could not be created");
          }

          this.saving = false;
        });
      } else {
        this.memberService.update(member).subscribe(res => {
          if (res) {
            this.router.navigate(['members']);
          } else {
            alert("Member could not be updated");
          }

          this.saving = false;
        });
      }
    }
  }

  loadMember() {
    this.loadingMember = true;
    this.loadingMemberFailed = false;

    this.memberService.get(this.memberId).subscribe(res => {
      let country = this.countries ? this.countries.filter(x => x._id == res.country._id)[0] : null;
      this.form = this.formBuilder.group({
        _id: [res._id],
        name: [res.name, Validators.required],
        surname: [res.surname, Validators.required],
        country: [country, Validators.required]
      });
      this.loadingMember = false;
    }, error => {
      this.loadingMemberFailed = true;
      this.loadingMember = false;
    });
  }
}
