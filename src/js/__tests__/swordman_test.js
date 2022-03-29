import Character from '../Character';
import Swordsman from '../Swordsman';

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