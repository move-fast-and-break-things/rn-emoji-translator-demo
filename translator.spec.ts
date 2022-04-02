import tranlsate from './translator';

describe('translate', () => {
  it('should translate empty string to ""', () => {
    expect(tranlsate('')).toBe('');
  });

  it('should translate "привет мир" to "✌🏻 🌏"', () => {
    expect(tranlsate('привет мир')).toBe('✌🏻 🌏');
  });

  it('should translate "привет, мир" to "✌🏻 🌏"', () => {
    expect(tranlsate('привет, мир')).toBe('✌🏻 🌏');
  });

  it('should translate "Привет,мир" to "✌🏻 🌏"', () => {
    expect(tranlsate('Привет,мир')).toBe('✌🏻 🌏');
  });

  it('should translate "я иду гулять" to "я иду 🚶🏕', () => {
    expect(tranlsate('я иду гулять')).toBe('я иду 🚶🏕');
  });
});
