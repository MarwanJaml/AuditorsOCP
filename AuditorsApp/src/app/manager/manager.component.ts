import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms'
import { Manager } from '../shared/manager.model';
import { DashboardService } from '../shared/dashboard.service';
@Component({
  selector: 'app-manager',
  imports: [HttpClientModule, CommonModule, NgFor,RouterModule,FormsModule], 
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent implements OnInit {
  /*filteredS: any[] = [];
  search: string = '';
  paginatedS: any[] = []; 

  currentPage: number = 1;
  pageSize: number = 3; 
  totalPages: number = 0;*/

  constructor(public service: DashboardService,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.getList();
  }

  populateForm(record: Manager){
    this.service.newData =Object.assign({},record)
    this.navigateToForm()
  }

 

  deleteRecord(officeID: number) {
    if(confirm('Are you sure to delete this record ?'))
    this.service.deleteData(officeID)
      .subscribe({
        next: () => {
         this.toastr.error('Deleted Successfully', 'Recored Removed');
         this.service.getList(); 
       },
       error: err => console.log(err),
      });
  }
  
  navigateToForm() {
    this.router.navigate(['/app-manager-form']);
  }

  /*filteredStudent() {
    this.filteredS = this.service.records.filter((student) =>
      student.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
      student.lasttName.toLowerCase().includes(this.search.toLowerCase()) ||
      student.email.toLowerCase().includes(this.search.toLowerCase())
    );
    this.currentPage = 1; // Reset to first page
    this.updatePagination(); // Recalculate pagination
  }

  // Pagination logic
  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedS = this.filteredS.slice(startIndex, startIndex + this.pageSize);
    this.totalPages = Math.ceil(this.filteredS.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }*/
}


