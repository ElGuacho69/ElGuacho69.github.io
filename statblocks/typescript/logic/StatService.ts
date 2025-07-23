import { StatRepository } from "../persistance/nivel20API/StatRepository";
export class StatService {
	async getLevel(): Promise<number> {
		const statRepository: StatRepository = await StatRepository.getInstance();
		return statRepository.getLevel();
	}

	async getIntelligence(): Promise<number> {
		const statRepository: StatRepository = await StatRepository.getInstance();
		return statRepository.getIntelligence();
	}

	async getWisdom(): Promise<number> {
		const statRepository: StatRepository = await StatRepository.getInstance();
		return statRepository.getWisdom();
	}

	async getCharisma(): Promise<number> {
		const statRepository: StatRepository = await StatRepository.getInstance();
		return statRepository.getCharisma();
	}
}
