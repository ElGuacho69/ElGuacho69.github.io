
	export function replaceByTemplate(originalString: string, delimiter: string, template: string, socketName :string): string {
		let splittedString: string[] = splitFirstOccurrence(originalString, delimiter);
		const templateArray: string[] = template.split(socketName);
		splittedString.splice(1, 0, templateArray[0]);
		splittedString.splice(3, 0, templateArray[1]);
		return splittedString.join('');
	}

	export function replaceAllByTemplate(originalString: string, delimiter: string, template: string, socketName :string): string {
		while(originalString.split(delimiter).length != 1) {
			originalString = replaceByTemplate(originalString, delimiter, template, socketName);
		}
		return originalString;
	}

	export function splitFirstOccurrence(originalString: string, delimiter: string) {
		const arr: string[] = originalString.split(delimiter);
		let result = arr.splice(0,2);
		result.push(arr.join(delimiter));
		return result;
	}
