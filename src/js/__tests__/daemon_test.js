import Character from '../Character';
import Daemon from '../Daemon';
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
