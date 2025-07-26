import { Animal } from "../logic/model/Animal";
import { Section } from "../logic/model/Section";
import { SkillSection } from "../logic/model/SkillSection";

export function animalJsonToAnimal(json: any): Animal {
	const JSONsections: any = json.sections;
	const sections: Section[] = [];
	JSONsections.forEach((section: any) => {
		sections.push(new Section(section.title, section.texts));
	});
	const skillSection: SkillSection = new SkillSection(json.skills);
	const animal: Animal = new Animal(json.name, json.size, json.armorClass, json.hitPoints, json.speed,
									  json.strength, json.dexterity, json.constitution, json.intelligence,
									  json.wisdom, json.charisma, skillSection, json.challengeRating, json.proficiencyBonus,
									  sections);
	return animal;
}
