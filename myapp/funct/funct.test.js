const isLeapYear = require('./funct');

describe('is year lean', () => {
  test('2003 - false', () => {
    expect(isLeapYear(2003)).toBe(false);
    /*
          const expect =result=>}
          return {
          result,
          toBe(value){
          return this.result === value
          }

  }
          */
  });
  test('2000 - true', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test('2008 - true', () => {
    expect(isLeapYear(2008)).toBe(true);
  });

  test('1900 - false', () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test('41 -error, year must 42 or more', () => {
    expect(() => isLeapYear(41)).toThrow('year must 42 or more');
  });

  test("2008.2 -error 'year must be integer'", () => {
    expect(() => isLeapYear(2008.2)).toThrow('year must be integer');
  });

  test('() - error "year must be exist"', () => {
    expect(() => isLeapYear()).toThrow('year must be exist');
  });

  test("'2008' -error 'year must be number'", () => {
    expect(() => isLeapYear('2008')).toThrow('year must be number');
  });

  test("null - error 'year must be number'", () => {
    expect(() => isLeapYear(null)).toThrow('year must be number');
  });

  test("()=> - error 'year must be number'", () => {
    expect(() => isLeapYear(() => {})).toThrow('year must be number');
  });
  test("{} - error 'year must be number'", () => {
    expect(() => isLeapYear({})).toThrow('year must be number');
  });

  test("[] - error 'year must be number'", () => {
    expect(() => isLeapYear([])).toThrow('year must be number');
  });

  test("false - error 'year must be number'", () => {
    expect(() => isLeapYear(false)).toThrow('year must be number');
  });

  test("true - error 'year must be number'", () => {
    expect(() => isLeapYear(true)).toThrow('year must be number');
  });
});
