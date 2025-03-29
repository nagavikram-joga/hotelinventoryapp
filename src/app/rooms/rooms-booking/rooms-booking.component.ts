import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss',
})
export class RoomsBookingComponent implements OnInit {
  roomId!: string;

  id$!: Observable<string>;

  // This method is called when the user clicks the "Back" button
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the room ID from the route parameters
    // this.activatedRoute.params.subscribe((params) => {
    //   this.roomId = params['roomNumber'];
    //   console.log('Room ID:', this.roomId);
    //   // You can use the room ID to fetch room details or perform other actions
    // });

    // Using snapshot to get the room ID from the route parameters
    // this.roomId = this.activatedRoute.snapshot.params['roomNumber'];
    // console.log('Room ID:', this.roomId);

    // this.id$ = this.activatedRoute.params.pipe(
    //   map((params) => params['roomNumber'])
    // );

    // using paramsMap to get the room ID from the route parameters
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   this.roomId = params.get('roomNumber') || '';
    //   console.log('Room ID:', this.roomId);
    // });

    this.id$ = this.activatedRoute.paramMap.pipe(
      map((params) => params.get('roomNumber') || '')
    );
  }
}
