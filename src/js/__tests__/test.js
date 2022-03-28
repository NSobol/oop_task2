import Character from '../Character';
import Bowerman from '../Bowerman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';
import Swordsman from '../Swordsman';

test ('Тестирование создания объекта класса Bowerman', ()=>{
	const exp = {
		health: 100,
    	level: 1,
		attack: 25,
		defence: 25,
		name: 'Toni',
		type: 'Bowman' 
 	}
	
	const resolve = new Bowerman('Toni');
	expect(resolve).toEqual(exp); 
});

test ('Тестирование создания объекта класса Daemon', ()=>{
	const exp = {
		health: 100,
    	level: 1,
		attack: 10,
		defence: 40,
		name: 'Aleks',
		type: 'Daemon' 
 	}
	
	const resolve = new Daemon('Aleks');
	expect(resolve).toEqual(exp); 
});

test ('Тестирование создания объекта класса Magician', ()=>{
	const exp = {
		health: 100,
    	level: 1,
		attack: 10,
		defence: 40,
		name: 'Dmitriy',
		type: 'Magician' 
 	}
	
	const resolve = new Magician('Dmitriy');
	expect(resolve).toEqual(exp); 
});

test ('Тестирование создания объекта класса Swordsman', ()=>{
	const exp = {
		health: 100,
    	level: 1,
		attack: 40,
		defence: 10,
		name: 'Vasily',
		type: 'Swordsman' 
 	}
	
	const resolve = new Swordsman('Vasily');
	expect(resolve).toEqual(exp); 
});

test ('Тестирование создания объекта класса Undead', ()=>{
	const exp = {
		health: 100,
    	level: 1,
		attack: 25,
		defence: 25,
		name: 'Ivan',
		type: 'Undead' 
 	}
	
	const resolve = new Undead('Ivan');
	expect(resolve).toEqual(exp); 
});

test ('Тестирование создания объекта класса Zombie', ()=>{
	const exp = {
		health: 100,
    	level: 1,
		attack: 40,
		defence: 10,
		name: 'Maks',
		type: 'Zombie' 
 	}
	
	const resolve = new Zombie('Maks');
	expect(resolve).toEqual(exp); 
});

test('uncorrect name character', () => {
	expect(() => new Daemon('A')).toThrowError(
	  new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов'),
	);
  });
  
test('uncorrect type character', () => {
	expect(() => new Character('Anatoly', 'Druid')).toThrowError(
	  new Error('Некорректный тип персонажа'),
	);
});

test('work of the method "levelUp"',()=>{
 const exp= {
    attack: 12,
    defence: 48,
    health: 100,
    level: 2,
    name: 'Aleks',
    type: 'Daemon',
  };

  const resolve= new Daemon('Aleks');
  resolve.levelUp();
  expect(resolve).toEqual(exp)
});

test('work of the method "levelUp"(health===0)',()=>{
	const resolve= new Daemon('Aleks');
	resolve.health=0;
	expect(()=>resolve.levelUp()).toThrowError(
		new Error('Нельзя повысить левел умершего'));
});

test('work of the method "damage"',()=>{
	const exp= {
		attack: 10,
		defence: 40,
		health: 70,
		level: 1,
		name: 'Aleks',
		type: 'Daemon',
	  };
	
	  const resolve= new Daemon('Aleks');
	  resolve.damage(50);
	  expect(resolve).toEqual(exp)
});