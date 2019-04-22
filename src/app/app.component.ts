import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calendar';
  month = [
    {
      date: 1,
      event: ""
    },
    {
      date: 2,
      event: ""
    },
    {
      date: 3,
      event: ""
    },
    {
      date: 4,
      event: ""
    },
    {
      date: 5,
      event: ""
    },
    {
      date: 6,
      event: ""
    },
    {
      date: 7,
      event: ""
    },
    {
      date: 8,
      event: ""
    },
    {
      date: 9,
      event: "Happy Birthday!"
    },
    {
      date: 10,
      event: ""
    },
    {
      date: 11,
      event: ""
    },
    {
      date: 12,
      event: ""
    },
    {
      date: 13,
      event: "Payday"
    },
    {
      date: 14,
      event: ""
    },
    {
      date: 15,
      event: ""
    },
    {
      date: 16,
      event: ""
    },
    {
      date: 17,
      event: "Taxes!"
    },
    {
      date: 18,
      event: ""
    },
    {
      date: 19,
      event: ""
    },
    {
      date: 20,
      event: ""
    },
    {
      date: 21,
      event: ""
    },
    {
      date: 22,
      event: ""
    },
    {
      date: 23,
      event: ""
    },
    {
      date: 24,
      event: ""
    },
    {
      date: 25,
      event: ""
    },
    {
      date: 26,
      event: ""
    },
    {
      date: 27,
      event: ""
    },
    {
      date: 28,
      event: ""
    },
    {
      date: 29,
      event: ""
    },
    {
      date: 30,
      event: ""
    },
    {
      date: 31,
      event: ""
    }
  ]
  selectedDay: any = {}

  selectDay(day) {
    this.selectedDay = day;
  }
}
