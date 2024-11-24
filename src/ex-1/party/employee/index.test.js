import { Employee } from '.';

describe('Employee', () => {
  it('should have name, id, and monthly cost', () => {
    const department = new Employee('Kaio', 1, 10);
    expect(department.name).toEqual('Kaio');
    expect(department.id).toEqual(1);
    expect(department.monthlyCost).toEqual(10);
  });

  it('should calculate the annual cost by multiplying the monthly cost by 12', () => {
    const department = new Employee('Kaio', 1, 10);
    expect(department.annualCost).toEqual(120);
  });
});
