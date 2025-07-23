import { getAllAnimals } from '../persistance/AnimalRepository';
import { Animal } from './model/Animal';
import { navbarItemTemplate } from './model/Templates';
import { StatService } from './StatService';

export async function loadAnimals(): Promise<void> {
	let animals: Animal[] =  await getAllAnimals();
	animals.sort(compareAnimals);
	const statblockContainer: HTMLElement = document.getElementById('statblock-container') as HTMLElement;
	const navbar: HTMLElement = document.getElementById('navbar') as HTMLElement;
	const statService: StatService = new StatService();

	const characterLevel = await statService.getLevel();
	const characterIntelligence = await statService.getIntelligence();
	const characterWisdom = await statService.getWisdom();
	const characterCharisma = await statService.getCharisma();

	animals.forEach((animal: Animal) => {

		if(animal.getNeededLevel() > characterLevel)
			animal.lock()
		animal.setIntelligence(characterIntelligence);
		animal.setWisdom(characterWisdom);
		animal.setCharisma(characterCharisma);

		statblockContainer.insertAdjacentHTML('beforeend', animal.toHtml());

		const navbarHtml = navbarItemTemplate.replace('idSocket', animal.getId()).replace('nameSocket', animal.getName());
		navbar.insertAdjacentHTML('beforeend', navbarHtml);
	});
}

function compareAnimals(a: Animal, b: Animal): number {
	return a.getChallengeRating() - b.getChallengeRating();
}
