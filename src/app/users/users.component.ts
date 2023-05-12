import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  ngOnInit(): void {
    this.test();
  }

  test(){
    return 100;
  }
}
