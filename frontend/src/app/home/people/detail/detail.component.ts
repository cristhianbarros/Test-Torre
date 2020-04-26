import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

export interface IBio {
  person: {
    professionalHeadline: string;
    completion: number;
    showPhone: boolean;
    created: string;
    verified: boolean;
    flags: {};
    weight: number;
    locale: string;
    subjectId: string;
    picture: string;
    hasEmail: boolean;
    name: string;
    links: [
      {
        id: string;
        name: string;
        address: string;
      }
    ];
    location: {
      name: string;
      latitude: number;
      longitude: number;
      timezone: string;
      timezoneOffSet: number;
    };
    theme: string;
    id: string;
    pictureThumbnail: string;
    claimant: boolean;
    weightGraph: string;
    publicId: string;
  };
  stats: {
    projects: number;
    education: number;
    strengths: number;
    interests: number;
  };
  strengths: [
    {
      id: string;
      code: number;
      name: string;
      weight: number;
      recommendations: number;
      media: [];
      created: string;
    }
  ];
  interests: [
    {
      id: string;
      code: number;
      name: string;
      media: [];
      created: string;
    }
  ];
  experiences: [
    {
      id: string;
      category: string;
      name: string;
      organizations: [
        {
          id: number;
          name: string;
        }
      ];
      fromMonth: string;
      fromYear: string;
      toMonth: string;
      toYear: string;
      remote: boolean;
      additionalInfo: string;
      highlighted: boolean;
      weight: number;
      verifications: number;
      recommendations: number;
      media: [];
    }
  ];
  achievements: [];
  jobs: [];
  projects: [
    {
      id: string;
      category: string;
      name: string;
      organizations: [
        {
          id: number;
          name: string;
        }
      ];
      fromMonth: string;
      fromYear: string;
      toMonth: string;
      toYear: string;
      remote: boolean;
      additionalInfo: string;
      highlighted: boolean;
      weight: number;
      verifications: number;
      recommendations: number;
      media: [];
    }
  ];
  publications: [];
  education: [
    {
      id: string;
      category: string;
      name: string;
      organizations: [
        {
          id: number;
          name: string;
        }
      ];
      fromMonth: string;
      fromYear: string;
      toMonth: string;
      toYear: string;
      remote: boolean;
      additionalInfo: string;
      highlighted: boolean;
      weight: number;
      verifications: number;
      recommendations: number;
      media: [];
    }
  ];
  opportunities: [
    {
      id: string;
      interest: string;
      field: string;
      data: [];
    }
  ];
  languages: [
    {
      code: string
      language: string;
      fluency: string;
    }
  ];
  personalityTraitsResults: {
    groups: [
      {
        id: string;
        order: number;
        median: number;
        stddev: number;
      }
    ];
    analyses: [
      {
        groupId: string;
        analysis: number;
      }
    ];
  };
  professionalCultureGenomeResults: {
    groups: [
      {
        id: string;
        text: string;
        answer: string;
        order: number;
      }
    ];
    analyses: [
      {
        groupId: string;
        section: string;
        analysis: number;
      }];
  };
}


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  bio: IBio;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('username')) {
        this.peopleService.getBio(paramMap.get('username')).subscribe( (bio: any) => {
          this.bio = bio;
        });
      }
    });
  }
}
