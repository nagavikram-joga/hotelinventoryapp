export interface Rooms {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomsList {
  // roomId: number;
  roomType: string;
  amenities: string;
  price: number;
  roomNumber: string;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
