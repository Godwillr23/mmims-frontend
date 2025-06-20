import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AjaxService } from '../../services/ajax.service';
import { Subscription } from 'rxjs';
import { getUserId } from '../../utils/utility';
import { FieldToUpdateModel } from '../../models/fieldToUpdate';

@Component({
  selector: 'app-pre-infield-admin',
  standalone: false,
  templateUrl: './pre-infield-admin.component.html',
  styleUrl: './pre-infield-admin.component.scss'
})
export class PreInfieldAdminComponent {

ProfileUpdateForm: FormGroup;
  submitted = false;
  successMsg = '';
  errorMsg = '';
  loginSubs!: Subscription;  // declare subscription
  isLoading = false;
  loader = false;

  fields: string[] = [
    'FirstName', 'LastName', 'Email','TeamLeader', 
    'ID Number', 'CellNo','HasDriversLicence', 'LicenceCode', 'LicenceNo','LicenceIssueDate', 
    'LicenceExpDate', 'DurationDrivingExp','EmploymentDate', 'Branch', 'DeviceName','DeviceModel'
  ];
  selectedField: string = '';
  constructor(
    private fb: FormBuilder, 
    private ajaxService: AjaxService,
  ) 
  {

    this.ProfileUpdateForm = this.fb.group({
      UpdateFor: ['', Validators.required],
      UpdateTo: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


 onSubmit() {

  this.isLoading = true; // hide loader
    const date = new Date();
    var userId = Number(getUserId());

    if (this.ProfileUpdateForm.invalid) {
      return;
    }
    
    const { UpdateFor, UpdateTo } = this.ProfileUpdateForm.value;

    this.ajaxService.fieldToUpdate({
        UserId: userId,
        ProjId: 1,
        UpdateFor: UpdateFor,
        UpdateTo: UpdateTo,
        UpdateStatus: "Pending",
        DateCreated: date.toLocaleString(),
    }).subscribe({
      next: (res) => {
        this.successMsg = "Submitted Successfully";
        this.isLoading = false; // hide loader
      },
      error: (err) => {
        console.error('error:', err);
        this.errorMsg = err.error?.error || 'failed!';
        this.isLoading = false; // hide loader
      }
    });
  }
}


