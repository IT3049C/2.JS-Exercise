const {personObject} = require(`../4.objects`);

describe(`4.objects`, () => {
  
  it(`Contains a first_name property`, () => expect(personObject).toHaveProperty(`first_name`));
  it(`The first_name property is of type string`, () => expect(typeof personObject.first_name).toEqual(`string`));
  
  it(`Contains a last_name property`, () => expect(personObject).toHaveProperty(`last_name`));
  it(`The last_name property is of type string`, () => expect(typeof personObject.last_name).toEqual(`string`));

  it(`Contains a class_of property`, () => expect(personObject).toHaveProperty(`class_of`));
  it(`The class_of property is of type number`, () => expect(typeof personObject.class_of).toEqual(`number`));

  it(`Contains a full_name property`, () => expect(personObject).toHaveProperty(`full_name`));
  it(`The full_name property is of type function`, () => expect(typeof personObject.full_name).toEqual(`function`));
  it(`returns the full name when called`, () => 
    expect(personObject.full_name()).toEqual(`${personObject.first_name} ${personObject.last_name}`));

  it(`Contains a introduction property`, () => expect(personObject).toHaveProperty(`introduction`));
  it(`The introduction property is of type function`, () => expect(typeof personObject.introduction).toEqual(`function`));
  it(`returns the introduction when called`, () => {
    const spy = jest.spyOn(personObject, `full_name`);
    expect(personObject.introduction()).toContain(`${personObject.first_name}`);
    expect(personObject.introduction()).toContain(`${personObject.last_name}`);
    expect(personObject.introduction()).toContain(`${personObject.class_of}`);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
