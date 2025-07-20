import { getAllAnimals } from '../persistance/AnimalRepository';
import { Animal } from './model/Animal';
import { navbarItemTemplate } from './model/Templates';
import { StatService } from './StatService';

export function loadAnimals(): void {
	let animals: Animal[] = getAllAnimals();
	const statblockContainer: HTMLElement = document.getElementById('statblock-container') as HTMLElement;
	const navbar: HTMLElement = document.getElementById('navbar') as HTMLElement;
	const statService: StatService = new StatService();
	animals.forEach((animal: Animal) => {
		if(animal.getNeededLevel() > statService.getLevel())
			animal.lock()
		const navbarHtml = navbarItemTemplate.replace('idSocket', animal.getId()).replace('nameSocket', animal.getName());
		navbar.insertAdjacentHTML('beforeend', navbarHtml);
		statblockContainer.insertAdjacentHTML('beforeend', animal.toHtml());
	});
}
