import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import { AppConfig } from '../../appConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomsList_roomsS: RoomsList[] = [];

  constructor(
    @Inject(APP_SERVICE_CONFIG) appServiceConfig: AppConfig,
    private http: HttpClient
  ) {
    // console.log(environment.apiUrl);
    console.log(appServiceConfig);
    console.log('Rooms service initialized..');
  }

  getRooms() : Observable<RoomsList[]>{
    return this.http.get<RoomsList[]>('/api/rooms');
  }
}
