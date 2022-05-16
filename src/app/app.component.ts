import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapp-ui';

  getUser(){
    let user = localStorage.getItem('LOGGED_IN_USER');
    if(user != null){
      return JSON.parse(user);
    }
    return null;
  }
  getStyle(){
    let clazz = '';
    let role = this.getUser()?.role;
    if(role=='admin'){
      clazz = 'sidebar-open';
    }
    return clazz;
  }
}
