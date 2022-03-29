import Character from '../Character';
import Magician from '../Magician';

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