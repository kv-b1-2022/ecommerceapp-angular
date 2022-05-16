import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapp-ui';

 constructor(public authService:AuthService){}
  getStyle(){
    let clazz = '';
    let role = this.authService.getUser()?.role;
    if(role=='admin'){
      clazz = 'sidebar-open';
    }
    return clazz;
  }
}
