import { Component, OnInit } from '@angular/core';
import { foo, MyClass, MyInterface } from 'my-lib';

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

    const myClass = new MyClass();
    console.info(myClass);

    const myInterface: MyInterface = {
      prop1: 2,
      prop2: 'b'
    };
    console.info(myInterface)
  }
}
