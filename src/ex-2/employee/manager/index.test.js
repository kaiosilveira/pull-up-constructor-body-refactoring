import { Manager } from '.';

describe('Manager', () => {
  it('should have a name and grade', () => {
    const manager = new Manager('Kaio', 5);
    expect(manager.name).toEqual('Kaio');
    expect(manager.grade).toEqual(5);
  });

  describe('privileges', () => {
    it('should have a car assigned if grade is greater than 4', () => {
      const manager = new Manager('Kaio', 5);
      expect(manager.isPrivileged).toBeTruthy();
    });

    it('should not have a car assigned if grade is less than 4', () => {
      const manager = new Manager('Kaio', 3);
      expect(manager.isPrivileged).toBeFalsy();
    });
  });
});
