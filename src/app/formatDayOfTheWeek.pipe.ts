import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "dayOfTheWeek"
})

export class DayOfTheWeek implements PipeTransform {
  transform(value: number): string {
    let nameOfTheDay = [
      "SUN",
      "MON",
      "TUES",
      "WED",
      "THURS",
      "FRI",
      "SAT"
    ];
    let index = this.findDayIndex(value);
    return nameOfTheDay[index];
  }

  findDayIndex(date: number): number {
    const seven = 7;
    let idx;
    if (date > seven) {
      idx = date % 7 - 1
      if (idx == -1) {
        idx = 6;
      }
    } else {
      idx = date - 1;
    }
    console.log(idx + "  day:" + date);
    return idx;
  }
}