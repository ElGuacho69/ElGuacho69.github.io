import { sectionTemplate, sectionEntryTemplate, boldTemplate, italicTemplate } from "./Statblock";
export class Section {
	title: string;
	sectionTexts: string[];

	constructor(title: string, sectionTexts: string[]){
		this.title = title;
		this.sectionTexts = sectionTexts;
	}

	toHtml(): string {
		//todo
	}
}
