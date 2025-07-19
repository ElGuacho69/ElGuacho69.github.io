import { sectionTemplate, boldTemplate, italicTemplate, breakTemplate } from "./Templates";
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
		for(let i: number = 0; i < this.sectionTexts.length; i++) {
			let sectionText: string = this.sectionTexts[i]; 
			sectionText = this.replaceAllByTemplate(sectionText, '*', boldTemplate, 'boldTextSocket');
			sectionText = this.replaceAllByTemplate(sectionText, '_', italicTemplate, 'italicTextSocket');
			fullSectionText += sectionText;
			if(i != this.sectionTexts.length - 1) {
				fullSectionText += breakTemplate;
				fullSectionText += breakTemplate;
			}
		}
		template = template.replace('textSocket', fullSectionText);
		return template;
	}

	replaceByTemplate(originalString: string, delimiter: string, template: string, socketName :string): string {
		let splittedString: string[] = this.splitFirst(originalString, delimiter);
		const templateArray: string[] = template.split(socketName);
		splittedString.splice(1, 0, templateArray[0]);
		splittedString.splice(3, 0, templateArray[1]);
		return splittedString.join('');
	}

	splitFirst(originalString: string, delimiter: string) {
		const arr: string[] = originalString.split(delimiter);
		let result = arr.splice(0,2);
		result.push(arr.join(delimiter));
		return result;
	}

	replaceAllByTemplate(originalString: string, delimiter: string, template: string, socketName :string): string {
		while(originalString.split(delimiter).length != 1) {
			originalString = this.replaceByTemplate(originalString, delimiter, template, socketName);
		}
		return originalString;
	}
}
