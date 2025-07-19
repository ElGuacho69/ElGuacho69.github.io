import { sectionTemplate, boldTemplate, italicTemplate } from "./Templates";
export class Section {
	title: string;
	sectionTexts: string[];

	constructor(title: string, sectionTexts: string[]){
		this.title = title;
		this.sectionTexts = sectionTexts;
	}

	toHtml(): string {
		let template: string = sectionTemplate;
		template = template.replace('titleSocket', this.title);
		let fullSectionText: string = "";
		this.sectionTexts.forEach((sectionText: string) => {
			sectionText = this.replaceAllByTemplate(sectionText, '*', boldTemplate, 'boldTextSocket');
			sectionText = this.replaceAllByTemplate(sectionText, '_', italicTemplate, 'italicTextSocket');
			fullSectionText += sectionText;
		});
		template = template.replace('textSocket', fullSectionText);
		return template;
	}

	replaceByTemplate(originalString: string, delimiter: string, template: string, socketName :string): string {
		let splittedString: string[] = originalString.split(delimiter);
		let templateArray: string[] = template.split(socketName);
		splittedString.splice(1, 0, templateArray[0]);
		splittedString.splice(3, 0, templateArray[1]);
		return splittedString.join('');
	}

	replaceAllByTemplate(originalString: string, delimiter: string, template: string, socketName :string): string {
		while(originalString.split(delimiter).length != 1) {
			originalString = this.replaceByTemplate(originalString, delimiter, template, socketName);
		}
		return originalString;
	}
}
