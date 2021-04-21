const {instruments, tunings, getAvailableInstruments} = require('../src/instruments');

describe('./src/instruments', () => {
 describe('#should check all data is in valid format', () => {
  test.each([...instruments, ...tunings])(
    'should match instruments and tuning data types when %s',
    (instrument) => {
     expect(instrument).toEqual({
      name: expect.any(String),
      rootNotes: expect.any(Array),
      type: expect.any(String),
     })
    });
 })

 describe('#getAvailableInstruments', () => {
  let instruments;

  beforeEach(() => {
   instruments = getAvailableInstruments();
  })

  it('should return elements with an id property', () => {
   expect(instruments[0]).toHaveProperty('id', 1);
  });

  it('should return elements in alphabetical order (first)', () => {
   expect(instruments[0]).toHaveProperty('name', 'Admiral');
  });

  it('should return elements in alphabetical order (last)', () => {
   expect(instruments[instruments.length-1]).toHaveProperty('name', 'Zither');
  });
 });
});
