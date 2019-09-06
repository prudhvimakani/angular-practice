import { Component } from '@angular/core';

@Component({
selector: 'app-server',
templateUrl: './server.component.html'
})

export class ServerComponent {
    name: string = 'Angular'
   
    email1;
    onKeyUp(email) {
        console.log(email)
    }
    onKeyUpTwoWayBind() {
        console.log(this.email1)
    }
}