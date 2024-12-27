import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardService } from '../shared/dashboard.service';
import { Manager } from '../shared/manager.model';
@Component({
  selector: 'app-manager-form',
  imports: [FormsModule, NgIf],
  templateUrl: './manager-form.component.html',
  styleUrl: './manager-form.component.css'
})
export class ManagerFormComponent {
  
  constructor(public service: DashboardService, private toastr: ToastrService,private router: Router) {}

  onSubmit(Form: NgForm){
    if(this.service.newData.officeID == 0)
      this.addRecord(Form)
    else
      this.updateRecord(Form)
  }


  addRecord(Form: NgForm){
    this.service.postData()
    .subscribe({
      next: res => {
        this.service.records= res as Manager[]
        console.log(res)
        this.service.reset(Form)
        this.toastr.success('Inserted Successfully', 'New Record is Added')
        this.navigateToTable()

      },
      error: err=> {console.log(err)}
    })
  }
  updateRecord(Form: NgForm){
    this.service.putData()
    .subscribe({
      next: res => {
        this.service.records= res as Manager[]
        console.log(res)
        this.service.reset(Form)
        this.toastr.info('Updated Successfully', 'Data is Updated')
        this.navigateToTable()

      },
      error: err=> {console.log(err)}
    })
    
  }
  navigateToTable() {
    this.router.navigate(['/app-manager']);
  }


}
