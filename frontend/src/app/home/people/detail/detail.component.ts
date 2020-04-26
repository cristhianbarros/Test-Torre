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
  // bio: IBio;
  bio = {
    "person": {
        "professionalHeadline": "Multimedia Producer & Content Creator",
        "completion": 1,
        "showPhone": false,
        "created": "2019-07-28T22:37:44Z",
        "verified": true,
        "flags": {
            "benefits": true,
            "canary": false,
            "enlauSource": false,
            "fake": false,
            "featureDiscovery": false,
            "getSignaledBenefitsViewed": false,
            "firstSignalSent": true,
            "promoteYourselfBenefitsViewed": false,
            "promoteYourselfCompleted": false,
            "importingLinkedin": false,
            "onBoarded": true,
            "opportunitiesNotificationsSent": true,
            "remoter": true,
            "signalsFeatureDiscovery": true,
            "signedInToOpportunities": true,
            "importingLinkedinRecommendations": false,
            "contactsImported": true
        },
        "weight": 2205.8282,
        "locale": "en",
        "subjectId": "28478",
        "picture": "https://starrgate.s3.amazonaws.com:443/users/03a4b0d0368d3b72c70360a759ce6eb85914d004/profile_NXXCgL9.jpg",
        "hasEmail": true,
        "name": "Josephine Tse",
        "links": [
            {
                "id": "zNGowVNx",
                "name": "",
                "address": "http://www.josephinetse.ca"
            },
            {
                "id": "gyYqOXyP",
                "name": "linkedin",
                "address": "https://linkedin.com/in/JosephineTse95"
            },
            {
                "id": "qy0bOQMg",
                "name": "twitter",
                "address": "https://twitter.com/JosephineT95"
            }
        ],
        "location": {
            "name": "Toronto, ON, Canada",
            "latitude": 43.653226,
            "longitude": -79.3831843,
            "timezone": "America/Toronto",
            "timezoneOffSet": -18000000
        },
        "theme": "deepPurple300",
        "id": "JMeDRaN0",
        "pictureThumbnail": "https://starrgate.s3.amazonaws.com:443/users/03a4b0d0368d3b72c70360a759ce6eb85914d004/profile_NXXCgL9.jpg",
        "claimant": false,
        "weightGraph": "https://hcti.io/v1/image/116a32ae-b3f6-4def-a157-0f7e99d43f05",
        "publicId": "josephinetse"
    },
    "stats": {
        "strengths": 29,
        "education": 1,
        "interests": 3,
        "jobs": 5,
        "projects": 1
    },
    "strengths": [
        {
            "id": "BMLD64rM",
            "code": 40069,
            "name": "Content Creation",
            "weight": 29.3875,
            "recommendations": 1,
            "media": [],
            "created": "2020-04-17T07:03:19"
        },
        {
            "id": "JMeXqYEN",
            "code": 37016,
            "name": "Problem Solving Skills",
            "weight": 19.552,
            "recommendations": 1,
            "media": [],
            "created": "2020-04-05T15:26:01"
        },
        {
            "id": "vN8J9E7j",
            "code": 56046,
            "name": "Producer",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-10-12T13:57:11"
        },
        {
            "id": "8jpLn9jX",
            "code": 55801,
            "name": "Organization",
            "weight": 81.8717,
            "recommendations": 2,
            "media": [],
            "created": "2019-08-18T18:31:18"
        },
        {
            "id": "pydvBGMP",
            "code": 36248,
            "name": "Empathy",
            "weight": 106.25,
            "recommendations": 3,
            "media": [],
            "created": "2019-08-13T00:46:46"
        },
        {
            "id": "mjlDxDjZ",
            "code": 18645,
            "name": "Marketing",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-08-13T00:24:01"
        },
        {
            "id": "ZNOdX0M8",
            "code": 197594,
            "name": "Willingness to Learn",
            "weight": 42.5,
            "recommendations": 1,
            "media": [],
            "created": "2019-08-13T00:24:00"
        },
        {
            "id": "bjAd5vMX",
            "code": 55737,
            "name": "Work Ethic",
            "weight": 234.3504,
            "recommendations": 3,
            "media": [],
            "created": "2019-08-12T21:40:30"
        },
        {
            "id": "8jp0v9jX",
            "code": 197441,
            "name": "Results-Orientation",
            "weight": 83.302,
            "recommendations": 2,
            "media": [],
            "created": "2019-08-12T21:40:30"
        },
        {
            "id": "eynGEnNa",
            "code": 1303,
            "name": "Photography",
            "weight": 42.5,
            "recommendations": 1,
            "media": [],
            "created": "2019-08-12T21:16:29"
        },
        {
            "id": "WNVdA6jr",
            "code": 54639,
            "name": "Videography",
            "weight": 42.5,
            "recommendations": 1,
            "media": [],
            "created": "2019-08-12T21:16:29"
        },
        {
            "id": "9MBdJ9yg",
            "code": 127814,
            "name": "Website Development",
            "weight": 42.5,
            "recommendations": 1,
            "media": [],
            "created": "2019-08-12T21:16:29"
        },
        {
            "id": "ANaeY4Nn",
            "code": 55456,
            "name": "Enthusiasm",
            "weight": 243.9742,
            "recommendations": 7,
            "media": [],
            "created": "2019-08-12T21:00:53"
        },
        {
            "id": "vy515DyY",
            "code": 55142,
            "name": "Adaptability",
            "weight": 125.802,
            "recommendations": 3,
            "media": [],
            "created": "2019-08-12T21:00:53"
        },
        {
            "id": "xyXdakyq",
            "code": 70306,
            "name": "Creative Direction",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-08-12T20:31:53"
        },
        {
            "id": "vN8nPDjo",
            "code": 55693,
            "name": "Video Production",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-08-12T20:31:53"
        },
        {
            "id": "xM9wLzyQ",
            "code": 45396,
            "name": "Leadership",
            "weight": 246.2778,
            "recommendations": 8,
            "media": [],
            "created": "2019-07-29T02:44:16"
        },
        {
            "id": "Oj6xwQNp",
            "code": 44220,
            "name": "Inbound Marketing",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "BMLvEbyD",
            "code": 44546,
            "name": "Interviewing Skills",
            "weight": 42.5,
            "recommendations": 1,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "vy50KbjY",
            "code": 54613,
            "name": "Video",
            "weight": 0.0737,
            "recommendations": 3,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "ANa6woMn",
            "code": 13307,
            "name": "Content Marketing",
            "weight": 42.5,
            "recommendations": 1,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "AjrgW0yD",
            "code": 49097,
            "name": "Podcasting",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "kybL49Mz",
            "code": 56087,
            "name": "Remote work",
            "weight": 14.3515,
            "recommendations": 1,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "9MBreXMg",
            "code": 6217,
            "name": "Project Management",
            "weight": 384.7579,
            "recommendations": 10,
            "media": [],
            "created": "2019-07-29T02:44:16"
        },
        {
            "id": "JyQ81njQ",
            "code": 13242,
            "name": "Public Relations - PR",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "7M2PD2yR",
            "code": 40125,
            "name": "Copywriting",
            "weight": 0,
            "recommendations": 0,
            "media": [],
            "created": "2019-07-29T00:36:57"
        },
        {
            "id": "nM4Y0kj7",
            "code": 55317,
            "name": "Creativity",
            "weight": 219.845,
            "recommendations": 6,
            "media": [],
            "created": "2019-07-29T00:30:40"
        },
        {
            "id": "9MERg1jl",
            "code": 55266,
            "name": "Communication",
            "weight": 160.8592,
            "recommendations": 8,
            "media": [],
            "created": "2019-07-29T00:30:35"
        },
        {
            "id": "gyYxv2jP",
            "code": 55424,
            "name": "Early adopter",
            "weight": 0.1735,
            "recommendations": 1,
            "media": [],
            "created": "2019-07-28T22:51:13"
        }
    ],
    "interests": [
        {
            "id": "EM3EvAya",
            "code": 45396,
            "name": "Leadership",
            "media": [],
            "created": "2019-07-29T00:30:47"
        },
        {
            "id": "kNmBmqM5",
            "code": 55142,
            "name": "Adaptability",
            "media": [],
            "created": "2019-07-29T00:30:52"
        },
        {
            "id": "JMekQDy0",
            "code": 18645,
            "name": "Marketing",
            "media": [],
            "created": "2019-07-29T00:31:00"
        }
    ],
    "experiences": [
        {
            "id": "pyJbEmyJ",
            "category": "education",
            "name": "RTA School of Media - Media Production",
            "organizations": [
                {
                    "id": 849,
                    "name": "Ryerson University"
                }
            ],
            "fromMonth": "September",
            "fromYear": "2013",
            "toMonth": "June",
            "toYear": "2017",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 3,
            "recommendations": 2,
            "media": []
        },
        {
            "id": "pyolr4AN",
            "category": "jobs",
            "name": "Remoter Ambassador",
            "organizations": [
                {
                    "id": 203856,
                    "name": "Torre"
                }
            ],
            "fromMonth": "October",
            "fromYear": "2019",
            "remote": true,
            "additionalInfo": "Integrated content production and marketing to grow remoter.com into a comprehensive library about remote work.",
            "highlighted": true,
            "weight": 1057.3229,
            "verifications": 10,
            "recommendations": 9,
            "media": [
                {
                    "group": "f6a125ec-7d65-4170-b428-94d371d1bc39",
                    "mediaType": "link",
                    "description": "",
                    "mediaItems": [
                        {
                            "id": "0yznpgyE",
                            "address": "http://remoter.com"
                        }
                    ]
                }
            ]
        },
        {
            "id": "LMgwkWME",
            "category": "projects",
            "name": "Shades of Our Sisters",
            "contributions": "Project Manager + Digital Director",
            "organizations": [],
            "fromMonth": "September",
            "fromYear": "2015",
            "toMonth": "June",
            "toYear": "2018",
            "highlighted": true,
            "weight": 510,
            "verifications": 4,
            "recommendations": 4,
            "media": []
        },
        {
            "id": "zNG9mEjx",
            "category": "jobs",
            "name": "Assistant Production Coordinator",
            "organizations": [
                {
                    "id": 65486,
                    "name": "MediaOne Creative"
                }
            ],
            "fromMonth": "November",
            "fromYear": "2016",
            "toMonth": "February",
            "toYear": "2017",
            "remote": false,
            "additionalInfo": "",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 1,
            "recommendations": 1,
            "media": []
        },
        {
            "id": "AMWvAqNn",
            "category": "jobs",
            "name": "Videographer and Photographer (Content Creator)",
            "organizations": [
                {
                    "id": 64885,
                    "name": "Hoodline"
                }
            ],
            "fromMonth": "June",
            "fromYear": "2016",
            "toMonth": "August",
            "toYear": "2016",
            "remote": false,
            "additionalInfo": "Created and edited video compilations for the website and mobile application. \nProduced, wrote and edited original stories weekly. ",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 1,
            "recommendations": 1,
            "media": []
        },
        {
            "id": "RyD2ZaMX",
            "category": "jobs",
            "name": "Production Intern",
            "organizations": [
                {
                    "id": 163349,
                    "name": "Leo Burnett"
                }
            ],
            "fromMonth": "June",
            "fromYear": "2017",
            "toMonth": "August",
            "toYear": "2017",
            "remote": false,
            "additionalInfo": "",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 2,
            "recommendations": 2,
            "media": [
                {
                    "group": "ec0b8d4b-a0f0-498e-975f-29812b256b8a",
                    "mediaType": "link",
                    "description": "",
                    "mediaItems": [
                        {
                            "id": "9MBqq2Ng",
                            "address": "https://www.josephinetse.ca/live-event-activations"
                        }
                    ]
                }
            ]
        },
        {
            "id": "xyXqRrNq",
            "category": "jobs",
            "name": "Post Producer",
            "organizations": [
                {
                    "id": 59312,
                    "name": "Publicis"
                }
            ],
            "fromMonth": "October",
            "fromYear": "2017",
            "toMonth": "",
            "toYear": "",
            "remote": false,
            "additionalInfo": "",
            "highlighted": true,
            "weight": 127.6473,
            "verifications": 3,
            "recommendations": 3,
            "media": [
                {
                    "group": "e752f67c-0cfd-4ce3-901a-cb452e23492d",
                    "mediaType": "link",
                    "description": "",
                    "mediaItems": [
                        {
                            "id": "WNVooKMr",
                            "address": "https://www.josephinetse.ca/post-production"
                        }
                    ]
                }
            ]
        }
    ],
    "achievements": [],
    "jobs": [
        {
            "id": "pyolr4AN",
            "category": "jobs",
            "name": "Remoter Ambassador",
            "organizations": [
                {
                    "id": 203856,
                    "name": "Torre"
                }
            ],
            "fromMonth": "October",
            "fromYear": "2019",
            "remote": true,
            "additionalInfo": "Integrated content production and marketing to grow remoter.com into a comprehensive library about remote work.",
            "highlighted": true,
            "weight": 1057.3229,
            "verifications": 10,
            "recommendations": 9,
            "media": [
                {
                    "group": "f6a125ec-7d65-4170-b428-94d371d1bc39",
                    "mediaType": "link",
                    "description": "",
                    "mediaItems": [
                        {
                            "id": "0yznpgyE",
                            "address": "http://remoter.com"
                        }
                    ]
                }
            ]
        },
        {
            "id": "zNG9mEjx",
            "category": "jobs",
            "name": "Assistant Production Coordinator",
            "organizations": [
                {
                    "id": 65486,
                    "name": "MediaOne Creative"
                }
            ],
            "fromMonth": "November",
            "fromYear": "2016",
            "toMonth": "February",
            "toYear": "2017",
            "remote": false,
            "additionalInfo": "",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 1,
            "recommendations": 1,
            "media": []
        },
        {
            "id": "AMWvAqNn",
            "category": "jobs",
            "name": "Videographer and Photographer (Content Creator)",
            "organizations": [
                {
                    "id": 64885,
                    "name": "Hoodline"
                }
            ],
            "fromMonth": "June",
            "fromYear": "2016",
            "toMonth": "August",
            "toYear": "2016",
            "remote": false,
            "additionalInfo": "Created and edited video compilations for the website and mobile application. \nProduced, wrote and edited original stories weekly. ",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 1,
            "recommendations": 1,
            "media": []
        },
        {
            "id": "RyD2ZaMX",
            "category": "jobs",
            "name": "Production Intern",
            "organizations": [
                {
                    "id": 163349,
                    "name": "Leo Burnett"
                }
            ],
            "fromMonth": "June",
            "fromYear": "2017",
            "toMonth": "August",
            "toYear": "2017",
            "remote": false,
            "additionalInfo": "",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 2,
            "recommendations": 2,
            "media": [
                {
                    "group": "ec0b8d4b-a0f0-498e-975f-29812b256b8a",
                    "mediaType": "link",
                    "description": "",
                    "mediaItems": [
                        {
                            "id": "9MBqq2Ng",
                            "address": "https://www.josephinetse.ca/live-event-activations"
                        }
                    ]
                }
            ]
        },
        {
            "id": "xyXqRrNq",
            "category": "jobs",
            "name": "Post Producer",
            "organizations": [
                {
                    "id": 59312,
                    "name": "Publicis"
                }
            ],
            "fromMonth": "October",
            "fromYear": "2017",
            "toMonth": "",
            "toYear": "",
            "remote": false,
            "additionalInfo": "",
            "highlighted": true,
            "weight": 127.6473,
            "verifications": 3,
            "recommendations": 3,
            "media": [
                {
                    "group": "e752f67c-0cfd-4ce3-901a-cb452e23492d",
                    "mediaType": "link",
                    "description": "",
                    "mediaItems": [
                        {
                            "id": "WNVooKMr",
                            "address": "https://www.josephinetse.ca/post-production"
                        }
                    ]
                }
            ]
        }
    ],
    "projects": [
        {
            "id": "LMgwkWME",
            "category": "projects",
            "name": "Shades of Our Sisters",
            "contributions": "Project Manager + Digital Director",
            "organizations": [],
            "fromMonth": "September",
            "fromYear": "2015",
            "toMonth": "June",
            "toYear": "2018",
            "highlighted": true,
            "weight": 510,
            "verifications": 4,
            "recommendations": 4,
            "media": []
        }
    ],
    "publications": [],
    "education": [
        {
            "id": "pyJbEmyJ",
            "category": "education",
            "name": "RTA School of Media - Media Production",
            "organizations": [
                {
                    "id": 849,
                    "name": "Ryerson University"
                }
            ],
            "fromMonth": "September",
            "fromYear": "2013",
            "toMonth": "June",
            "toYear": "2017",
            "highlighted": true,
            "weight": 127.5,
            "verifications": 3,
            "recommendations": 2,
            "media": []
        }
    ],
    "opportunities": [
        {
            "id": "vN8eKoQM",
            "interest": "hiring",
            "field": "active",
            "data": true
        },
        {
            "id": "Oj6l7lPN",
            "interest": "jobs",
            "field": "active",
            "data": true
        },
        {
            "id": "BMLlVloM",
            "interest": "jobs",
            "field": "private",
            "data": false
        },
        {
            "id": "ny1lGlvj",
            "interest": "jobs",
            "field": "desirable-compensation-currency",
            "data": "USD$"
        },
        {
            "id": "gMRl9lPy",
            "interest": "jobs",
            "field": "desirable-compensation-amount",
            "data": 50000
        },
        {
            "id": "pyoLbLZN",
            "interest": "jobs",
            "field": "desirable-compensation-periodicity",
            "data": "yearly"
        },
        {
            "id": "eyn6L6ny",
            "interest": "jobs",
            "field": "desirable-compensation-publicly-visible",
            "data": true
        },
        {
            "id": "pydY9Y5N",
            "interest": "gigs",
            "field": "active",
            "data": false
        },
        {
            "id": "5yk4L4kN",
            "interest": "internships",
            "field": "active",
            "data": false
        },
        {
            "id": "8yZq9qWj",
            "interest": "mentoring",
            "field": "active",
            "data": false
        },
        {
            "id": "EM3l0lBj",
            "interest": "advising",
            "field": "active",
            "data": false
        },
        {
            "id": "8jp5B58y",
            "interest": "industries",
            "field": "types",
            "data": [
                {
                    "code": 5550,
                    "locale": "en",
                    "name": "Media"
                },
                {
                    "code": 5750,
                    "locale": "en",
                    "name": "Travel & Leisure"
                },
                {
                    "locale": "en",
                    "name": "Technology"
                },
                {
                    "locale": "en",
                    "name": "Arts & Culture"
                }
            ]
        }
    ],
    "languages": [
        {
            "code": "en",
            "language": "English",
            "fluency": "fully-fluent"
        },
        {
            "code": "zh",
            "language": "Chinese",
            "fluency": "conversational"
        },
        {
            "code": "fr",
            "language": "French",
            "fluency": "reading"
        },
        {
            "code": "es",
            "language": "Spanish",
            "fluency": "reading"
        }
    ],
    "personalityTraitsResults": {
        "groups": [
            {
                "id": "extraversion",
                "order": 0,
                "median": 3.5,
                "stddev": 0.57
            },
            {
                "id": "openness-to-experience",
                "order": 1,
                "median": 3.41,
                "stddev": 0.6
            },
            {
                "id": "conscientiousness",
                "order": 2,
                "median": 3.44,
                "stddev": 0.56
            },
            {
                "id": "agreeableness",
                "order": 3,
                "median": 2.94,
                "stddev": 0.58
            },
            {
                "id": "honesty-humility",
                "order": 4,
                "median": 3.19,
                "stddev": 0.62
            },
            {
                "id": "emotionality",
                "order": 5,
                "median": 3.43,
                "stddev": 0.62
            }
        ],
        "analyses": [
            {
                "groupId": "openness-to-experience",
                "analysis": 4.06
            },
            {
                "groupId": "honesty-humility",
                "analysis": 3.63
            },
            {
                "groupId": "agreeableness",
                "analysis": 3.44
            },
            {
                "groupId": "altruism",
                "analysis": 3.75
            },
            {
                "groupId": "conscientiousness",
                "analysis": 3.88
            },
            {
                "groupId": "emotionality",
                "analysis": 3.94
            },
            {
                "groupId": "extraversion",
                "analysis": 3.94
            }
        ]
    },
    "professionalCultureGenomeResults": {
        "groups": [
            {
                "id": "2",
                "text": "Action oriented",
                "answer": "all-the-time",
                "order": 0
            },
            {
                "id": "3",
                "text": "Adaptability",
                "answer": "all-the-time",
                "order": 1
            },
            {
                "id": "8",
                "text": "Being careful",
                "answer": "all-the-time",
                "order": 2
            },
            {
                "id": "12",
                "text": "Being easygoing",
                "answer": "all-the-time",
                "order": 3
            },
            {
                "id": "14",
                "text": "Being honest",
                "answer": "all-the-time",
                "order": 4
            },
            {
                "id": "15",
                "text": "Being innovative",
                "answer": "all-the-time",
                "order": 5
            },
            {
                "id": "19",
                "text": "Being quick to take advantage of opportunities",
                "answer": "all-the-time",
                "order": 6
            },
            {
                "id": "23",
                "text": "Being supportive",
                "answer": "all-the-time",
                "order": 7
            },
            {
                "id": "24",
                "text": "Being team oriented",
                "answer": "all-the-time",
                "order": 8
            },
            {
                "id": "28",
                "text": "Cooperative",
                "answer": "all-the-time",
                "order": 9
            },
            {
                "id": "29",
                "text": "Emphasis on professional growth",
                "answer": "all-the-time",
                "order": 10
            },
            {
                "id": "30",
                "text": "Emphasizing quality",
                "answer": "all-the-time",
                "order": 11
            },
            {
                "id": "32",
                "text": "Hard-driving",
                "answer": "all-the-time",
                "order": 12
            },
            {
                "id": "33",
                "text": "Having high ethical standards",
                "answer": "all-the-time",
                "order": 13
            },
            {
                "id": "34",
                "text": "Having high expectations for performance",
                "answer": "all-the-time",
                "order": 14
            },
            {
                "id": "35",
                "text": "Having integrity",
                "answer": "all-the-time",
                "order": 15
            },
            {
                "id": "38",
                "text": "Learning from mistakes",
                "answer": "all-the-time",
                "order": 16
            },
            {
                "id": "42",
                "text": "Paying attention to detail",
                "answer": "all-the-time",
                "order": 17
            },
            {
                "id": "45",
                "text": "Respecting individuals",
                "answer": "all-the-time",
                "order": 18
            },
            {
                "id": "46",
                "text": "Risk-taking",
                "answer": "all-the-time",
                "order": 19
            },
            {
                "id": "50",
                "text": "Taking individual responsibility",
                "answer": "all-the-time",
                "order": 20
            },
            {
                "id": "51",
                "text": "Taking initiative",
                "answer": "all-the-time",
                "order": 21
            },
            {
                "id": "54",
                "text": "Working in collaboration with others",
                "answer": "all-the-time",
                "order": 22
            },
            {
                "id": "1",
                "text": "Achievement oriented",
                "answer": "most-of-the-time",
                "order": 23
            },
            {
                "id": "7",
                "text": "Being calm",
                "answer": "most-of-the-time",
                "order": 24
            },
            {
                "id": "9",
                "text": "Being competitive",
                "answer": "most-of-the-time",
                "order": 25
            },
            {
                "id": "10",
                "text": "Being customer oriented",
                "answer": "most-of-the-time",
                "order": 26
            },
            {
                "id": "17",
                "text": "Being people oriented",
                "answer": "most-of-the-time",
                "order": 27
            },
            {
                "id": "18",
                "text": "Being precise",
                "answer": "most-of-the-time",
                "order": 28
            },
            {
                "id": "20",
                "text": "Being reflective",
                "answer": "most-of-the-time",
                "order": 29
            },
            {
                "id": "21",
                "text": "Being results oriented",
                "answer": "most-of-the-time",
                "order": 30
            },
            {
                "id": "25",
                "text": "Being tolerant",
                "answer": "most-of-the-time",
                "order": 31
            },
            {
                "id": "26",
                "text": "Being willing to experiment",
                "answer": "most-of-the-time",
                "order": 32
            },
            {
                "id": "27",
                "text": "Confronting conflict directly",
                "answer": "most-of-the-time",
                "order": 33
            },
            {
                "id": "31",
                "text": "Fast moving",
                "answer": "most-of-the-time",
                "order": 34
            },
            {
                "id": "39",
                "text": "Listening to customers",
                "answer": "most-of-the-time",
                "order": 35
            },
            {
                "id": "44",
                "text": "Putting organization's goals before unit's goals",
                "answer": "most-of-the-time",
                "order": 36
            },
            {
                "id": "48",
                "text": "Sharing information freely",
                "answer": "most-of-the-time",
                "order": 37
            },
            {
                "id": "49",
                "text": "Stability",
                "answer": "most-of-the-time",
                "order": 38
            },
            {
                "id": "52",
                "text": "Urgency",
                "answer": "most-of-the-time",
                "order": 39
            },
            {
                "id": "53",
                "text": "What you know matters more than who you know",
                "answer": "most-of-the-time",
                "order": 40
            },
            {
                "id": "6",
                "text": "Being analytical",
                "answer": "sometimes",
                "order": 41
            },
            {
                "id": "11",
                "text": "Being decisive",
                "answer": "sometimes",
                "order": 42
            },
            {
                "id": "13",
                "text": "Being fair",
                "answer": "sometimes",
                "order": 43
            },
            {
                "id": "16",
                "text": "Being market driven",
                "answer": "sometimes",
                "order": 44
            },
            {
                "id": "22",
                "text": "Being rule oriented",
                "answer": "sometimes",
                "order": 45
            },
            {
                "id": "37",
                "text": "Individual goals are transparent",
                "answer": "sometimes",
                "order": 46
            },
            {
                "id": "40",
                "text": "Making your numbers",
                "answer": "sometimes",
                "order": 47
            },
            {
                "id": "41",
                "text": "Not being constrained by many rules",
                "answer": "sometimes",
                "order": 48
            },
            {
                "id": "43",
                "text": "Predictability",
                "answer": "sometimes",
                "order": 49
            },
            {
                "id": "47",
                "text": "Security of employment",
                "answer": "sometimes",
                "order": 50
            },
            {
                "id": "4",
                "text": "Avoiding conflict",
                "answer": "rarely",
                "order": 51
            },
            {
                "id": "5",
                "text": "Being aggressive",
                "answer": "rarely",
                "order": 52
            },
            {
                "id": "36",
                "text": "High levels of conflict",
                "answer": "rarely",
                "order": 53
            }
        ],
        "analyses": [
            {
                "groupId": "1",
                "section": "adaptability",
                "analysis": -0.15
            },
            {
                "groupId": "1",
                "section": "integrity",
                "analysis": -0.24
            },
            {
                "groupId": "1",
                "section": "collaborative",
                "analysis": -0.33
            },
            {
                "groupId": "1",
                "section": "results-oriented",
                "analysis": 1.59
            },
            {
                "groupId": "1",
                "section": "customer-oriented",
                "analysis": -0.24
            },
            {
                "groupId": "1",
                "section": "detail-oriented",
                "analysis": -0.27
            },
            {
                "groupId": "10",
                "section": "adaptability",
                "analysis": 0.15
            },
            {
                "groupId": "10",
                "section": "integrity",
                "analysis": 0.03
            },
            {
                "groupId": "10",
                "section": "collaborative",
                "analysis": 0.21
            },
            {
                "groupId": "10",
                "section": "results-oriented",
                "analysis": -0.12
            },
            {
                "groupId": "10",
                "section": "customer-oriented",
                "analysis": 2.4
            },
            {
                "groupId": "10",
                "section": "detail-oriented",
                "analysis": 0.15
            },
            {
                "groupId": "11",
                "section": "adaptability",
                "analysis": -0.18
            },
            {
                "groupId": "11",
                "section": "integrity",
                "analysis": -0.02
            },
            {
                "groupId": "11",
                "section": "collaborative",
                "analysis": -0.54
            },
            {
                "groupId": "11",
                "section": "results-oriented",
                "analysis": 0.18
            },
            {
                "groupId": "11",
                "section": "customer-oriented",
                "analysis": 0.16
            },
            {
                "groupId": "11",
                "section": "detail-oriented",
                "analysis": -0.24
            },
            {
                "groupId": "12",
                "section": "adaptability",
                "analysis": 0.44
            },
            {
                "groupId": "12",
                "section": "integrity",
                "analysis": -1.32
            },
            {
                "groupId": "12",
                "section": "collaborative",
                "analysis": 1.56
            },
            {
                "groupId": "12",
                "section": "results-oriented",
                "analysis": -1.44
            },
            {
                "groupId": "12",
                "section": "customer-oriented",
                "analysis": 0.32
            },
            {
                "groupId": "12",
                "section": "detail-oriented",
                "analysis": -0.4
            },
            {
                "groupId": "13",
                "section": "adaptability",
                "analysis": -0.04
            },
            {
                "groupId": "13",
                "section": "integrity",
                "analysis": 0.96
            },
            {
                "groupId": "13",
                "section": "collaborative",
                "analysis": 0.14
            },
            {
                "groupId": "13",
                "section": "results-oriented",
                "analysis": -0.62
            },
            {
                "groupId": "13",
                "section": "customer-oriented",
                "analysis": 0.1
            },
            {
                "groupId": "13",
                "section": "detail-oriented",
                "analysis": -0.2
            },
            {
                "groupId": "14",
                "section": "adaptability",
                "analysis": 0.04
            },
            {
                "groupId": "14",
                "section": "integrity",
                "analysis": 2.68
            },
            {
                "groupId": "14",
                "section": "collaborative",
                "analysis": 0.12
            },
            {
                "groupId": "14",
                "section": "results-oriented",
                "analysis": -0.16
            },
            {
                "groupId": "14",
                "section": "customer-oriented",
                "analysis": -0.24
            },
            {
                "groupId": "14",
                "section": "detail-oriented",
                "analysis": 0.16
            },
            {
                "groupId": "15",
                "section": "adaptability",
                "analysis": 2.4
            },
            {
                "groupId": "15",
                "section": "integrity",
                "analysis": 0.36
            },
            {
                "groupId": "15",
                "section": "collaborative",
                "analysis": -0.04
            },
            {
                "groupId": "15",
                "section": "results-oriented",
                "analysis": 0.24
            },
            {
                "groupId": "15",
                "section": "customer-oriented",
                "analysis": 0.16
            },
            {
                "groupId": "15",
                "section": "detail-oriented",
                "analysis": 0.36
            },
            {
                "groupId": "16",
                "section": "adaptability",
                "analysis": -0.1
            },
            {
                "groupId": "16",
                "section": "integrity",
                "analysis": -0.32
            },
            {
                "groupId": "16",
                "section": "collaborative",
                "analysis": -0.14
            },
            {
                "groupId": "16",
                "section": "results-oriented",
                "analysis": 0.18
            },
            {
                "groupId": "16",
                "section": "customer-oriented",
                "analysis": 1.04
            },
            {
                "groupId": "16",
                "section": "detail-oriented",
                "analysis": -0.46
            },
            {
                "groupId": "17",
                "section": "adaptability",
                "analysis": 0.06
            },
            {
                "groupId": "17",
                "section": "integrity",
                "analysis": 0.03
            },
            {
                "groupId": "17",
                "section": "collaborative",
                "analysis": 0.27
            },
            {
                "groupId": "17",
                "section": "results-oriented",
                "analysis": -0.03
            },
            {
                "groupId": "17",
                "section": "customer-oriented",
                "analysis": 0.6
            },
            {
                "groupId": "17",
                "section": "detail-oriented",
                "analysis": -1.35
            },
            {
                "groupId": "18",
                "section": "adaptability",
                "analysis": -0.81
            },
            {
                "groupId": "18",
                "section": "integrity",
                "analysis": -0.24
            },
            {
                "groupId": "18",
                "section": "collaborative",
                "analysis": -0.42
            },
            {
                "groupId": "18",
                "section": "results-oriented",
                "analysis": -0.24
            },
            {
                "groupId": "18",
                "section": "customer-oriented",
                "analysis": -0.36
            },
            {
                "groupId": "18",
                "section": "detail-oriented",
                "analysis": 1.86
            },
            {
                "groupId": "19",
                "section": "adaptability",
                "analysis": 1.84
            },
            {
                "groupId": "19",
                "section": "integrity",
                "analysis": -1.36
            },
            {
                "groupId": "19",
                "section": "collaborative",
                "analysis": -0.76
            },
            {
                "groupId": "19",
                "section": "results-oriented",
                "analysis": -0.04
            },
            {
                "groupId": "19",
                "section": "customer-oriented",
                "analysis": 0.6
            },
            {
                "groupId": "19",
                "section": "detail-oriented",
                "analysis": -0.32
            },
            {
                "groupId": "2",
                "section": "adaptability",
                "analysis": -0.16
            },
            {
                "groupId": "2",
                "section": "integrity",
                "analysis": -0.68
            },
            {
                "groupId": "2",
                "section": "collaborative",
                "analysis": -0.28
            },
            {
                "groupId": "2",
                "section": "results-oriented",
                "analysis": 0.48
            },
            {
                "groupId": "2",
                "section": "customer-oriented",
                "analysis": -0.2
            },
            {
                "groupId": "2",
                "section": "detail-oriented",
                "analysis": -0.96
            },
            {
                "groupId": "20",
                "section": "adaptability",
                "analysis": -0.06
            },
            {
                "groupId": "20",
                "section": "integrity",
                "analysis": -1.32
            },
            {
                "groupId": "20",
                "section": "collaborative",
                "analysis": -1.17
            },
            {
                "groupId": "20",
                "section": "results-oriented",
                "analysis": -0.03
            },
            {
                "groupId": "20",
                "section": "customer-oriented",
                "analysis": -0.69
            },
            {
                "groupId": "20",
                "section": "detail-oriented",
                "analysis": 0.03
            },
            {
                "groupId": "21",
                "section": "adaptability",
                "analysis": -0.36
            },
            {
                "groupId": "21",
                "section": "integrity",
                "analysis": -0.3
            },
            {
                "groupId": "21",
                "section": "collaborative",
                "analysis": -0.36
            },
            {
                "groupId": "21",
                "section": "results-oriented",
                "analysis": 1.8
            },
            {
                "groupId": "21",
                "section": "customer-oriented",
                "analysis": 0.33
            },
            {
                "groupId": "21",
                "section": "detail-oriented",
                "analysis": -0.36
            },
            {
                "groupId": "22",
                "section": "adaptability",
                "analysis": -1.26
            },
            {
                "groupId": "22",
                "section": "integrity",
                "analysis": -0.24
            },
            {
                "groupId": "22",
                "section": "collaborative",
                "analysis": -0.22
            },
            {
                "groupId": "22",
                "section": "results-oriented",
                "analysis": 0.1
            },
            {
                "groupId": "22",
                "section": "customer-oriented",
                "analysis": -0.1
            },
            {
                "groupId": "22",
                "section": "detail-oriented",
                "analysis": 0.22
            },
            {
                "groupId": "23",
                "section": "adaptability",
                "analysis": -0.28
            },
            {
                "groupId": "23",
                "section": "integrity",
                "analysis": 0.68
            },
            {
                "groupId": "23",
                "section": "collaborative",
                "analysis": 1.76
            },
            {
                "groupId": "23",
                "section": "results-oriented",
                "analysis": -1.44
            },
            {
                "groupId": "23",
                "section": "customer-oriented",
                "analysis": -0.12
            },
            {
                "groupId": "23",
                "section": "detail-oriented",
                "analysis": -0.04
            },
            {
                "groupId": "24",
                "section": "adaptability",
                "analysis": 0.08
            },
            {
                "groupId": "24",
                "section": "integrity",
                "analysis": 0.48
            },
            {
                "groupId": "24",
                "section": "collaborative",
                "analysis": 2.6
            },
            {
                "groupId": "24",
                "section": "results-oriented",
                "analysis": 0.4
            },
            {
                "groupId": "24",
                "section": "customer-oriented",
                "analysis": -0.12
            },
            {
                "groupId": "24",
                "section": "detail-oriented",
                "analysis": 0.08
            },
            {
                "groupId": "25",
                "section": "adaptability",
                "analysis": 1.68
            },
            {
                "groupId": "25",
                "section": "integrity",
                "analysis": 1.26
            },
            {
                "groupId": "25",
                "section": "collaborative",
                "analysis": 0.06
            },
            {
                "groupId": "25",
                "section": "results-oriented",
                "analysis": -0.81
            },
            {
                "groupId": "25",
                "section": "customer-oriented",
                "analysis": 0.03
            },
            {
                "groupId": "25",
                "section": "detail-oriented",
                "analysis": -1.02
            },
            {
                "groupId": "26",
                "section": "adaptability",
                "analysis": 1.77
            },
            {
                "groupId": "26",
                "section": "integrity",
                "analysis": -0.3
            },
            {
                "groupId": "26",
                "section": "collaborative",
                "analysis": -0.15
            },
            {
                "groupId": "26",
                "section": "results-oriented",
                "analysis": -0.36
            },
            {
                "groupId": "26",
                "section": "customer-oriented",
                "analysis": -0.24
            },
            {
                "groupId": "26",
                "section": "detail-oriented",
                "analysis": -0.27
            },
            {
                "groupId": "27",
                "section": "adaptability",
                "analysis": 0.33
            },
            {
                "groupId": "27",
                "section": "integrity",
                "analysis": 0.06
            },
            {
                "groupId": "27",
                "section": "collaborative",
                "analysis": -1.41
            },
            {
                "groupId": "27",
                "section": "results-oriented",
                "analysis": 0.33
            },
            {
                "groupId": "27",
                "section": "customer-oriented",
                "analysis": -0.48
            },
            {
                "groupId": "27",
                "section": "detail-oriented",
                "analysis": 0.36
            },
            {
                "groupId": "28",
                "section": "adaptability",
                "analysis": -0.36
            },
            {
                "groupId": "28",
                "section": "integrity",
                "analysis": 0.12
            },
            {
                "groupId": "28",
                "section": "collaborative",
                "analysis": 2.4
            },
            {
                "groupId": "28",
                "section": "results-oriented",
                "analysis": -0.64
            },
            {
                "groupId": "28",
                "section": "customer-oriented",
                "analysis": -0.32
            },
            {
                "groupId": "28",
                "section": "detail-oriented",
                "analysis": -0.08
            },
            {
                "groupId": "29",
                "section": "adaptability",
                "analysis": -0.32
            },
            {
                "groupId": "29",
                "section": "integrity",
                "analysis": -1.6
            },
            {
                "groupId": "29",
                "section": "collaborative",
                "analysis": -0.04
            },
            {
                "groupId": "29",
                "section": "results-oriented",
                "analysis": 0.32
            },
            {
                "groupId": "29",
                "section": "customer-oriented",
                "analysis": -0.04
            },
            {
                "groupId": "29",
                "section": "detail-oriented",
                "analysis": -0.96
            },
            {
                "groupId": "3",
                "section": "adaptability",
                "analysis": 1.64
            },
            {
                "groupId": "3",
                "section": "integrity",
                "analysis": -1.08
            },
            {
                "groupId": "3",
                "section": "collaborative",
                "analysis": 0.08
            },
            {
                "groupId": "3",
                "section": "results-oriented",
                "analysis": -0.28
            },
            {
                "groupId": "3",
                "section": "customer-oriented",
                "analysis": 0.12
            },
            {
                "groupId": "3",
                "section": "detail-oriented",
                "analysis": -0.48
            },
            {
                "groupId": "30",
                "section": "adaptability",
                "analysis": -0.16
            },
            {
                "groupId": "30",
                "section": "integrity",
                "analysis": 0.36
            },
            {
                "groupId": "30",
                "section": "collaborative",
                "analysis": 0
            },
            {
                "groupId": "30",
                "section": "results-oriented",
                "analysis": -0.44
            },
            {
                "groupId": "30",
                "section": "customer-oriented",
                "analysis": 1
            },
            {
                "groupId": "30",
                "section": "detail-oriented",
                "analysis": 2.48
            },
            {
                "groupId": "31",
                "section": "adaptability",
                "analysis": 1.53
            },
            {
                "groupId": "31",
                "section": "integrity",
                "analysis": -1.11
            },
            {
                "groupId": "31",
                "section": "collaborative",
                "analysis": -0.63
            },
            {
                "groupId": "31",
                "section": "results-oriented",
                "analysis": 0.3
            },
            {
                "groupId": "31",
                "section": "customer-oriented",
                "analysis": -0.39
            },
            {
                "groupId": "31",
                "section": "detail-oriented",
                "analysis": -0.3
            },
            {
                "groupId": "32",
                "section": "adaptability",
                "analysis": 0.16
            },
            {
                "groupId": "32",
                "section": "integrity",
                "analysis": -1.32
            },
            {
                "groupId": "32",
                "section": "collaborative",
                "analysis": -1.76
            },
            {
                "groupId": "32",
                "section": "results-oriented",
                "analysis": 1.12
            },
            {
                "groupId": "32",
                "section": "customer-oriented",
                "analysis": -0.68
            },
            {
                "groupId": "32",
                "section": "detail-oriented",
                "analysis": -0.28
            },
            {
                "groupId": "33",
                "section": "adaptability",
                "analysis": -0.2
            },
            {
                "groupId": "33",
                "section": "integrity",
                "analysis": 3.04
            },
            {
                "groupId": "33",
                "section": "collaborative",
                "analysis": 0.28
            },
            {
                "groupId": "33",
                "section": "results-oriented",
                "analysis": 0.04
            },
            {
                "groupId": "33",
                "section": "customer-oriented",
                "analysis": 0.08
            },
            {
                "groupId": "33",
                "section": "detail-oriented",
                "analysis": 0.16
            },
            {
                "groupId": "34",
                "section": "adaptability",
                "analysis": 0.52
            },
            {
                "groupId": "34",
                "section": "integrity",
                "analysis": -0.28
            },
            {
                "groupId": "34",
                "section": "collaborative",
                "analysis": -0.32
            },
            {
                "groupId": "34",
                "section": "results-oriented",
                "analysis": 2.32
            },
            {
                "groupId": "34",
                "section": "customer-oriented",
                "analysis": -0.28
            },
            {
                "groupId": "34",
                "section": "detail-oriented",
                "analysis": 0.08
            },
            {
                "groupId": "35",
                "section": "adaptability",
                "analysis": -0.04
            },
            {
                "groupId": "35",
                "section": "integrity",
                "analysis": 3.08
            },
            {
                "groupId": "35",
                "section": "collaborative",
                "analysis": 0.32
            },
            {
                "groupId": "35",
                "section": "results-oriented",
                "analysis": -0.08
            },
            {
                "groupId": "35",
                "section": "customer-oriented",
                "analysis": -0.12
            },
            {
                "groupId": "35",
                "section": "detail-oriented",
                "analysis": 0.08
            },
            {
                "groupId": "36",
                "section": "adaptability",
                "analysis": -0.59
            },
            {
                "groupId": "36",
                "section": "integrity",
                "analysis": -0.35
            },
            {
                "groupId": "36",
                "section": "collaborative",
                "analysis": -0.43
            },
            {
                "groupId": "36",
                "section": "results-oriented",
                "analysis": -0.02
            },
            {
                "groupId": "36",
                "section": "customer-oriented",
                "analysis": 0.01
            },
            {
                "groupId": "36",
                "section": "detail-oriented",
                "analysis": -0.11
            },
            {
                "groupId": "37",
                "section": "adaptability",
                "analysis": -0.04
            },
            {
                "groupId": "37",
                "section": "integrity",
                "analysis": 0.8
            },
            {
                "groupId": "37",
                "section": "collaborative",
                "analysis": 0.22
            },
            {
                "groupId": "37",
                "section": "results-oriented",
                "analysis": -0.32
            },
            {
                "groupId": "37",
                "section": "customer-oriented",
                "analysis": 0.14
            },
            {
                "groupId": "37",
                "section": "detail-oriented",
                "analysis": -0.6
            },
            {
                "groupId": "38",
                "section": "adaptability",
                "analysis": 3.16
            },
            {
                "groupId": "38",
                "section": "integrity",
                "analysis": -1.4
            },
            {
                "groupId": "38",
                "section": "collaborative",
                "analysis": -1.08
            },
            {
                "groupId": "38",
                "section": "results-oriented",
                "analysis": 0.08
            },
            {
                "groupId": "38",
                "section": "customer-oriented",
                "analysis": -0.92
            },
            {
                "groupId": "38",
                "section": "detail-oriented",
                "analysis": -0.72
            },
            {
                "groupId": "39",
                "section": "adaptability",
                "analysis": 0
            },
            {
                "groupId": "39",
                "section": "integrity",
                "analysis": 0.15
            },
            {
                "groupId": "39",
                "section": "collaborative",
                "analysis": 0.18
            },
            {
                "groupId": "39",
                "section": "results-oriented",
                "analysis": 0
            },
            {
                "groupId": "39",
                "section": "customer-oriented",
                "analysis": 2.37
            },
            {
                "groupId": "39",
                "section": "detail-oriented",
                "analysis": 0.24
            },
            {
                "groupId": "4",
                "section": "adaptability",
                "analysis": -0.38
            },
            {
                "groupId": "4",
                "section": "integrity",
                "analysis": -0.16
            },
            {
                "groupId": "4",
                "section": "collaborative",
                "analysis": 0.43
            },
            {
                "groupId": "4",
                "section": "results-oriented",
                "analysis": -0.29
            },
            {
                "groupId": "4",
                "section": "customer-oriented",
                "analysis": -0.07
            },
            {
                "groupId": "4",
                "section": "detail-oriented",
                "analysis": -0.09
            },
            {
                "groupId": "40",
                "section": "adaptability",
                "analysis": -0.86
            },
            {
                "groupId": "40",
                "section": "integrity",
                "analysis": -0.22
            },
            {
                "groupId": "40",
                "section": "collaborative",
                "analysis": -0.34
            },
            {
                "groupId": "40",
                "section": "results-oriented",
                "analysis": 0.78
            },
            {
                "groupId": "40",
                "section": "customer-oriented",
                "analysis": 0.36
            },
            {
                "groupId": "40",
                "section": "detail-oriented",
                "analysis": -0.6
            },
            {
                "groupId": "41",
                "section": "adaptability",
                "analysis": 0.84
            },
            {
                "groupId": "41",
                "section": "integrity",
                "analysis": -0.36
            },
            {
                "groupId": "41",
                "section": "collaborative",
                "analysis": 0.02
            },
            {
                "groupId": "41",
                "section": "results-oriented",
                "analysis": -0.54
            },
            {
                "groupId": "41",
                "section": "customer-oriented",
                "analysis": -0.46
            },
            {
                "groupId": "41",
                "section": "detail-oriented",
                "analysis": -0.48
            },
            {
                "groupId": "42",
                "section": "adaptability",
                "analysis": -0.32
            },
            {
                "groupId": "42",
                "section": "integrity",
                "analysis": -0.12
            },
            {
                "groupId": "42",
                "section": "collaborative",
                "analysis": 0.08
            },
            {
                "groupId": "42",
                "section": "results-oriented",
                "analysis": 0.36
            },
            {
                "groupId": "42",
                "section": "customer-oriented",
                "analysis": -0.48
            },
            {
                "groupId": "42",
                "section": "detail-oriented",
                "analysis": 2.96
            },
            {
                "groupId": "43",
                "section": "adaptability",
                "analysis": -1.26
            },
            {
                "groupId": "43",
                "section": "integrity",
                "analysis": -0.12
            },
            {
                "groupId": "43",
                "section": "collaborative",
                "analysis": -0.02
            },
            {
                "groupId": "43",
                "section": "results-oriented",
                "analysis": -0.36
            },
            {
                "groupId": "43",
                "section": "customer-oriented",
                "analysis": 0.1
            },
            {
                "groupId": "43",
                "section": "detail-oriented",
                "analysis": -0.18
            },
            {
                "groupId": "44",
                "section": "adaptability",
                "analysis": -0.03
            },
            {
                "groupId": "44",
                "section": "integrity",
                "analysis": -0.72
            },
            {
                "groupId": "44",
                "section": "collaborative",
                "analysis": 0.54
            },
            {
                "groupId": "44",
                "section": "results-oriented",
                "analysis": 0.12
            },
            {
                "groupId": "44",
                "section": "customer-oriented",
                "analysis": -0.15
            },
            {
                "groupId": "44",
                "section": "detail-oriented",
                "analysis": -0.39
            },
            {
                "groupId": "45",
                "section": "adaptability",
                "analysis": 0
            },
            {
                "groupId": "45",
                "section": "integrity",
                "analysis": 2.12
            },
            {
                "groupId": "45",
                "section": "collaborative",
                "analysis": 1.4
            },
            {
                "groupId": "45",
                "section": "results-oriented",
                "analysis": -0.8
            },
            {
                "groupId": "45",
                "section": "customer-oriented",
                "analysis": -0.12
            },
            {
                "groupId": "45",
                "section": "detail-oriented",
                "analysis": -0.44
            },
            {
                "groupId": "46",
                "section": "adaptability",
                "analysis": 2.36
            },
            {
                "groupId": "46",
                "section": "integrity",
                "analysis": -0.6
            },
            {
                "groupId": "46",
                "section": "collaborative",
                "analysis": -1.08
            },
            {
                "groupId": "46",
                "section": "results-oriented",
                "analysis": 0.04
            },
            {
                "groupId": "46",
                "section": "customer-oriented",
                "analysis": -0.08
            },
            {
                "groupId": "46",
                "section": "detail-oriented",
                "analysis": -0.52
            },
            {
                "groupId": "47",
                "section": "adaptability",
                "analysis": -0.32
            },
            {
                "groupId": "47",
                "section": "integrity",
                "analysis": -0.02
            },
            {
                "groupId": "47",
                "section": "collaborative",
                "analysis": -0.14
            },
            {
                "groupId": "47",
                "section": "results-oriented",
                "analysis": -1.14
            },
            {
                "groupId": "47",
                "section": "customer-oriented",
                "analysis": -0.18
            },
            {
                "groupId": "47",
                "section": "detail-oriented",
                "analysis": -0.22
            },
            {
                "groupId": "48",
                "section": "adaptability",
                "analysis": -1.02
            },
            {
                "groupId": "48",
                "section": "integrity",
                "analysis": -0.33
            },
            {
                "groupId": "48",
                "section": "collaborative",
                "analysis": 0.9
            },
            {
                "groupId": "48",
                "section": "results-oriented",
                "analysis": -0.72
            },
            {
                "groupId": "48",
                "section": "customer-oriented",
                "analysis": 0.09
            },
            {
                "groupId": "48",
                "section": "detail-oriented",
                "analysis": -0.27
            },
            {
                "groupId": "49",
                "section": "adaptability",
                "analysis": 0.03
            },
            {
                "groupId": "49",
                "section": "integrity",
                "analysis": -1.11
            },
            {
                "groupId": "49",
                "section": "collaborative",
                "analysis": -0.36
            },
            {
                "groupId": "49",
                "section": "results-oriented",
                "analysis": -0.24
            },
            {
                "groupId": "49",
                "section": "customer-oriented",
                "analysis": -0.63
            },
            {
                "groupId": "49",
                "section": "detail-oriented",
                "analysis": -1.95
            },
            {
                "groupId": "5",
                "section": "adaptability",
                "analysis": 0.02
            },
            {
                "groupId": "5",
                "section": "integrity",
                "analysis": -0.26
            },
            {
                "groupId": "5",
                "section": "collaborative",
                "analysis": -0.51
            },
            {
                "groupId": "5",
                "section": "results-oriented",
                "analysis": 0.26
            },
            {
                "groupId": "5",
                "section": "customer-oriented",
                "analysis": -0.14
            },
            {
                "groupId": "5",
                "section": "detail-oriented",
                "analysis": -0.1
            },
            {
                "groupId": "50",
                "section": "adaptability",
                "analysis": -0.64
            },
            {
                "groupId": "50",
                "section": "integrity",
                "analysis": -0.04
            },
            {
                "groupId": "50",
                "section": "collaborative",
                "analysis": -1.52
            },
            {
                "groupId": "50",
                "section": "results-oriented",
                "analysis": -0.44
            },
            {
                "groupId": "50",
                "section": "customer-oriented",
                "analysis": 0.08
            },
            {
                "groupId": "50",
                "section": "detail-oriented",
                "analysis": -1.28
            },
            {
                "groupId": "51",
                "section": "adaptability",
                "analysis": -0.12
            },
            {
                "groupId": "51",
                "section": "integrity",
                "analysis": -0.04
            },
            {
                "groupId": "51",
                "section": "collaborative",
                "analysis": -0.04
            },
            {
                "groupId": "51",
                "section": "results-oriented",
                "analysis": 0.44
            },
            {
                "groupId": "51",
                "section": "customer-oriented",
                "analysis": 0.16
            },
            {
                "groupId": "51",
                "section": "detail-oriented",
                "analysis": -2.8
            },
            {
                "groupId": "52",
                "section": "adaptability",
                "analysis": -0.15
            },
            {
                "groupId": "52",
                "section": "integrity",
                "analysis": -0.27
            },
            {
                "groupId": "52",
                "section": "collaborative",
                "analysis": -1.68
            },
            {
                "groupId": "52",
                "section": "results-oriented",
                "analysis": 0.39
            },
            {
                "groupId": "52",
                "section": "customer-oriented",
                "analysis": -0.12
            },
            {
                "groupId": "52",
                "section": "detail-oriented",
                "analysis": -0.45
            },
            {
                "groupId": "53",
                "section": "adaptability",
                "analysis": -1.89
            },
            {
                "groupId": "53",
                "section": "integrity",
                "analysis": -0.72
            },
            {
                "groupId": "53",
                "section": "collaborative",
                "analysis": -2.28
            },
            {
                "groupId": "53",
                "section": "results-oriented",
                "analysis": 0.72
            },
            {
                "groupId": "53",
                "section": "customer-oriented",
                "analysis": -1.89
            },
            {
                "groupId": "53",
                "section": "detail-oriented",
                "analysis": -0.18
            },
            {
                "groupId": "54",
                "section": "adaptability",
                "analysis": 0.12
            },
            {
                "groupId": "54",
                "section": "integrity",
                "analysis": 0.24
            },
            {
                "groupId": "54",
                "section": "collaborative",
                "analysis": 2.84
            },
            {
                "groupId": "54",
                "section": "results-oriented",
                "analysis": 0.44
            },
            {
                "groupId": "54",
                "section": "customer-oriented",
                "analysis": -0.12
            },
            {
                "groupId": "54",
                "section": "detail-oriented",
                "analysis": 0
            },
            {
                "groupId": "6",
                "section": "adaptability",
                "analysis": -0.26
            },
            {
                "groupId": "6",
                "section": "integrity",
                "analysis": -0.54
            },
            {
                "groupId": "6",
                "section": "collaborative",
                "analysis": -0.3
            },
            {
                "groupId": "6",
                "section": "results-oriented",
                "analysis": 0.08
            },
            {
                "groupId": "6",
                "section": "customer-oriented",
                "analysis": -0.54
            },
            {
                "groupId": "6",
                "section": "detail-oriented",
                "analysis": 0.18
            },
            {
                "groupId": "7",
                "section": "adaptability",
                "analysis": 0.48
            },
            {
                "groupId": "7",
                "section": "integrity",
                "analysis": -0.6
            },
            {
                "groupId": "7",
                "section": "collaborative",
                "analysis": 0.39
            },
            {
                "groupId": "7",
                "section": "results-oriented",
                "analysis": -0.3
            },
            {
                "groupId": "7",
                "section": "customer-oriented",
                "analysis": 0.09
            },
            {
                "groupId": "7",
                "section": "detail-oriented",
                "analysis": -0.48
            },
            {
                "groupId": "8",
                "section": "adaptability",
                "analysis": -2.56
            },
            {
                "groupId": "8",
                "section": "integrity",
                "analysis": -0.36
            },
            {
                "groupId": "8",
                "section": "collaborative",
                "analysis": 0.2
            },
            {
                "groupId": "8",
                "section": "results-oriented",
                "analysis": -1
            },
            {
                "groupId": "8",
                "section": "customer-oriented",
                "analysis": -0.36
            },
            {
                "groupId": "8",
                "section": "detail-oriented",
                "analysis": 0.6
            },
            {
                "groupId": "9",
                "section": "adaptability",
                "analysis": -0.03
            },
            {
                "groupId": "9",
                "section": "integrity",
                "analysis": -0.6
            },
            {
                "groupId": "9",
                "section": "collaborative",
                "analysis": -1.35
            },
            {
                "groupId": "9",
                "section": "results-oriented",
                "analysis": 0.03
            },
            {
                "groupId": "9",
                "section": "customer-oriented",
                "analysis": -0.27
            },
            {
                "groupId": "9",
                "section": "detail-oriented",
                "analysis": -0.9
            }
        ]
    }
};

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      /*
      if (paramMap.has('username')) {
        this.peopleService
          .getBio(paramMap.get('username'))
          .subscribe((bio: any) => {
            this.bio = bio;
          });
      }
      */
    });
  }
}
