import Character from './Character';
import Bowerman from './Bowerman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';
import Swordsman from './Swordsman';

const bowman = new Bowerman('Toni', 'Bowman');
const swordsman = new Swordsman('Vasily', 'Swordsman');
const magician = new Magician('Dmitriy', 'Magician');
const undead = new Undead('Ivan', 'Undead');
const zombie = new Zombie('Maks', 'Zombie');
const daemon = new Daemon('Aleks', 'Daemon');

console.log(bowman, swordsman, magician, undead, zombie, daemon);