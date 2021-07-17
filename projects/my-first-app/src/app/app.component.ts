import { Component, OnInit } from '@angular/core';
import { foo } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-first-app';

  ngOnInit() {
    const value = foo();
    console.info(value);
  }
}
