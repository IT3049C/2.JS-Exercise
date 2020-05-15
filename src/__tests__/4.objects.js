const {personObject} = require(`../4.objects`);

describe(`returnPersonObject`, function () {
  it(`contains a first_name, last_name, and full_name properties`, function() {
    expect(personObject).toHaveProperty(`first_name`);
    expect(personObject).toHaveProperty(`last_name`);
    expect(personObject).toHaveProperty(`class_of`);
    expect(personObject).toHaveProperty(`full_name`);
    expect(personObject).toHaveProperty(`introduction`);
  });

  it(`properties are of the correct data types`, function() {
    expect(typeof personObject.first_name).toEqual(`string`);
    expect(typeof personObject.last_name).toEqual(`string`);
    expect(typeof personObject.class_of).toEqual(`number`);
    expect(typeof personObject.full_name).toEqual(`function`);
    expect(typeof personObject.introduction).toEqual(`function`);
  });

  it(`full_name is function returning the concatenation of first_name and last_name`, function() {
    expect(personObject.full_name()).toEqual(`${personObject.first_name} ${personObject.last_name}`);
  });

  it(`introduction is function that calls full_name() and returns a welcome message`, function() {
    const spy = jest.spyOn(personObject, `full_name`);
    expect(personObject.introduction()).toContain(`${personObject.first_name}`);
    expect(personObject.introduction()).toContain(`${personObject.last_name}`);
    expect(personObject.introduction()).toContain(`${personObject.class_of}`);
    expect(spy).toHaveBeenCalledTimes(3);
  });

});
