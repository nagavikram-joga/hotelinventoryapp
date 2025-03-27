import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RoomsService],
})
export class ContainerComponent implements AfterContentInit {
  // @Host will make all the components within the Container component to use the local instance of
  // RoomsService instead of global instance of RoomsService
  constructor(@Host() private roomsService: RoomsService) {}
  @ContentChild(EmployeeComponent) employee_containerC!: EmployeeComponent;
  ngAfterContentInit(): void {
    // console.log(this.employee_containerC);
    this.employee_containerC.empName = 'John Wick';
  }
}
