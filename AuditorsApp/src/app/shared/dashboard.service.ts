import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { NgForm } from '@angular/forms';
import { Manager } from './manager.model';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url: string = environment.apiURL+'/Managers'
  records: Manager[]=[]
  newData: Manager = new Manager()
  constructor(private http : HttpClient) { }

  getList(){
    this.http.get(this.url)
    .subscribe({
      next: res =>{
        this.records = res as Manager[]
      },
      error : err =>{console.log(err)}
    })
  }
  postData(){
    return this.http.post(this.url,this.newData)
  }
  putData(){
    return this.http.put(this.url+ '/'+this.newData.officeID,this.newData)
  }
  deleteData(id:number){
    return this.http.delete(this.url+ '/'+id)

  }

  reset(studentForm : NgForm){
    studentForm.form.reset()
    this.newData = new Manager()

  }
}
