import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss'],
})
export class WorkHistoryComponent implements OnInit {
  education = [
    {
      jobdescription: 'Dashboard Latif App (FrontEnd)',
      student: 'student',
      period: 'Jan 2019 - Dec 2020',
      companyname: 'freelancer',
      description:
        'Determining the structure and design of web pages Ensuring user experience determines design choices Developing features to enhance the user experience Striking a balance between functional and aesthetic design Ensuring web design is optimized for smartphones Building reusable code for future use.',
    },
       {
      jobdescription: 'Junior Web Designer (FrontEnd)',
      student: 'Junior',
      period: 'Jan 2021 - april 2021',
      companyname: 'Ecommerce ,ITI graduation project',
      description:
        'Web Application Using (Angular) features : Dashboard Responsive Web Site Lazy load component',
    },
    {
      jobdescription: 'Junior Web Designer (FrontEnd)',
      student: 'Junior',
      period: 'Jan 2022 - april 2022',
      companyname: 'Juthor Company',
      description:
        'Building the ‘client-side’ of our web applications Translate the company and customer needs into functional and appealing interactive applications Use markup languages like HTML to create user-friendly web pages Maintain and improve website Optimize applications for maximum speed Design mobile-based features',
    },
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
