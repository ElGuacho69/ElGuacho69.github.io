import { replaceAllByTemplate } from "./Helpers";
import { boldTemplate, italicTemplate, skillSectionTemplate } from "./Templates";
export class SkillSection {
	private skillTexts: string[];
	constructor(skillTexts: string[]) {
		this.skillTexts = skillTexts;
	}

	toHtml(): string {
		let fullSkillsText = "";
		for(let i: number = 0; i < this.skillTexts.length; i++) {
			let skillText = this.skillTexts[i];
			skillText = replaceAllByTemplate(skillText, '*', boldTemplate, 'boldTextSocket');
			skillText  = replaceAllByTemplate(skillText , '_', italicTemplate, 'italicTextSocket');
			fullSkillsText += skillSectionTemplate.replace('skillSocket', skillText);
		}
		return fullSkillsText;
	}
}
