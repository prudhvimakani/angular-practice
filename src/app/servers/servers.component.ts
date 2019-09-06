import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = 'No server was created'
  serverName = 'Test'

  desc = 'The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object.Below are some examples of how you can use the document object to access and manipulate HTML.'
  course = {
    title: 'Angular JS complete course',
    rating: 4.78979,
    students: 54568,
    price: 1212.89789,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreateStatus = 'Server is created'
  }
  onUpdateServerName(event: any) {
    console.log("inside......")
    this.serverName = event.target.value;
  }
}
