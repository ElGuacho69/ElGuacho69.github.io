export class StatRepository {

	private static readonly characterURL: string = 'https://nivel20.com/s/w4eazczc';

	private static instance: StatRepository;
	private document: Document;

	private static readonly STR: number = 0;
	private static readonly DEX: number = 1;
	private static readonly CON: number = 2;
	private static readonly INT: number = 3;
	private static readonly WIS: number = 4;
	private static readonly CHA: number = 5;

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

	public getStat(index: number): number {
		const characterDetails: Element = this.document.getElementsByClassName("character-details")[0];
		console.log(characterDetails.innerHTML);
		const tabContent: Element = characterDetails.getElementsByClassName("tab-content")[0];
		const panelInfo: Element = tabContent.getElementsByClassName("tab-pane")[0];
		const abilityGrid: Element = panelInfo.getElementsByClassName("card-body")[0].getElementsByClassName("ability-grid")[0];
		const abilityCell: Element = abilityGrid.getElementsByClassName("ability-cell")[index];
		return Number.parseInt(abilityCell.getElementsByClassName("value")[0].innerHTML);
	}

	public getIntelligence(): number {
		return this.getStat(StatRepository.INT);
	}

	public getWisdom(): number {
		return this.getStat(StatRepository.WIS);
	}
	
	public getCharisma(): number {
		return this.getStat(StatRepository.CHA);
	}
}
