import Character from '../Character';
import Zombie from '../Zombie';
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