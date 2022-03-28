const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
	constructor(name, type, health, level, attack, defence) {
		if(name.length>2 && name.length<10){
			this.name=name;
		} else {
			throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
		}

		if (types.includes(type)) {
			this.type = type;
		} else {
			throw new Error('Некорректный тип персонажа');
		}

		this.health = 100;
        this.level = 1;
		this.attack = attack;
		this.defence = defence; 
	}

	levelUp(){
		if (this.health>0) {
		this.level += 1;
		this.attack *= 1.2;
		this.defence *= 1.2;
		this.health = 100;
		return;
		} else {
			throw new Error('Нельзя повысить левел умершего');
		}
	}

	damage(points) {
		if(this.health >= 0) {
			this.health -= points * (1 - this.defence/100);
		}
	}


}