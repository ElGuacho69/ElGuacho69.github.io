import { Animal } from '../logic/model/Animal';
import { animalJsonToAnimal } from './AnimalMapper';

export async function getAllAnimals(): Promise<Animal[]> {
	const list: any = await fetchJson('https://elguacho69.github.io/statblocks/animals/_list.json');
	const jsonArray: any[] = [];
	for(let i: number = 0; i < list.animals.length; i++) {
		let animal = list.animals[i];
		jsonArray.push(await fetchJson('https://elguacho69.github.io/statblocks/animals/' + animal + '.json'))
	}
	const animalArray: Animal[] = jsonArray.map(animalJsonToAnimal);
	return animalArray;
}

async function fetchJson(url: string): Promise<any> {
	const response = await fetch(url);
	return await response.json();
}
