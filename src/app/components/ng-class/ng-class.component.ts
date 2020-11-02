import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  alertt: string = 'alert-danger';
  properties: object = {
    danger: false,
  };
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  run() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
}
