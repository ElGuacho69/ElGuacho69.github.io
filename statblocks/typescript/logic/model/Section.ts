import { sectionTemplate, boldTemplate, italicTemplate, breakTemplate } from "./Templates";
import { replaceAllByTemplate } from "./Helpers";
export class Section {
	private title: string;
	private sectionTexts: string[];

	constructor(title: string, sectionTexts: string[]){
		this.title = title;
		this.sectionTexts = sectionTexts;
	}

	toHtml(): string {
		let template: string = sectionTemplate;
		template = template.replace('titleSocket', this.title);
		let fullSectionText: string = "";
		for(let i: number = 0; i < this.sectionTexts.length; i++) {
			let sectionText: string = this.sectionTexts[i]; 
			sectionText = replaceAllByTemplate(sectionText, '*', boldTemplate, 'boldTextSocket');
			sectionText = replaceAllByTemplate(sectionText, '_', italicTemplate, 'italicTextSocket');
			fullSectionText += sectionText;
			if(i != this.sectionTexts.length - 1) {
				fullSectionText += breakTemplate;
				fullSectionText += breakTemplate;
			}
		}
		template = template.replace('textSocket', fullSectionText);
		return template;
	}
}
