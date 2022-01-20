const TYPE_ALLOWED_VALUES = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    if (!TYPE_ALLOWED_VALUES.includes(type)) {
      throw new Error('Неверный тип героя');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }
}

export default Character;
