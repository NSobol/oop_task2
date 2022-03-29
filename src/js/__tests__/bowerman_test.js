import Character from '../Character';
import Bowerman from '../Bowerman';

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