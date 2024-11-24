import { Department } from '.';
import { Employee } from '../employee';

describe('Department', () => {
  it('should have a name and staff', () => {
    const staff = [new Employee('Kaio', 1, 10), new Employee('Enzo', 2, 10)];
    const department = new Department('Software Engineering', staff);
    expect(department.name).toEqual('Software Engineering');
    expect(department.staff).toEqual(staff);
  });

  it('should calculate the annual cost by multiplying the monthly cost by 12', () => {
    const staff = [new Employee('Kaio', 1, 10), new Employee('Enzo', 2, 10)];
    const department = new Department('Software Engineering', staff);
    expect(department.annualCost).toEqual(240);
  });
});
