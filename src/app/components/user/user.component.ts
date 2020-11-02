import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe((getParams) => {
      console.log(getParams);
    });
  }

  ngOnInit(): void {}
}