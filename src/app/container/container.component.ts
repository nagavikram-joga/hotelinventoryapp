import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employee_containerC!: EmployeeComponent;
  ngAfterContentInit(): void {
    console.log(this.employee_containerC);
    this.employee_containerC.empName = 'John Wick';
  }
}
