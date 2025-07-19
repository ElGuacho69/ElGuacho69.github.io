import { Section } from './Section';
import { statblockTemplate, breakTemplate } from './Templates';
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
	challengeRating: number;
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
	challengeRating: number,
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

	toHtml(): string {
		let template = statblockTemplate;
		template =  template.replace('nameSocket', this.name)
							.replace('sizeSocket', this.size)
							.replace('armorClassSocket', this.armorClass.toString())
							.replace('hitPointsSocket', this.hitPoints.toString())
							.replace('speedSocket', this.speed.toString())
							.replace('strengthSocket', this.strength.toString())
							.replace('strengthModifierSocket', Animal.formatModifier(Animal.scoreToModifier(this.strength)))
							.replace('dexteritySocket', this.dexterity.toString())
							.replace('dexterityModifierSocket', Animal.formatModifier(Animal.scoreToModifier(this.dexterity)))
							.replace('constitutionSocket', this.constitution.toString())
							.replace('constitutionModifierSocket', Animal.formatModifier(Animal.scoreToModifier(this.constitution)))
							.replace('intelligenceSocket', this.intelligence.toString())
							.replace('intelligenceModifierSocket', Animal.formatModifier(Animal.scoreToModifier(this.intelligence)))
							.replace('wisdomSocket', this.wisdom.toString())
							.replace('wisdomModifierSocket', Animal.formatModifier(Animal.scoreToModifier(this.wisdom)))
							.replace('charismaSocket', this.charisma.toString())
							.replace('charismaModifierSocket', Animal.formatModifier(Animal.scoreToModifier(this.charisma)))
							.replace('skillsSocket', this.skills)
							.replace('challengeRatingSocket', this.getFormattedChallengeRating())
							.replace('proficiencyBonusSocket', this.proficiencyBonus.toString());
		let sectionHtml = '';
		for(let i: number = 0; i < this.sections.length; i++) {
			sectionHtml += this.sections[i].toHtml();
			if(i != this.sections.length - 1){
				sectionHtml += breakTemplate;
			}
		}
		template = template.replace('sectionsSocket', sectionHtml);
		return template
	}

	getFormattedChallengeRating(): string {
		const cr = this.challengeRating;
		if(cr == 0.125) {
			return '1/8';
		} else if (cr == 0.25) {
			return '1/4'
		} else if (cr == 0.5) {
			return '1/2'
		} else {
			return cr.toString();
		}
	}

	static scoreToModifier(score: number): number {
		return Math.floor((score - 10)/2);
	}

	static formatModifier(modifier: number): string {
		if(modifier >= 0) {
			return '+' + modifier.toString();
		} else {
			return modifier.toString();
		}
	}
}
