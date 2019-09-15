import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mf-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  @ViewChild('dayIndicator', { static: false }) dayIndicator;

  selectedDay: number = 0;

  schedule = [
    [
      {
        title: 'Physik',
        room: 'C010',
      },
      {
        title: 'Deutsch',
        room: 'C206',
      },
      {
        title: 'Mathe',
        room: 'C105',
      },
    ],
    [
      {
        title: 'Computertechnik',
        room: 'CU05 / BU11',
      },
      {
        title: 'Informatik',
        room: 'C111',
      },
      {
        title: 'Informatik',
        room: 'C111',
      },
      {
        title: 'GGK',
        room: 'C208',
      },
    ],
    [
      {
        title: 'Englisch',
        room: 'C208',
      },
      {
        title: 'Deutsch',
        room: 'C206',
      },
      {
        title: 'Spanisch',
        room: 'C204',
      },
      {
        title: 'Wirtschaft',
        room: 'B210',
      },
    ],
    [
      {
        title: 'Mathe',
        room: 'C105',
      },
      {
        title: 'Informatik',
        room: 'C111',
      },
      {
        title: 'Spanisch',
        room: 'C203',
      },
      {
        title: 'Physik (praktisch)',
        room: 'C012',
      },
    ],
    [
      {
        title: 'Religion',
        room: 'C105',
      },
      {
        title: 'Englisch',
        room: 'C107',
      },
      {
        title: 'Physik',
        room: 'C012',
      },
      {
        title: 'Sport',
        room: 'RT01',
      },
    ],
  ];

  constructor() {}

  ngOnInit() {}

  onBoxClick(event, index) {
    this.selectedDay = index;
    let z = event.target['offsetLeft'];
    this.dayIndicator.nativeElement.style.left = z + 'px';
  }
}
