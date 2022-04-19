import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  education = [
    {
      university: 'Egyptian e-Learning University',
      student: 'student',
      period: 'Jan 2014 - Dec 2018',
      department: ' computer science and Information Technology',
      graduated:
        ' Graduated from the Faculty of computer science and Information Technology.BACHELOR’S Degree in Computer Science (2014 – 2018)',
    },
    {
      university: 'Information Technology Institute (ITI)',
      student: 'student',
      period: 'Jan 2021 - april 2021',
      department: 'MEARN STACK DIPLOMA ',
      graduated: 'Project: Ecommerce ,ITI graduation project Web Application Using (Angular)features:Dashboard Responsive Web Site Lazy load component'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
