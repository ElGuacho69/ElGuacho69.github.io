import { getAllAnimals } from '../../persistance/AnimalRepository';
import { Animal } from '../model/Animal';

export function loadAnimals(): void {
	let animals: Animal[] = getAllAnimals();
	const statblockContainer: HTMLElement = document.getElementById('statblock-container') as HTMLElement;
	animals.forEach((animal: Animal) => {
		console.log(animal.toHtml());
		statblockContainer.insertAdjacentHTML('beforeend', animal.toHtml());
	});
}
