import Character from '../Character';

describe('Character class:', () => {
  test('should return Error', () => {
    expect(() => {
      const hero = new Character('12345678');
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('l', 'Magician', 50, 50, 10, 20);
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('longStringggggg', 'Magician', 50, 50, 10, 20);
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('Elena', 'Magicia', 50, 50, 10, 20);
      delete hero.name;
    }).toThrow();
  });

  test('should return object', () => {
    const hero = new Character('Merlin', 'Magician', 50, 50, 10, 20);

    const Merlin = {
      name: 'Merlin',
      type: 'Magician',
      health: 50,
      level: 50,
      attack: 10,
      defence: 20,
    };

    expect(hero).toEqual(Merlin);
  });
});
