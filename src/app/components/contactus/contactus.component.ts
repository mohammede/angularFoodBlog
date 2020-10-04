import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  mailIsSent:string;
  myForm:FormGroup;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams
  .subscribe(params => {
    this.mailIsSent = params.mailIsSent;
  });
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(),
      subject: new FormControl(''),
      email: new FormControl(''),
      content: new FormControl(''),
    });
  }
  onSubmit(form){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['contactus'],{ queryParams: { mailIsSent: 'true' } });
    })
  }
}
