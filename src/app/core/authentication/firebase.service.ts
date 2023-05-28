import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  // firebaseConfig : {
  //   apiKey: "AIzaSyAR-JX-NIqDAl9wP22CEuBrG0j3JE0DN-g",
  //   authDomain: "study-group-4000b.firebaseapp.com",
  //   projectId: "study-group-4000b",
  //   storageBucket: "study-group-4000b.appspot.com",
  //   messagingSenderId: "560713917826",
  //   appId: "1:560713917826:web:a0da488127d2201abadb9b",
  //   measurementId: "G-8H95X5G4KM"
  // };
}


export const enviornment={
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAR-JX-NIqDAl9wP22CEuBrG0j3JE0DN-g",
    authDomain: "study-group-4000b.firebaseapp.com",
    projectId: "study-group-4000b",
    storageBucket: "study-group-4000b.appspot.com",
    messagingSenderId: "560713917826",
    appId: "1:560713917826:web:a0da488127d2201abadb9b",
    measurementId: "G-8H95X5G4KM"
  }
}
