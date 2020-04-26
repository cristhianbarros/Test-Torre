import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
declare var $: any;

export interface IPeople {
  context: {};
  _meta: {};
  compensations: {
    employee: {
      amount: number,
      currency: string,
      periodicity: string,
    },
  };
  locationName: string;
  name: string;
  openTo: [];
  picture: string;
  professionalHeadline: string;
  remoter: boolean;
  skills: [
    {
      code: number,
      name: string,
      weight: number,
    }
  ];
  subjectId: string;
  username: string;
  verified: boolean;
  weight: number;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  people: IPeople[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe((people: any) => {
      this.people = people.results;
    });
  }

}
