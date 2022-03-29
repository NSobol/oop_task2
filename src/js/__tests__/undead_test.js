import Character from '../Character';
import Undead from '../Undead';
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