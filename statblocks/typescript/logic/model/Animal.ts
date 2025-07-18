import { Section } from './Section';
export class Animal {
	name: string;
	size: string;

	armorClass: number;
	hitPoints: number;
	speed: number;

	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;

	skills: string;
	challengeRating: string;
	proficiencyBonus: number;

	sections: Section[];

	constructor(name: string,
	size: string,

	armorClass: number,
	hitPoints: number,
	speed: number,

	strength: number,
	dexterity: number,
	constitution: number,
	intelligence: number,
	wisdom: number,
	charisma: number,

	skills: string,
	challengeRating: string,
	proficiencyBonus: number,

	sections: Section[]) {
		this.name = name; 
		this.size = size; 

		this.armorClass = armorClass; 
		this.hitPoints = hitPoints; 
		this.speed = speed; 

		this.strength = strength; 
		this.dexterity = dexterity; 
		this.constitution = constitution; 
		this.intelligence = intelligence; 
		this.wisdom = wisdom; 
		this.charisma = charisma; 

		this.skills = skills; 
		this.challengeRating = challengeRating; 
		this.proficiencyBonus = proficiencyBonus; 

		this.sections = sections;
	}
}
