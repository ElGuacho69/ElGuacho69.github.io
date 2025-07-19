import { getAllAnimals } from '../persistance/AnimalRepository';
import { Animal } from './model/Animal';
import { navbarItemTemplate } from './model/Templates';

export function loadAnimals(): void {
	let animals: Animal[] = getAllAnimals();
	const statblockContainer: HTMLElement = document.getElementById('statblock-container') as HTMLElement;
	const navbar: HTMLElement = document.getElementById('navbar') as HTMLElement;
	animals.forEach((animal: Animal) => {
		const navbarHtml = navbarItemTemplate.replace('idSocket', animal.getId()).replace('nameSocket', animal.getName());
		navbar.insertAdjacentHTML('beforeend', navbarHtml);
		statblockContainer.insertAdjacentHTML('beforeend', animal.toHtml());
	});
}
