import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  people = [
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159289.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 159098.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 2205.1434,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 104319.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.98261,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {
        employee: {
          amount: 50000.0,
          currency: 'USD$',
          periodicity: 'yearly',
        },
      },
      locationName: 'Toronto, ON, Canada',
      name: 'Josephine Tse',
      openTo: ['hiring', 'full-time-employment', 'part-time-employment'],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/03a4b0d0368d3b72c70360a759ce6eb85914d004/profile_NXXCgL9.jpg',
      professionalHeadline: 'Multimedia Producer & Content Creator',
      remoter: true,
      skills: [
        {
          code: 40069,
          name: 'Content Creation',
          weight: 29.3859,
        },
        {
          code: 37016,
          name: 'Problem Solving Skills',
          weight: 19.5512,
        },
        {
          code: 56046,
          name: 'Producer',
          weight: 0.0,
        },
        {
          code: 55801,
          name: 'Organization',
          weight: 81.8674,
        },
        {
          code: 36248,
          name: 'Empathy',
          weight: 106.25,
        },
        {
          code: 18645,
          name: 'Marketing',
          weight: 0.0,
        },
        {
          code: 197594,
          name: 'Willingness to Learn',
          weight: 42.5,
        },
        {
          code: 55737,
          name: 'Work Ethic',
          weight: 234.3094,
        },
        {
          code: 197441,
          name: 'Results-Orientation',
          weight: 83.3012,
        },
        {
          code: 1303,
          name: 'Photography',
          weight: 42.5,
        },
        {
          code: 54639,
          name: 'Videography',
          weight: 42.5,
        },
        {
          code: 127814,
          name: 'Website Development',
          weight: 42.5,
        },
        {
          code: 55456,
          name: 'Enthusiasm',
          weight: 243.7822,
        },
        {
          code: 55142,
          name: 'Adaptability',
          weight: 125.8012,
        },
        {
          code: 70306,
          name: 'Creative Direction',
          weight: 0.0,
        },
        {
          code: 55693,
          name: 'Video Production',
          weight: 0.0,
        },
        {
          code: 45396,
          name: 'Leadership',
          weight: 246.0933,
        },
        {
          code: 44220,
          name: 'Inbound Marketing',
          weight: 0.0,
        },
        {
          code: 44546,
          name: 'Interviewing Skills',
          weight: 42.5,
        },
        {
          code: 54613,
          name: 'Video',
          weight: 0.0737,
        },
        {
          code: 13307,
          name: 'Content Marketing',
          weight: 42.5,
        },
        {
          code: 49097,
          name: 'Podcasting',
          weight: 0.0,
        },
        {
          code: 56087,
          name: 'Remote work',
          weight: 14.3512,
        },
        {
          code: 6217,
          name: 'Project Management',
          weight: 384.7051,
        },
        {
          code: 13242,
          name: 'Public Relations - PR',
          weight: 0.0,
        },
        {
          code: 40125,
          name: 'Copywriting',
          weight: 0.0,
        },
        {
          code: 55317,
          name: 'Creativity',
          weight: 219.8139,
        },
        {
          code: 55266,
          name: 'Communication',
          weight: 160.6847,
        },
        {
          code: 55424,
          name: 'Early adopter',
          weight: 0.1732,
        },
      ],
      subjectId: '28478',
      username: 'josephinetse',
      verified: true,
      weight: 2205.1434,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159288.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 159265.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 5917.7601,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 103566.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.97745,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {
        freelancer: {
          amount: 50.0,
          currency: 'USD$',
          periodicity: 'hourly',
        },
        employee: {
          amount: 85000.0,
          currency: 'USD$',
          periodicity: 'yearly',
        },
      },
      locationName: 'Bogotá, Colombia',
      name: 'Ana Maria Diaz',
      openTo: ['freelance-gigs', 'full-time-employment', 'mentoring'],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/80cd635dbd1dcbb28e9dbc05078d2a8050752a35/profile_DcWxCCy.jpg',
      professionalHeadline:
        'UX Researcher/Designer - MSc. Software Engineer - MA Cultural & Creative Industries',
      remoter: true,
      skills: [
        {
          code: 49544,
          name: 'Product Requirements',
          weight: 42.5,
        },
        {
          code: 56334,
          name: 'UI Design',
          weight: 42.5,
        },
        {
          code: 55684,
          name: 'UX Design',
          weight: 42.5,
        },
        {
          code: 218993,
          name: 'User Centered Design',
          weight: 0.0,
        },
        {
          code: 54380,
          name: 'User Interaction',
          weight: 0.0,
        },
        {
          code: 56606,
          name: 'Product design',
          weight: 0.0,
        },
        {
          code: 55814,
          name: 'Team Player',
          weight: 6.8502,
        },
        {
          code: 35793,
          name: 'inVision',
          weight: 0.0,
        },
        {
          code: 210020,
          name: 'Proto',
          weight: 0.0,
        },
        {
          code: 51976,
          name: 'Sketch',
          weight: 13.8588,
        },
        {
          code: 61725,
          name: 'Team work',
          weight: 0.0,
        },
        {
          code: 55262,
          name: 'Commitment',
          weight: 0.0,
        },
        {
          code: 55192,
          name: 'Attention to detail',
          weight: 0.0,
        },
        {
          code: 55142,
          name: 'Adaptability',
          weight: 0.0,
        },
        {
          code: 17766,
          name: 'Resilience',
          weight: 0.0,
        },
        {
          code: 56166,
          name: 'Solutions oriented',
          weight: 0.0,
        },
        {
          code: 36248,
          name: 'Empathy',
          weight: 0.0,
        },
        {
          code: 209987,
          name: 'Events organization',
          weight: 0.0,
        },
        {
          code: 56184,
          name: 'Strategic Thinking',
          weight: 0.0,
        },
        {
          code: 55409,
          name: 'Discipline',
          weight: 77.7737,
        },
        {
          code: 56285,
          name: 'Qualitative Analysis',
          weight: 13.8588,
        },
        {
          code: 56284,
          name: 'Human-Centered Design',
          weight: 8.4498,
        },
        {
          code: 41948,
          name: 'Entrepreneurship',
          weight: 0.0,
        },
        {
          code: 48658,
          name: 'People skills',
          weight: 21.5268,
        },
        {
          code: 55266,
          name: 'Communication',
          weight: 20.5968,
        },
        {
          code: 55847,
          name: 'Digital landscape design',
          weight: 0.0,
        },
        {
          code: 6112,
          name: 'Lighting',
          weight: 0.0,
        },
        {
          code: 46218,
          name: 'MEL',
          weight: 0.0,
        },
        {
          code: 56111,
          name: 'Rigging',
          weight: 0.0,
        },
        {
          code: 55828,
          name: '3D Max Studio',
          weight: 0.0,
        },
        {
          code: 1421,
          name: '3D Animation',
          weight: 0.0,
        },
        {
          code: 55131,
          name: '3D Modeling',
          weight: 0.0,
        },
        {
          code: 1283,
          name: 'Maya',
          weight: 0.0,
        },
        {
          code: 55317,
          name: 'Creativity',
          weight: 11.0403,
        },
        {
          code: 44352,
          name: 'Innovation',
          weight: 8.4498,
        },
        {
          code: 45396,
          name: 'Leadership',
          weight: 37.1586,
        },
        {
          code: 55512,
          name: 'Friendly',
          weight: 63.1044,
        },
        {
          code: 960,
          name: 'Infrastructure',
          weight: 4.8418,
        },
        {
          code: 53528,
          name: 'Team Building',
          weight: 39.2722,
        },
        {
          code: 36195,
          name: 'Development',
          weight: 39.2722,
        },
        {
          code: 1441,
          name: 'Illustration',
          weight: 0.0,
        },
        {
          code: 39461,
          name: 'Character Design',
          weight: 0.0,
        },
        {
          code: 27253,
          name: 'Storytelling (as a means of transferring tacit knowledge)',
          weight: 0.0,
        },
        {
          code: 39975,
          name: 'Computer Graphics',
          weight: 0.0,
        },
        {
          code: 34573,
          name: 'CMMi',
          weight: 0.0,
        },
        {
          code: 5302,
          name: 'ISO 9000',
          weight: 0.0,
        },
        {
          code: 49851,
          name: 'QA',
          weight: 0.0,
        },
        {
          code: 18319,
          name: 'Javascript',
          weight: 0.0,
        },
        {
          code: 32014,
          name: 'ActionScript',
          weight: 0.0,
        },
        {
          code: 1282,
          name: 'Flash',
          weight: 0.0,
        },
        {
          code: 12111,
          name: 'Animation',
          weight: 0.0,
        },
        {
          code: 1584,
          name: 'Soprano',
          weight: 34.8254,
        },
        {
          code: 55309,
          name: 'Coro',
          weight: 0.9285,
        },
        {
          code: 55539,
          name: 'Game Design',
          weight: 447.7239,
        },
        {
          code: 13611,
          name: 'Market Research',
          weight: 1272.4669,
        },
        {
          code: 44546,
          name: 'Interviewing Skills',
          weight: 1419.9604,
        },
        {
          code: 55371,
          name: 'Desirability / value testing',
          weight: 196.0004,
        },
        {
          code: 35551,
          name: 'Usability Testing',
          weight: 281.6687,
        },
        {
          code: 55686,
          name: 'UX Research',
          weight: 892.3665,
        },
        {
          code: 55521,
          name: 'Front-end development',
          weight: 105.0286,
        },
        {
          code: 55891,
          name: 'Intranet administration',
          weight: 0.0,
        },
        {
          code: 55904,
          name: 'IT support',
          weight: 0.0,
        },
        {
          code: 55667,
          name: 'Translation',
          weight: 0.0,
        },
        {
          code: 1476,
          name: 'Web Design',
          weight: 86.0209,
        },
        {
          code: 55820,
          name: 'Web Master',
          weight: 0.0,
        },
        {
          code: 43610,
          name: 'Graphic Designers',
          weight: 46.9056,
        },
        {
          code: 55288,
          name: 'Computer networks',
          weight: 0.0,
        },
        {
          code: 56147,
          name: 'Singing',
          weight: 104.4762,
        },
        {
          code: 1302,
          name: 'Music',
          weight: 0.0,
        },
        {
          code: 55491,
          name: 'Festival production',
          weight: 0.0,
        },
        {
          code: 55504,
          name: 'Foreign artist fixer',
          weight: 0.0,
        },
        {
          code: 13242,
          name: 'Public Relations - PR',
          weight: 80.9276,
        },
        {
          code: 55327,
          name: 'Cultural and Creative Industries',
          weight: 62.9997,
        },
        {
          code: 55328,
          name: 'Cultural policy',
          weight: 80.9276,
        },
        {
          code: 41181,
          name: 'Drawing',
          weight: 0.1568,
        },
        {
          code: 41181,
          name: 'Drawing',
          weight: 0.0,
        },
        {
          code: 55797,
          name: 'Management Corporate indicators',
          weight: 0.0,
        },
        {
          code: 6217,
          name: 'Project Management',
          weight: 83.9996,
        },
        {
          code: 6217,
          name: 'Project Management',
          weight: 138.5705,
        },
        {
          code: 50429,
          name: 'Research',
          weight: 2.5905,
        },
        {
          code: 17171,
          name: 'Virtual Reality',
          weight: 0.0,
        },
        {
          code: 55697,
          name: 'Visual Analysis',
          weight: 86.5901,
        },
        {
          code: 55698,
          name: 'Visual Culture',
          weight: 0.0,
        },
      ],
      subjectId: '35',
      username: 'ana-maria-diaz',
      verified: true,
      weight: 5917.7601,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159287.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 158854.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 1309.8542,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 105203.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.98956,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {},
      locationName: 'Quezon City, Metro Manila, Philippines',
      name: 'Martha Ignacio',
      openTo: ['advising'],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/c47a29dd3c968262460078afc2a86f15d92dcd43/profile_HjdHEuv.jpg',
      professionalHeadline:
        'All-Around Star: Marketing, Communications, PR, Branding, Design & Writing',
      remoter: true,
      skills: [
        {
          code: 38374,
          name: 'B2B Marketing',
          weight: 0.0,
        },
        {
          code: 9749,
          name: 'Restaurant Management',
          weight: 0.0,
        },
        {
          code: 1183799,
          name: 'Restaurant operations',
          weight: 0.0,
        },
        {
          code: 39914,
          name: 'Community Management',
          weight: 0.0,
        },
        {
          code: 1303,
          name: 'Photography',
          weight: 0.0,
        },
        {
          code: 40069,
          name: 'Content Creation',
          weight: 0.0,
        },
        {
          code: 9652,
          name: 'Data Entry',
          weight: 0.0,
        },
        {
          code: 1183777,
          name: 'Email management',
          weight: 0.0,
        },
        {
          code: 38832,
          name: 'Bookkeeping',
          weight: 0.0,
        },
        {
          code: 48388,
          name: 'Paperwork',
          weight: 0.0,
        },
        {
          code: 9951,
          name: 'Travel Management',
          weight: 0.0,
        },
        {
          code: 9707,
          name: 'Calendar Management',
          weight: 0.0,
        },
        {
          code: 1183772,
          name: 'Administrative Tasks',
          weight: 0.0,
        },
        {
          code: 18613,
          name: 'Human Resources',
          weight: 0.0,
        },
        {
          code: 13307,
          name: 'Content Marketing',
          weight: 0.0,
        },
        {
          code: 52204,
          name: 'Social Media Management',
          weight: 0.0,
        },
        {
          code: 25756,
          name: 'Planning',
          weight: 0.0,
        },
        {
          code: 1250,
          name: 'Product Development',
          weight: 0.0,
        },
        {
          code: 1422,
          name: 'Apparel',
          weight: 0.0,
        },
        {
          code: 52923,
          name: 'Store Management',
          weight: 0.0,
        },
        {
          code: 9642,
          name: 'Inventory Management',
          weight: 0.0,
        },
        {
          code: 1183752,
          name: 'Product Writing',
          weight: 0.0,
        },
        {
          code: 55778,
          name: 'E-commerce',
          weight: 0.0,
        },
        {
          code: 21730,
          name: 'Adobe Photoshop',
          weight: 0.0,
        },
        {
          code: 127255,
          name: 'Public relations',
          weight: 0.0,
        },
        {
          code: 18054,
          name: 'Strategy',
          weight: 0.0,
        },
        {
          code: 5183,
          name: 'Operations',
          weight: 0.0,
        },
        {
          code: 55270,
          name: 'Communications',
          weight: 0.0,
        },
        {
          code: 55224,
          name: 'Branding',
          weight: 0.0,
        },
        {
          code: 45396,
          name: 'Leadership',
          weight: 0.0,
        },
        {
          code: 12157,
          name: 'News Editing',
          weight: 0.0,
        },
        {
          code: 55637,
          name: 'Team Leadership',
          weight: 0.0,
        },
        {
          code: 9935,
          name: 'Training',
          weight: 0.0,
        },
        {
          code: 34066,
          name: 'SEO',
          weight: 0.0,
        },
        {
          code: 1183700,
          name: 'Accounts Management',
          weight: 0.0,
        },
        {
          code: 13213,
          name: 'Lead Generation',
          weight: 0.0,
        },
        {
          code: 33787,
          name: 'Sales',
          weight: 0.0,
        },
        {
          code: 55248,
          name: 'Client Relations',
          weight: 0.0,
        },
        {
          code: 56348,
          name: 'Business Development',
          weight: 0.0,
        },
        {
          code: 49372,
          name: 'Presentations',
          weight: 0.0,
        },
        {
          code: 62919,
          name: 'Client Management',
          weight: 0.0,
        },
        {
          code: 200180,
          name: 'Press Release Writing',
          weight: 0.0,
        },
        {
          code: 27846,
          name: 'Account Management',
          weight: 0.0,
        },
        {
          code: 42198,
          name: 'Event Planning',
          weight: 0.0,
        },
        {
          code: 46160,
          name: 'Media Relations',
          weight: 0.0,
        },
        {
          code: 47425,
          name: 'News Writing',
          weight: 0.0,
        },
        {
          code: 10481,
          name: 'Medical Writing',
          weight: 0.0,
        },
        {
          code: 13450,
          name: 'Twitter',
          weight: 0.0,
        },
        {
          code: 30290,
          name: 'Social Media Marketing',
          weight: 0.0,
        },
        {
          code: 1181867,
          name: 'Social Media Training',
          weight: 0.0,
        },
        {
          code: 9765,
          name: 'Content Writing',
          weight: 0.0,
        },
        {
          code: 23830,
          name: 'Content Scripting',
          weight: 0.0,
        },
        {
          code: 50429,
          name: 'Research',
          weight: 0.0,
        },
        {
          code: 742,
          name: 'Medical',
          weight: 0.0,
        },
        {
          code: 46183,
          name: 'Medical Law',
          weight: 0.0,
        },
        {
          code: 45433,
          name: 'Legal Writing',
          weight: 0.0,
        },
        {
          code: 50467,
          name: 'Restaurant Marketing',
          weight: 0.0,
        },
        {
          code: 9648,
          name: 'Social Media',
          weight: 0.0,
        },
        {
          code: 49640,
          name: 'Promotions',
          weight: 0.0,
        },
        {
          code: 18645,
          name: 'Marketing',
          weight: 0.0,
        },
        {
          code: 13242,
          name: 'Public Relations - PR',
          weight: 0.0,
        },
        {
          code: 31336,
          name: 'Content',
          weight: 0.0,
        },
        {
          code: 64702,
          name: 'Fashion',
          weight: 0.0,
        },
        {
          code: 55795,
          name: 'Management',
          weight: 0.0,
        },
        {
          code: 66726,
          name: 'Copyediting',
          weight: 0.0,
        },
        {
          code: 66725,
          name: 'Production Assistant',
          weight: 0.0,
        },
        {
          code: 66724,
          name: 'Voice coach',
          weight: 0.0,
        },
        {
          code: 57500,
          name: 'Storytelling',
          weight: 0.0,
        },
        {
          code: 55170,
          name: 'Analytics',
          weight: 0.0,
        },
        {
          code: 66721,
          name: 'Strategy & Planning',
          weight: 0.0,
        },
        {
          code: 66720,
          name: 'Social media management',
          weight: 0.0,
        },
        {
          code: 62725,
          name: 'Blog writing',
          weight: 0.0,
        },
        {
          code: 62571,
          name: 'UI/UX Design',
          weight: 0.0,
        },
        {
          code: 6217,
          name: 'Project Management',
          weight: 436.6181,
        },
        {
          code: 55391,
          name: 'Digital Marketing',
          weight: 0.0,
        },
        {
          code: 55788,
          name: 'Graphic Design',
          weight: 0.0,
        },
        {
          code: 12135,
          name: 'Editing',
          weight: 436.6181,
        },
        {
          code: 55747,
          name: 'Writing',
          weight: 436.6181,
        },
        {
          code: 66712,
          name: 'An eye for style and design.',
          weight: 0.0,
        },
        {
          code: 66711,
          name: 'Communications and messaging are innate.',
          weight: 0.0,
        },
        {
          code: 66710,
          name: 'Self-learning is a habit.',
          weight: 0.0,
        },
      ],
      subjectId: '12729',
      username: 'marthaignacio',
      verified: true,
      weight: 1309.8542,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159286.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 159184.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 2760.7881,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 103427.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.97661,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {},
      locationName: 'San Francisco, CA',
      name: 'Tania Zapata',
      openTo: ['mentoring'],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/84900a0e305c435015306917d5c3637aac97f94a/profile_NtPqiNt.jpg',
      professionalHeadline: 'Entrepreneur, Co-founder and CEO of Akily',
      remoter: false,
      skills: [
        {
          code: 55412,
          name: 'Diseño Gráfico',
          weight: 0.0,
        },
        {
          code: 56599,
          name: 'VIDEO EDITOR',
          weight: 0.0,
        },
        {
          code: 55266,
          name: 'Communication',
          weight: 0.0,
        },
        {
          code: 55587,
          name: 'Hardworking',
          weight: 42.5324,
        },
        {
          code: 41948,
          name: 'Entrepreneurship',
          weight: 1082.2446,
        },
        {
          code: 55637,
          name: 'Team Leadership',
          weight: 912.2122,
        },
        {
          code: 56184,
          name: 'Strategic Thinking',
          weight: 98.5283,
        },
        {
          code: 54779,
          name: 'Voiceovers',
          weight: 625.2705,
        },
        {
          code: 829,
          name: 'Media Production',
          weight: 0.0,
        },
      ],
      subjectId: '508',
      username: 'taniazapata',
      verified: true,
      weight: 2760.7881,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159285.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 159133.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 2430.478,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 103309.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.97578,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {
        freelancer: {
          amount: 15.0,
          currency: 'USD$',
          periodicity: 'hourly',
        },
        intern: {
          amount: 40000.0,
          currency: 'USD$',
          periodicity: 'yearly',
        },
        employee: {
          amount: 15.0,
          currency: 'USD$',
          periodicity: 'hourly',
        },
      },
      locationName: 'New Westminster, Columbia Británica, Canadá',
      name: 'Ivonne Lorena García',
      openTo: [
        'advising',
        'freelance-gigs',
        'internships',
        'full-time-employment',
        'part-time-employment',
        'mentoring',
      ],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/68b80b35e048f724138c419903353029955bc187/profile_5EatQCv.jpg',
      professionalHeadline: 'Copywriter, Creative, Photographer & Translator',
      remoter: false,
      skills: [
        {
          code: 55302,
          name: 'Content Editor',
          weight: 0.0,
        },
        {
          code: 6217,
          name: 'Project Management',
          weight: 0.0,
        },
        {
          code: 40069,
          name: 'Content Creation',
          weight: 0.0,
        },
        {
          code: 55747,
          name: 'Writing',
          weight: 0.0,
        },
        {
          code: 55992,
          name: 'Organized',
          weight: 0.0,
        },
        {
          code: 56182,
          name: 'Strategic',
          weight: 0.0,
        },
        {
          code: 13180,
          name: 'Website',
          weight: 0.0,
        },
        {
          code: 38740,
          name: 'Blogging',
          weight: 0.0,
        },
        {
          code: 48260,
          name: 'Outreach',
          weight: 0.0,
        },
        {
          code: 11227,
          name: 'Open Source',
          weight: 0.0,
        },
        {
          code: 54875,
          name: 'Web Content',
          weight: 0.0,
        },
        {
          code: 12208,
          name: 'Journalism',
          weight: 0.0,
        },
        {
          code: 50737,
          name: 'SaaS',
          weight: 0.0,
        },
        {
          code: 55637,
          name: 'Team Leadership',
          weight: 0.0,
        },
        {
          code: 55750,
          name: 'Writing skills',
          weight: 0.0,
        },
        {
          code: 9934,
          name: 'Recruitment',
          weight: 0.0,
        },
        {
          code: 57500,
          name: 'Storytelling',
          weight: 0.0,
        },
        {
          code: 36195,
          name: 'Development',
          weight: 0.0,
        },
        {
          code: 40125,
          name: 'Copywriting',
          weight: 0.0,
        },
        {
          code: 34066,
          name: 'SEO',
          weight: 0.0,
        },
        {
          code: 43496,
          name: 'Goal oriented',
          weight: 0.0,
        },
        {
          code: 55473,
          name: 'Excellent Communicator',
          weight: 0.0,
        },
        {
          code: 56087,
          name: 'Remote work',
          weight: 0.0,
        },
        {
          code: 40442,
          name: 'Customer Focus',
          weight: 0.0,
        },
        {
          code: 55601,
          name: 'Humility',
          weight: 0.0,
        },
        {
          code: 38372,
          name: 'B2B',
          weight: 0.0,
        },
        {
          code: 623749,
          name: 'copywriting',
          weight: 0.0,
        },
        {
          code: 13307,
          name: 'Content Marketing',
          weight: 0.0,
        },
        {
          code: 1714,
          name: 'Interpersonal Skills',
          weight: 0.0,
        },
        {
          code: 17226,
          name: 'WordPress',
          weight: 0.0,
        },
        {
          code: 49791,
          name: 'Public Speaking',
          weight: 0.0,
        },
        {
          code: 492001,
          name: 'knowledge of SEO',
          weight: 0.0,
        },
        {
          code: 613142,
          name: 'Excellent editing',
          weight: 0.0,
        },
        {
          code: 613144,
          name: 'Excellent writing',
          weight: 0.0,
        },
        {
          code: 26255,
          name: 'Content Management',
          weight: 0.0,
        },
        {
          code: 30290,
          name: 'Social Media Marketing',
          weight: 0.0,
        },
        {
          code: 55391,
          name: 'Digital Marketing',
          weight: 0.0,
        },
        {
          code: 65458,
          name: 'Growth Hacking',
          weight: 0.0,
        },
        {
          code: 55269,
          name: 'Communication skills',
          weight: 0.0,
        },
        {
          code: 124852,
          name: 'Multi-tasking',
          weight: 0.0,
        },
        {
          code: 126996,
          name: 'Fast learning skills',
          weight: 0.0,
        },
        {
          code: 18645,
          name: 'Marketing',
          weight: 0.0,
        },
        {
          code: 33787,
          name: 'Sales',
          weight: 0.0,
        },
        {
          code: 55142,
          name: 'Adaptability',
          weight: 0.0,
        },
        {
          code: 55266,
          name: 'Communication',
          weight: 0.0,
        },
        {
          code: 10062,
          name: 'English',
          weight: 259.2645,
        },
        {
          code: 55317,
          name: 'Creativity',
          weight: 0.0,
        },
        {
          code: 18054,
          name: 'Strategy',
          weight: 0.0,
        },
        {
          code: 38042,
          name: 'Article Writing',
          weight: 259.2645,
        },
        {
          code: 52204,
          name: 'Social Media Management',
          weight: 1333.8934,
        },
        {
          code: 1303,
          name: 'Photography',
          weight: 323.0145,
        },
      ],
      subjectId: '1046',
      username: 'ivonne',
      verified: true,
      weight: 2430.478,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159284.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 159232.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 3827.6176,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 102468.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.96987,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {
        freelancer: {
          amount: 25.0,
          currency: 'USD$',
          periodicity: 'hourly',
        },
        employee: {
          amount: 52000.0,
          currency: 'USD$',
          periodicity: 'yearly',
        },
      },
      locationName: 'La Paz, Bolivia',
      name: 'Beto Saavedra',
      openTo: [
        'advising',
        'freelance-gigs',
        'full-time-employment',
        'part-time-employment',
        'mentoring',
      ],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/9df21e8ff4fd8ee3c0a8c162a1d7eba7b028f7d1/profile_rIhyDoh.jpg',
      professionalHeadline:
        'Lead Technical Product Manager at Mojix. \nAdvisor at Elemental School.\nKeen on capitalizing convergence of AI and Blockchain towards equitable data economies.',
      remoter: true,
      skills: [
        {
          code: 18054,
          name: 'Strategy',
          weight: 0.0,
        },
        {
          code: 45396,
          name: 'Leadership',
          weight: 0.0,
        },
        {
          code: 55357,
          name: 'Decision making skills',
          weight: 42.5,
        },
        {
          code: 11146,
          name: 'Analysis',
          weight: 42.5,
        },
        {
          code: 9736,
          name: 'Online Marketing',
          weight: 0.0,
        },
        {
          code: 13600,
          name: 'Education',
          weight: 0.0,
        },
        {
          code: 987,
          name: 'Market Advisory',
          weight: 0.0,
        },
        {
          code: 44352,
          name: 'Innovation',
          weight: 0.0,
        },
        {
          code: 41948,
          name: 'Entrepreneurship',
          weight: 0.0,
        },
        {
          code: 55637,
          name: 'Team Leadership',
          weight: 42.5,
        },
        {
          code: 37426,
          name: 'Agile',
          weight: 0.0,
        },
        {
          code: 49537,
          name: 'Product Owner',
          weight: 842.1123,
        },
        {
          code: 20924,
          name: 'Program Management',
          weight: 0.0,
        },
        {
          code: 37427,
          name: 'Agile Methodologies',
          weight: 0.0,
        },
        {
          code: 7029,
          name: 'Mentor',
          weight: 0.0,
        },
        {
          code: 55352,
          name: 'Data-Driven Growth',
          weight: 421.0561,
        },
        {
          code: 13307,
          name: 'Content Marketing',
          weight: 0.0,
        },
        {
          code: 55443,
          name: 'Emerging Tech Applied R&D',
          weight: 968.634,
        },
        {
          code: 922,
          name: 'Market Analysis',
          weight: 421.0561,
        },
        {
          code: 23700,
          name: 'Product Management',
          weight: 968.634,
        },
        {
          code: 55642,
          name: 'Tech Community Building',
          weight: 78.625,
        },
      ],
      subjectId: '1215',
      username: 'beto',
      verified: true,
      weight: 3827.6176,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159283.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 158925.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 1649.2577,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 103356.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.97619,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {},
      locationName: 'Toronto, ON, Canada',
      name: 'Andrés Cajiao',
      openTo: ['hiring', 'mentoring'],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/2c831e5c23c01d1f4c65b086784bc453e4985526/profile_wSB2AwN.jpg',
      professionalHeadline: 'Co-Founder and Chief Growth Officer at torre',
      remoter: true,
      skills: [
        {
          code: 56349,
          name: 'Data analysis',
          weight: 0.0,
        },
        {
          code: 45977,
          name: 'Marketing Management',
          weight: 0.0,
        },
        {
          code: 55576,
          name: 'Growth',
          weight: 0.0,
        },
        {
          code: 5262,
          name: 'Growth Strategies',
          weight: 0.0,
        },
        {
          code: 18319,
          name: 'Javascript',
          weight: 0.0,
        },
        {
          code: 50182,
          name: 'React',
          weight: 0.0,
        },
        {
          code: 32056,
          name: 'Python',
          weight: 0.0,
        },
        {
          code: 65458,
          name: 'Growth Hacking',
          weight: 64.2398,
        },
        {
          code: 55434,
          name: 'Effective communication',
          weight: 0.0,
        },
        {
          code: 15012,
          name: 'Business Communication',
          weight: 0.0,
        },
        {
          code: 33787,
          name: 'Sales',
          weight: 0.0,
        },
        {
          code: 40451,
          name: 'Customer Service',
          weight: 0.0,
        },
        {
          code: 55266,
          name: 'Communication',
          weight: 0.0,
        },
        {
          code: 56184,
          name: 'Strategic Thinking',
          weight: 100.3181,
        },
        {
          code: 879,
          name: 'Team Leader',
          weight: 83.6048,
        },
        {
          code: 34066,
          name: 'SEO',
          weight: 125.6689,
        },
        {
          code: 55888,
          name: 'Intense',
          weight: 36.4189,
        },
        {
          code: 55418,
          name: 'Doer',
          weight: 542.1122,
        },
        {
          code: 18645,
          name: 'Marketing',
          weight: 696.8949,
        },
      ],
      subjectId: '2654',
      username: 'ac',
      verified: true,
      weight: 1649.2577,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159282.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 158936.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 1700.0,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 103224.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.97525,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {
        employee: {
          amount: 3.0e7,
          currency: 'COP$',
          periodicity: 'monthly',
        },
      },
      locationName: 'Carrera 15 #173-25, Bogotá, Colombia',
      name: 'Jorge Andres Sayago',
      openTo: ['advising', 'full-time-employment', 'mentoring'],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/d6216d93f98fece3f1b15ec98246fa97c1c0f59f/profile_0LUev9z.jpg',
      professionalHeadline: 'Senior Account Manager',
      remoter: true,
      skills: [
        {
          code: 44352,
          name: 'Innovation',
          weight: 0.0,
        },
        {
          code: 41948,
          name: 'Entrepreneurship',
          weight: 0.0,
        },
        {
          code: 55317,
          name: 'Creativity',
          weight: 0.0,
        },
        {
          code: 56096,
          name: 'Resourceful',
          weight: 0.0,
        },
        {
          code: 55795,
          name: 'Management',
          weight: 141.6667,
        },
        {
          code: 55266,
          name: 'Communication',
          weight: 0.0,
        },
        {
          code: 1714,
          name: 'Interpersonal Skills',
          weight: 0.0,
        },
        {
          code: 27846,
          name: 'Account Management',
          weight: 141.6667,
        },
        {
          code: 33787,
          name: 'Sales',
          weight: 283.3333,
        },
        {
          code: 55269,
          name: 'Communication skills',
          weight: 283.3333,
        },
        {
          code: 18054,
          name: 'Strategy',
          weight: 283.3333,
        },
        {
          code: 55229,
          name: 'Business',
          weight: 0.0,
        },
        {
          code: 55142,
          name: 'Adaptability',
          weight: 0.0,
        },
        {
          code: 56184,
          name: 'Strategic Thinking',
          weight: 283.3333,
        },
        {
          code: 45396,
          name: 'Leadership',
          weight: 283.3333,
        },
      ],
      subjectId: '53932',
      username: 'andressayago',
      verified: true,
      weight: 1700.0,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159281.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 159073.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 1911.5397,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 102620.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.97111,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {},
      locationName: 'San José, Costa Rica',
      name: 'Mauricio Robles',
      openTo: ['advising'],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/a9e059c371c555d2953d478fe195aa0001fdefc8/profile_nkYVOdE.jpg',
      professionalHeadline:
        'Business builder, innovation catalyst, product manager, entrepreneur/intrapreneur, Certified Scrum PO & ExO Consultant, LeanUX practitioner, Moonshot strategist',
      remoter: true,
      skills: [
        {
          code: 35340,
          name: 'A/B Testing',
          weight: 0.0,
        },
        {
          code: 55684,
          name: 'UX Design',
          weight: 0.0,
        },
        {
          code: 18054,
          name: 'Strategy',
          weight: 0.0,
        },
        {
          code: 44352,
          name: 'Innovation',
          weight: 0.0,
        },
        {
          code: 45396,
          name: 'Leadership',
          weight: 0.0,
        },
        {
          code: 55142,
          name: 'Adaptability',
          weight: 0.0,
        },
        {
          code: 710317,
          name: 'Exponential Thinking',
          weight: 166.6428,
        },
        {
          code: 55370,
          name: 'Design Thinking',
          weight: 34.9657,
        },
        {
          code: 710308,
          name: 'Jobs Thinking',
          weight: 0.0,
        },
        {
          code: 56184,
          name: 'Strategic Thinking',
          weight: 0.0,
        },
        {
          code: 710367,
          name: 'Lean Thinking',
          weight: 34.9657,
        },
        {
          code: 710401,
          name: 'Hacker Thinking',
          weight: 0.0,
        },
        {
          code: 710518,
          name: 'Moonshot Thinking',
          weight: 2.8625,
        },
        {
          code: 55395,
          name: 'Digital Transformation',
          weight: 69.9313,
        },
        {
          code: 37427,
          name: 'Agile Methodologies',
          weight: 63.75,
        },
        {
          code: 711167,
          name: 'Keynote Speaker and Moderator',
          weight: 0.0,
        },
        {
          code: 64806,
          name: '"Fear Less" Leadership',
          weight: 106.25,
        },
        {
          code: 44353,
          name: 'Innovation Management',
          weight: 344.6936,
        },
        {
          code: 23700,
          name: 'Product Management',
          weight: 170.5165,
        },
        {
          code: 41948,
          name: 'Entrepreneurship',
          weight: 916.9617,
        },
      ],
      subjectId: '12127',
      username: 'mauricioroblesba',
      verified: true,
      weight: 1911.5397,
    },
    {
      context: {
        signaled: null,
      },
      _meta: {
        '@type': 'and',
        pass: null,
        rank: 159280.0,
        score: null,
        and: [
          {
            '@type': 'scorer',
            pass: null,
            rank: 158721.0,
            scorer: 'weight',
            score: null,
            input: {
              criteria: null,
              person: {
                weight: 1095.0471,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 103892.0,
            scorer: 'grammar',
            score: null,
            input: {
              criteria: null,
              person: {
                grammar: 0.97967,
              },
            },
          },
          {
            '@type': 'scorer',
            pass: null,
            rank: 153052.0,
            scorer: 'completion',
            score: null,
            input: {
              criteria: null,
              person: {
                completion: 1.0,
              },
            },
          },
        ],
      },
      compensations: {
        freelancer: {
          amount: 800.0,
          currency: 'USD$',
          periodicity: 'monthly',
        },
        intern: {
          amount: 800.0,
          currency: 'USD$',
          periodicity: 'monthly',
        },
        employee: {
          amount: 800.0,
          currency: 'USD$',
          periodicity: 'monthly',
        },
      },
      locationName: 'Buenos Aires, Argentina',
      name: 'Juan Felipe Valderrama',
      openTo: [
        'advising',
        'freelance-gigs',
        'internships',
        'full-time-employment',
        'part-time-employment',
      ],
      picture:
        'https://starrgate.s3.amazonaws.com:443/users/22abf3cdf2013d3d98b3504d2397a1b3c1317758/profile_3Qu5Yfj.jpg',
      professionalHeadline: 'Business and Management',
      remoter: true,
      skills: [
        {
          code: 17226,
          name: 'WordPress',
          weight: 0.0,
        },
        {
          code: 18645,
          name: 'Marketing',
          weight: 0.0,
        },
        {
          code: 33329,
          name: 'CRM',
          weight: 0.0,
        },
        {
          code: 33342,
          name: 'Salesforce Administration',
          weight: 0.0,
        },
        {
          code: 45932,
          name: 'Margin Analysis',
          weight: 0.0,
        },
        {
          code: 1687,
          name: 'Negotiation Skills',
          weight: 0.0,
        },
        {
          code: 27851,
          name: 'Logistics Management',
          weight: 0.0,
        },
        {
          code: 33763,
          name: 'Logistics (General)',
          weight: 0.0,
        },
        {
          code: 50835,
          name: 'Sales Growth',
          weight: 0.0,
        },
        {
          code: 50837,
          name: 'Sales Management',
          weight: 0.0,
        },
        {
          code: 26187,
          name: 'Technology',
          weight: 0.0,
        },
        {
          code: 38375,
          name: 'B2B Sales',
          weight: 0.0,
        },
        {
          code: 56348,
          name: 'Business Development',
          weight: 0.0,
        },
        {
          code: 9886,
          name: 'Salesforce',
          weight: 0.0,
        },
        {
          code: 55879,
          name: 'Innovation strategy',
          weight: 0.0,
        },
        {
          code: 56087,
          name: 'Remote work',
          weight: 365.0157,
        },
        {
          code: 45396,
          name: 'Leadership',
          weight: 365.0157,
        },
        {
          code: 154,
          name: 'Business Management',
          weight: 365.0157,
        },
        {
          code: 33787,
          name: 'Sales',
          weight: 0.0,
        },
        {
          code: 50836,
          name: 'Sales Leads',
          weight: 0.0,
        },
        {
          code: 26127,
          name: 'Customer Sales & Service',
          weight: 0.0,
        },
        {
          code: 18054,
          name: 'Strategy',
          weight: 0.0,
        },
        {
          code: 55437,
          name: 'Efficiency',
          weight: 0.0,
        },
        {
          code: 56184,
          name: 'Strategic Thinking',
          weight: 0.0,
        },
        {
          code: 52961,
          name: 'Strategy Development',
          weight: 0.0,
        },
        {
          code: 50853,
          name: 'Sales Strategy',
          weight: 0.0,
        },
        {
          code: 56096,
          name: 'Resourceful',
          weight: 0.0,
        },
        {
          code: 55317,
          name: 'Creativity',
          weight: 0.0,
        },
        {
          code: 55266,
          name: 'Communication',
          weight: 0.0,
        },
      ],
      subjectId: '209202',
      username: 'jfvalderrama10',
      verified: true,
      weight: 1095.0471,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
