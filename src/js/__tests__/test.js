import Character from '../Character';
import Daemon from '../Daemon';

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