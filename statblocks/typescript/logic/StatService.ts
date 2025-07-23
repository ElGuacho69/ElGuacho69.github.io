import { StatRepository } from "../persistance/nivel20API/StatRepository";
export class StatService {
	async getLevel(): Promise<number> {
		const statRepository: StatRepository = await StatRepository.getInstance();
		return statRepository.getLevel();
	}

	async getIntelligence(): Promise<number> {
		return 11;
	}

	async getWisdom(): Promise<number> {
		return 16;
	}

	async getCharisma(): Promise<number> {
		return 10;
	}
}
