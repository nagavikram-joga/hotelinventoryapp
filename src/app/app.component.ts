import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
// import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './appConfig/appconfig.service';
import { LocalstorageToken } from '../localstoorage.token';
import { RoomsService } from './rooms/services/rooms.service';

// import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'hinv-root',
  imports: [
    // RouterOutlet,
    RoomsComponent,
    ContainerComponent,
    EmployeeComponent,
  ],
  templateUrl: './app.component.html',
  // template:`<h1>Hello World from inline html</h1>
  // <p>This is Vikram</p>`,
  styleUrl: './app.component.scss',
  // styles : [`h1{color:red}`],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    RoomsService,
  ],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'HotelInventoryApp';
  role = 'user';

  // @ViewChild('user', { read: ViewContainerRef })
  // viewContainerRef_appC!: ViewContainerRef;
  ngAfterViewInit(): void {
    //   //This will load RoomsComponent Dynamically
    //   const componentRef =
    //     this.viewContainerRef_appC.createComponent(RoomsComponent);
    //   //We can access any property of the RoomsComponent
    //   // Eg.
    //   componentRef.instance.noOfRooms_RC = 20;
  }

  @ViewChild('name', { static: true }) name_eref_appC!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(LocalstorageToken) private localStorage: Storage
  ) {}
  ngOnInit(): void {
    this.loggerService?.log(
      'Logger service instantiated from app.component.ts'
    );
    this.name_eref_appC.nativeElement.innerText =
      'Welcome to Hotel Inventory App!';
    this.localStorage.setItem('AppName', 'Hilton Hotel!');
  }
}
