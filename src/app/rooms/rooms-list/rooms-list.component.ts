import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Rooms, RoomsList } from '../rooms';
import {
  NgClass,
  NgStyle,
  LowerCasePipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  // NgIf,
  NgFor,
} from '@angular/common';

@Component({
  selector: 'hinv-rooms-list',
  imports: [
    NgClass,
    NgStyle,
    DatePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    // NgIf,
    NgFor,
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() rooms_RLC: RoomsList[] | null = [];
  @Input() room_RLC: Rooms = {
    availableRooms: 0,
    bookedRooms: 0,
    totalRooms: 0,
  };
  @Input() title_RLC: string = '';
  @Output() selectedRoom_RLC = new EventEmitter<RoomsList>();
  selectRoom_RLC(room: RoomsList) {
    this.selectedRoom_RLC.emit(room);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(
    //   'ngOnChanges() from RLC : ' + changes['title_RLC']?.currentValue
    // );
    if (changes['title_RLC']) {
      this.title_RLC = changes['title_RLC'].currentValue.toUpperCase();
    }
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy() from rooms-list.component');
  }
}
