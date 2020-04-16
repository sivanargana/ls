import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from 'src/app/modules/admin/api.service';
import { CommonService } from 'src/app/utils/common.service';
@Component({
  selector: "app-add-financial-information",
  templateUrl: "./add-financial-information.component.html",
  styleUrls: ["./add-financial-information.component.scss"],
})
export class AddFinancialInformationComponent implements OnInit {
  title = '';
  submitted = false;
  companies: any;
  iso = new FormControl(false);
  nso = new FormControl(false);
  form = this.fb.group({
    companyName: ["", Validators.required],
    ownedShares: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    pricePaid: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    valuation409AWhenExercised: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    numberOfISO: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    state: ["", Validators.required],
    ISO: this.fb.array([]),
    numberOfNSO: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    NSO: this.fb.array([]),
    current409AValuation: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    lastRoundValuation: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    fullyDilutedShareCount: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    additionalLiquidity: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
  })
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, public api: ApiService, private common : CommonService) {
    this.route.params.subscribe(res=>{

      this.title = (Object.keys(res).length > 0) ? res.company :  'Financial Information';



    })
  }
  ngOnInit() {
    this.iso.valueChanges.subscribe(data => {
      if (data === true) {
        (this.form.get('ISO') as FormArray).push(this.grant());
      } else {
        (this.form.get('ISO') as FormArray).clear();
      }
    });
    this.nso.valueChanges.subscribe(data => {
      if (data === true) {
        (this.form.get('NSO') as FormArray).push(this.grant());
      } else {
        (this.form.get('NSO') as FormArray).clear();
      }
    });
    this.api.companiesAll().subscribe(data => {
      this.companies = data;
    });

  }
  grant() {
    let obj = this.fb.group({
      grantDate: ["", [Validators.required]],
      strikePrice: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      noOfStrikesGranted: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
    return obj;
  }
  addmore(item) {
    if (item === "iso") {
      (this.form.get('ISO') as FormArray).push(this.grant());
    }
    if (item === "nso") {
      (this.form.get('NSO') as FormArray).push(this.grant());
    }
  }
  remove(i, val) {
    if (val === 'iso') {
      (this.form.get('ISO') as FormArray).removeAt(i);
    }
    if (val === 'nso') {
      (this.form.get('NSO') as FormArray).removeAt(i);
    }
  }
  dateMaping(val) {
    (this.form.get(val) as FormArray)['controls'].forEach(element => {
      let tempval = this.common.dateformat(element.get('grantDate').value)
      element.get('grantDate').setValue(tempval)
    });
  }
  submit() {
    this.submitted = true;

    if (this.form.valid) {
      this.dateMaping('ISO');
      this.dateMaping('NSO');
      this.api.liquidSolutionsAdd(this.form.value).subscribe(data => {
        this.common.sidebarEmmiterEmit();
        this.router.navigate(['admin']);
        this.common.toast.fire({
          icon: 'success',
          title: 'Financial Information Added Successfully'
        })
      })
    }else{
      window.scrollTo(0,0);
    }
  }
  onSelect(event) {

    this.form.get("current409AValuation").setValue(event.item.current409AValuation.toString())
    this.form.get("lastRoundValuation").setValue(event.item.lastRoundValuation.toString())
    this.form.get("fullyDilutedShareCount").setValue(event.item.fullyDilutedShareCount.toString())
  }
}
