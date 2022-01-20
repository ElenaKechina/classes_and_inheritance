import Character from '../Character';

describe('Character class:', () => {
  test('should return Error', () => {
    expect(() => {
      const hero = new Character('12345678');
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('l', 'Magician');
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('longStringggggg', 'Magician');
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('Elena', 'Magicia');
      delete hero.name;
    }).toThrow();
  });

  test('should return object', () => {
    const hero = new Character('Merlin', 'Magician');

    const Merlin = {
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    };

    expect(hero).toEqual(Merlin);
  });
});
