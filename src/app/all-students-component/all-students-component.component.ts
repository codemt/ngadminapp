import { Component, OnInit } from '@angular/core';
import {  GetAllStudentsService } from '../Providers/get-all-students.service';
@Component({
  selector: 'app-all-students-component',
  templateUrl: './all-students-component.component.html',
  styleUrls: ['./all-students-component.component.css']
})
export class AllStudentsComponentComponent implements OnInit {


  students: any;
  constructor(private getStudents: GetAllStudentsService) { }

  ngOnInit() {

    this.displayStudents();

  }

  displayStudents() {
    this.getStudents.getAllStudents().subscribe(res => {
      console.log(res);

      this.students = res;

     console.log('Students are ', this.students);
  });
  }


}
