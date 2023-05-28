import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-globalroom',
  templateUrl: './globalroom.component.html',
  styleUrls: ['./globalroom.component.css']
})
export class GlobalroomComponent {

  constructor(private route: Router) { }

  //for solo study room
  soloStudyRoom() {
    this.route.navigate(['/solo-study-room'])
  }

  roomsData = [
    {
      "id": 1,
      "title": "Mathematics",
      "description": "Study group for Mathematics students to discuss various concepts and solve problems together.",
      "time": "5 hours"
    },
    {
      "id": 2,
      "title": "Physics",
      "description": "Study group for Physics students to discuss various concepts and solve problems together.",
      "time": "2 hours"
    },
    {
      "id": 3,
      "title": "Computer Science",
      "description": "Study group for Computer Science students to discuss various programming concepts and solve problems together.",
      "time": "3 hours"
    },
    {
      "id": 4,
      "title": "Chemistry",
      "description": "Study group for Chemistry students to discuss various concepts and solve problems together.",
      "time": "4 hours"
    },
    {
      "id": 5,
      "title": "Biology",
      "description": "Study group for Biology students to discuss various concepts and solve problems together.",
      "time": "1 hour"
    },
    {
      "id": 6,
      "title": "English",
      "description": "Study group for English students to discuss literature and improve language skills.",
      "time": "2.5 hours"
    },
    {
      "id": 7,
      "title": "History",
      "description": "Study group for History students to discuss various historical events and improve knowledge.",
      "time": "1.5 hours"
    },
    {
      "id": 8,
      "title": "Art",
      "description": "Study group for Art students to discuss various art styles and techniques.",
      "time": "3 hours"
    },
    {
      "id": 9,
      "title": "Music",
      "description": "Study group for Music students to discuss various musical concepts and techniques.",
      "time": "2 hours"
    },
    {
      "id": 10,
      "title": "Philosophy",
      "description": "Study group for Philosophy students to discuss various philosophical concepts and theories.",
      "time": "5 hours"
    },
    {
      "id": 11,
      "title": "Psychology",
      "description": "Study group for Psychology students to discuss various psychological concepts and theories.",
      "time": "3 hours"
    },
    {
      "id": 12,
      "title": "Sociology",
      "description": "Study group for Sociology students to discuss various sociological concepts and theories.",
      "time": "4 hours"
    },
    {
      "id": 13,
      "title": "Political Science",
      "description": "Study group for Political Science students to discuss various political concepts and theories.",
      "time": "2.5 hours"
    },
    {
      "id": 14,
      "title": "Marketing",
      "description": "Study group for Marketing students to discuss various marketing concepts and strategies.",
      "time": "3.5 hours"
    },
    {
      "id": 15,
      "title": "Business Management",
      "description": "Study group for Business Management students to discuss various business concepts and strategies.",
      "time": "4 hours"
    },
    {
      "id": 16,
      "title": "Economics",
      "description": "Study group for Economics students to discuss various economic concepts and theories.",
      "time": "5 hours"
    },
    {
      "id": 17,
      "title": "Engineering",
      "description": "Study group for Engineering students to discuss various engineering concepts and solve problems together.",
      "time": "2 hours"
    },
    {
      "id": 18,
      "title": "Environmental Science",
      "description": "Study group for Environmental Science students to discuss various environmental concepts and issues.",
      "time": "3.5 hours"
    },
    {
      "id": 19,
      "title": "Geography",
      "description": "Study group for Geography students to discuss various geographic concepts and issues.",
      "time": "1 hour"
    },
    {
      "id": 20,
      "title": "Law",
      "description": "Study group for Law students to discuss various legal concepts and issues.",
      "time": "2.5 hours"
    },
    {
      "id": 21,
      "title": "Medicine",
      "description": "Study group for Medicine students to discuss various medical concepts and issues.",
      "time": "5 hours"
    },
    {
      "id": 22,
      "title": "Nursing",
      "description": "Study group for Nursing students to discuss various nursing concepts and issues.",
      "time": "1.5 hours"
    },
    {
      "id": 23,
      "title": "Physical Education",
      "description": "Study group for Physical Education students to discuss various physical education concepts and issues.",
      "time": "3 hours"
    },
    {
      "id": 24,
      "title": "Social Work",
      "description": "Study group for Social Work students to discuss various social work concepts and issues.",
      "time": "2.5 hours"
    },
    {
      "id": 25,
      "title": "Theater",
      "description": "Study group for Theater students to discuss various theater concepts and techniques.",
      "time": "4 hours"
    },
    {
      "id": 26,
      "title": "Anthropology",
      "description": "Study group for Anthropology students to discuss various anthropological concepts and theories.",
      "time": "3 hours"
    },
    {
      "id": 27,
      "title": "Archeology",
      "description": "Study group for Archeology students to discuss various archeological concepts and theories.",
      "time": "1.5 hours"
    },
    {
      "id": 28,
      "title": "Architecture",
      "description": "Study group for Architecture students to discuss various architectural concepts and techniques.",
      "time": "2 hours"
    },
    {
      "id": 29,
      "title": "Astrophysics",
      "description": "Study group for Astrophysics students to discuss various astrophysical concepts and theories.",
      "time": "3.5 hours"
    },
    {
      "id": 30,
      "title": "Biochemistry",
      "description": "Study group for Biochemistry students to discuss various biochemical concepts and theories.",
      "time": "4.5 hours"
    },
    {
      "id": 31,
      "title": "Biotechnology",
      "description": "Study group for Biotechnology students to discuss various biotechnological concepts and theories.",
      "time": "2.5 hours"
    },
  ];
}
