import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallettransactions',
  templateUrl: './wallettransactions.component.html',
  styles: [
  ]
})
export class WallettransactionsComponent implements OnInit {
transactions!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
