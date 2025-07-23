export class StatRepository {

	private static readonly characterURL: string = 'https://nivel20.com/s/w4eazczc';

	private static instance: StatRepository;
	private document: Document;

	private constructor() {
		
	}

	private async initializeStatRepository(): Promise<void> {
		const response = await fetch(StatRepository.characterURL);
		const parser = new DOMParser();
		const document = parser.parseFromString(await response.text(), 'text/html');
		this.document = document;
	}

	public static async getInstance(): Promise<StatRepository> {
		if(StatRepository.instance == null) {
			let statRepository: StatRepository = new StatRepository();
			await statRepository.initializeStatRepository();
			StatRepository.instance = statRepository;
			return statRepository;
		} else {
			return StatRepository.instance;
		}
	}

	public getLevel(): number {
		const characterDesc: Element = this.document.getElementsByClassName("character-desc")[0];
		const levelDiv: Element = characterDesc.getElementsByClassName("col-12")[1];
		const parsedLevelDiv: string[] = levelDiv.innerHTML.split(' ');
		const level: number = Number.parseInt(parsedLevelDiv[parsedLevelDiv.length - 1]);
		return level;
	}
}
