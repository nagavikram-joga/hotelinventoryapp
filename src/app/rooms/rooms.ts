export interface Rooms {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomsList {
  roomId: number;
  roomType: string;
  amenities: string;
  price: number;
  roomNumber: number;
  checkInTime: Date;
  rating: number;
}
